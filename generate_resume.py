#!/usr/bin/env python3
"""Generate Ishwar KC's resume PDF."""

from pathlib import Path

from fpdf import FPDF


ROOT = Path(__file__).resolve().parent
BLUE = (42, 83, 120)
DARK = (25, 25, 25)
ARIAL_FONT_DIR = Path("/System/Library/Fonts/Supplemental")


class ResumePDF(FPDF):
    pass


pdf = ResumePDF()
pdf.add_font("Arial", "", str(ARIAL_FONT_DIR / "Arial.ttf"))
pdf.add_font("Arial", "B", str(ARIAL_FONT_DIR / "Arial Bold.ttf"))
pdf.add_font("Arial", "I", str(ARIAL_FONT_DIR / "Arial Italic.ttf"))
pdf.add_font("Arial", "BI", str(ARIAL_FONT_DIR / "Arial Bold Italic.ttf"))
pdf.set_margins(12, 11, 12)
pdf.set_auto_page_break(auto=True, margin=12)
pdf.add_page()
pdf.set_text_color(*DARK)


def section_heading(text):
    pdf.ln(3.05)
    pdf.set_font("Arial", "B", 11.5)
    pdf.set_text_color(*BLUE)
    pdf.cell(0, 5.2, text.upper(), new_x="LMARGIN", new_y="NEXT")
    pdf.set_draw_color(*BLUE)
    pdf.set_line_width(0.35)
    pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())
    pdf.ln(2.15)
    pdf.set_text_color(*DARK)


def paragraph(text, size=9.2):
    pdf.set_font("Arial", "", size)
    pdf.multi_cell(0, 4.1, text, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.7)


def bullet(text):
    pdf.set_font("Arial", "", 9.2)
    pdf.set_x(pdf.l_margin + 1)
    pdf.multi_cell(0, 4.1, f"- {text}", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.3)


def dated_entry(title, detail, dates, location):
    pdf.ln(1.1)
    left_width = pdf.w - pdf.l_margin - pdf.r_margin - 31
    pdf.set_font("Arial", "B", 9.1)
    pdf.cell(left_width, 4, title, new_x="RIGHT", new_y="TOP")
    pdf.set_font("Arial", "", 8.8)
    pdf.cell(31, 4, dates, align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Arial", "I", 8.7)
    pdf.cell(left_width, 3.8, detail, new_x="RIGHT", new_y="TOP")
    pdf.set_font("Arial", "", 8.7)
    pdf.cell(31, 3.8, location, align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.7)


def experience(role, dates, location, responsibilities):
    pdf.ln(1.7)
    right_width = 31
    left_width = pdf.w - pdf.l_margin - pdf.r_margin - right_width
    pdf.set_font("Arial", "B", 9.2)
    pdf.cell(
        left_width,
        4,
        f"Cedar Gate Technologies | {role}",
        new_x="RIGHT",
        new_y="TOP",
    )
    pdf.set_font("Arial", "", 8.8)
    pdf.cell(right_width, 4, dates, align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Arial", "", 8.7)
    pdf.cell(left_width, 3.8)
    pdf.cell(right_width, 3.8, location, align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.7)
    for item in responsibilities:
        bullet(item)


pdf.set_font("Arial", "B", 22)
pdf.set_text_color(*BLUE)
pdf.cell(0, 8, "Ishwar KC", new_x="LMARGIN", new_y="NEXT")
pdf.set_text_color(*DARK)
pdf.set_font("Arial", "", 9)
pdf.multi_cell(
    0,
    4.1,
    "ishwarkc133@gmail.com  |  +977 9840005868  |  Balaju, Kathmandu",
    new_x="LMARGIN",
    new_y="NEXT",
)
pdf.multi_cell(
    0,
    4.1,
    "LinkedIn: https://www.linkedin.com/in/ishwar-kc-6a3681245/  |  "
    "ORCID: https://orcid.org/0009-0008-6823-5128",
    new_x="LMARGIN",
    new_y="NEXT",
)

section_heading("Profile")
paragraph(
    "Results-oriented Data QA Engineer with 3 years of experience in the U.S. "
    "healthcare domain. Skilled in healthcare data, SQL, and Python, with "
    "experience designing ETL test cases, performing source-to-target validations, "
    "and analyzing large datasets to ensure data accuracy and integrity."
)

section_heading("Academics")
dated_entry(
    "Bachelor of Computer Science (BSc CS), Kathmandu University",
    "Computer Science | CGPA: 3.81",
    "2019 - 2024",
    "Dhulikhel",
)
dated_entry(
    "Higher Secondary, Sainik Awasiya Mahavidyalaya",
    "CGPA: 3.50",
    "2017 - 2019",
    "Bhaktapur",
)
dated_entry(
    "Secondary Education Examination (SEE), Sainik Awasiya Mahavidyalaya",
    "GPA: 3.70",
    "2016",
    "Bhaktapur",
)

section_heading("Publications")
pdf.set_font("Arial", "B", 9)
pdf.multi_cell(
    0,
    4.1,
    "Harnessing the Tweet Stream: Deep Learning for Natural Disaster Detection, "
    "IETE Kolkata Centre",
    new_x="LMARGIN",
    new_y="NEXT",
)
paragraph(
    "Joshi, A., Subedi, N., Bista, H., & Ishwar, K.C. (2024). Harnessing the Tweet "
    "Stream: Deep Learning for Natural Disaster Detection. In: Mandal, J.K. et al. "
    "(eds.), Machine Learning for Social Transformation. EAIT 2024. Lecture Notes "
    "in Networks and Systems, vol. 1131. Springer. "
    "https://doi.org/10.1007/978-981-97-7532-3_7.",
    size=8.8,
)

section_heading("Professional Experience")
experience(
    "Data QA Engineer",
    "Aug 2025 - Present",
    "Sanepa, Lalitpur",
    [
        "Mentor junior QA engineers in data validation, SQL, and quality assurance best practices.",
        "Collaborate with cross-functional teams to maintain data integrity and deliver reliable, scalable healthcare data solutions.",
        "Design and execute ETL test scenarios and test cases in Zephyr to ensure accurate source-to-target data validation.",
    ],
)
experience(
    "Associate Data QA Engineer",
    "Apr 2024 - Aug 2025",
    "Sanepa, Lalitpur",
    [
        "Perform SQL-based data validation and prepare QA reports.",
        "Improve monthly data-scrubbing workflows and maintain root cause analysis (RCA) documentation.",
        "Support automation initiatives across QA processes.",
        "Help design and execute ETL test cases and data validation checks.",
        "Write SQL queries to verify source-to-target data and investigate discrepancies.",
        "Use Python and Excel to automate routine data validation and analysis.",
        "Work with AWS S3 and Amazon Redshift to validate healthcare datasets.",
    ],
)
experience(
    "Data QA Intern",
    "Apr 2024 - Aug 2024",
    "Sanepa, Lalitpur",
    [
        "Develop familiarity with U.S. healthcare data standards and regulatory requirements.",
        "Validate healthcare datasets for accuracy, completeness, and consistency.",
        "Review mapping specifications and identify gaps in business requirements.",
    ],
)

section_heading("Honors and Awards")
for achievement in [
    "Hult Prize winner, 2022/23 - Kathmandu University",
    "Idea Pitching winner at IT MEET 2023",
    "Ideathon winner, Kathmandu University, 2023",
    "Second place, National Cyber Olympiad Nepal, 2016",
    "Second place, Knowledge Mastero Young Nepal Edition, 2022",
]:
    pdf.set_font("Arial", "B", 9.1)
    pdf.multi_cell(0, 4.1, achievement, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.35)

section_heading("Core Competencies")
for competency in [
    ("Data Analysis", "Extracting, cleaning, transforming, and aggregating data using Redshift and PostgreSQL."),
    ("U.S. Healthcare", "CMS code sets (ICD-10, CPT-4, HCPCS, NDC, NPI) and HIPAA compliance."),
    ("Cloud and Big Data", "Hands-on experience with Amazon S3; familiarity with Hadoop for large-scale data processing."),
    ("Programming and Automation", "SQL and Python scripting for data processing and automation."),
    ("Collaboration", "Agile team player skilled at translating requirements into practical solutions."),
    ("Problem Solving", "Strong analytical, troubleshooting, and data integrity skills."),
]:
    pdf.set_font("Arial", "B", 9)
    label = f"- {competency[0]}: "
    label_width = pdf.get_string_width(label)
    pdf.cell(label_width, 3.5, label)
    pdf.set_font("Arial", "", 9)
    pdf.multi_cell(
        0,
        4,
        competency[1],
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.ln(0.35)

output_path = ROOT / "public" / "resume.pdf"
pdf.output(str(output_path))
print(f"Resume generated at {output_path}")
