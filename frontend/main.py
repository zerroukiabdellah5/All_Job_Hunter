import os
import json
from pypdf import PdfReader
from pdf2image import convert_from_path
import pytesseract

# Set Tesseract path for Windows OCR
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def load_profile_files():
    profile_dir = "Profile"
    if not os.path.exists(profile_dir):
        return []
    return [f for f in os.listdir(profile_dir) if f.endswith('.pdf')]

def extract_text_with_ocr(file_path):
    text = ""
    try:
        images = convert_from_path(file_path)
        for image in images:
            text += pytesseract.image_to_string(image)
    except Exception as e:
        print(f"OCR Error: {e}")
    return text

def load_profile_data():
    profile_dir = "Profile"
    files = load_profile_files()
    profile_data = {}
    
    for file in files:
        file_path = os.path.join(profile_dir, file)
        reader = PdfReader(file_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
        
        if len(text.strip()) < 50:
            text = extract_text_with_ocr(file_path)
            
        profile_data[file] = text
    return profile_data

def evaluate_job_match(profile_data, job_description):
    job_text = job_description.lower()
    score = 0
    reasons = []
    
    tech_keywords = ["oracle", "sql", "database", "it support", "pos", "support specialist"]
    matched_skills = [kw for kw in tech_keywords if kw in job_text]
    
    if len(matched_skills) >= 2:
        score += 40
        reasons.append(f"Strong technical match: {', '.join(matched_skills)}")
    else:
        score += 10
        reasons.append("Low technical keyword overlap.")
        
    if "c1 german" in job_text or "native german" in job_text:
        score -= 30
        reasons.append("Warning: Strict C1/Native German required.")
    else:
        score += 30
        reasons.append("Friendly language/international requirement.")
        
    if score >= 60:
        decision = "🟢 APPLY NOW"
    elif 30 <= score < 60:
        decision = "🟡 APPLY WITH CAUTION"
    else:
        decision = "🔴 SKIP / DON'T APPLY"
        
    return decision, score, reasons

def generate_cover_letter(job_title, company_name="Hiring Team"):
    """
    Generates a tailored professional cover letter highlighting ZAB recognition and technical skills.
    """
    letter = f"""
Dear {company_name},

I am writing to express my strong interest in the **{job_title}** position. With a solid background in IT operations, database administration, and POS systems support, I am confident in my ability to bring immediate value to your technical team.

Key highlights of my professional profile:
- **Technical Expertise:** Proven hands-on experience with Oracle SQL, database management, and technical troubleshooting.
- **Official Qualification:** Holding a recognized technical diploma backed by official German ZAB evaluation (Ref: ZAB_DAB2026_3493), confirming full alignment with European standards.
- **Operational Readiness:** Skilled in retail POS infrastructure and dedicated IT support operations.

I am eager to contribute my technical skills and international background to your organization. Thank you for considering my application. I look forward to discussing how my profile matches your requirements.

Sincerely,
Adellah
    """
    return letter.strip()

def main():
    print("==========================================")
    print("   AI Career Hunter — Full Pipeline       ")
    print("==========================================")
    
    profile_data = load_profile_data()
    print(f"Loaded profile memory: {len(profile_data)} documents.")
    
    live_jobs_feed = [
        {
            "title": "Junior Database Administrator & IT Support",
            "source": "StepStone Germany",
            "description": "Looking for an IT specialist with SQL and database knowledge. POS systems support is a big plus. English is required, German A2/B1 is sufficient. ZAB recognition welcomed."
        },
        {
            "title": "IT Operations & POS Support Specialist",
            "source": "Make it in Germany",
            "description": "Support retail POS systems and Oracle SQL databases. International applicants with vocational training or technical diploma encouraged to apply."
        }
    ]
    
    print(f"\nProcessing and generating cover letters for qualified roles...")
    print("------------------------------------------")
    
    for idx, job in enumerate(live_jobs_feed, 1):
        print(f"\n[Job {idx}] {job['title']} (Source: {job['source']})")
        decision, score, reasons = evaluate_job_match(profile_data, job['description'])
        print(f"Decision : {decision} (Score: {score}/100)")
        
        if "APPLY NOW" in decision:
            print(">>> Generating Tailored Cover Letter...")
            cover_letter = generate_cover_letter(job['title'])
            print("\n----------------- COVER LETTER PREVIEW -----------------")
            print(cover_letter)
            print("--------------------------------------------------------")

if __name__ == "__main__":
    main()