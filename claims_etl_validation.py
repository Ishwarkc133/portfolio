"""Sample claims ETL validation.

Runs four data quality checks comparing a source table to a target table:
  1. Row counts match
  2. No duplicate claim IDs in the target
  3. No null member IDs in the target
  4. No mismatched or missing claims (the query shown on the portfolio card)

This demo builds small tables in memory with SQLite so it runs anywhere:
    python3 claims_etl_validation.py

To use it on a real warehouse, replace get_connection() with your own
connection (psycopg2, pyodbc, snowflake-connector, etc.) and point the
table names at your real source and target tables.
"""

import sqlite3


def get_connection():
    """Demo database with sample data. Replace with your real connection."""
    conn = sqlite3.connect(":memory:")
    conn.executescript(
        """
        CREATE TABLE src_claims (claim_id INTEGER, member_id TEXT, paid_amt REAL);
        CREATE TABLE tgt_claims (claim_id INTEGER, member_id TEXT, paid_amt REAL);
        """
    )
    rows = [(i, f"M{1000 + i}", round(50 + i * 1.5, 2)) for i in range(1, 101)]
    conn.executemany("INSERT INTO src_claims VALUES (?,?,?)", rows)
    conn.executemany("INSERT INTO tgt_claims VALUES (?,?,?)", rows)
    return conn


SRC, TGT = "src_claims", "tgt_claims"

# Each check returns a number. Zero means the check passed,
# except row_counts, which returns the difference between the tables.
CHECKS = {
    "Row counts match": f"""
        SELECT (SELECT COUNT(*) FROM {SRC}) - (SELECT COUNT(*) FROM {TGT})
    """,
    "No duplicate claim IDs": f"""
        SELECT COUNT(*) FROM (
            SELECT claim_id FROM {TGT} GROUP BY claim_id HAVING COUNT(*) > 1
        )
    """,
    "No null member IDs": f"""
        SELECT COUNT(*) FROM {TGT} WHERE member_id IS NULL
    """,
    "No mismatched or missing claims": f"""
        SELECT COUNT(*)
        FROM {SRC} s
        LEFT JOIN {TGT} t ON s.claim_id = t.claim_id
        WHERE t.claim_id IS NULL OR s.paid_amt <> t.paid_amt
    """,
}


def run_checks(conn):
    results = []
    for name, sql in CHECKS.items():
        value = conn.execute(sql).fetchone()[0]
        results.append((name, value, value == 0))
    return results


def main():
    conn = get_connection()
    try:
        results = run_checks(conn)
    finally:
        conn.close()

    print("Claims ETL validation")
    print("-" * 44)
    for name, value, passed in results:
        status = "PASS" if passed else "FAIL"
        print(f"[{status}] {name} (issues found: {value})")

    passed_count = sum(1 for _, _, ok in results if ok)
    print("-" * 44)
    print(f"{passed_count}/{len(results)} checks passed")
    return 0 if passed_count == len(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
