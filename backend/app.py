import os
import json
import streamlit as st
from pypdf import PdfReader
from pdf2image import convert_from_path
import pytesseract

# Set Tesseract path for Windows OCR
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

st.set_page_config(
    page_title="AI Career Hunter — Professional Edition",
    page_icon="🚀",
    layout="wide"
)

# App Header
st.title("🚀 AI Career Hunter — Smart Recruitment Dashboard")
st.markdown("Your automated platform for German and Benelux job filtering, skill matching, and tailored cover letter generation.")

# Sidebar Configuration
st.sidebar.header("⚙️ System Settings")
api_key = st.sidebar.text_input("AI API Key (Optional for advanced LLM)", type="password")
market_choice = st.sidebar.selectbox("Target Market", ["Germany (70%) & Benelux (30%)", "Germany Only", "Benelux Only"])
st.sidebar.markdown("---")
st.sidebar.info("Status: Connected to profile memory and ZAB recognition documents.")

# Main Layout Columns
col1, col2 = st.columns([1, 1])

with col1:
    st.subheader("📁 Profile Documents Status")
    profile_dir = "Profile"
    if os.path.exists(profile_dir):
        files = [f for f in os.listdir(profile_dir) if f.endswith('.pdf')]
        st.success(f"Successfully loaded {len(files)} documents into memory:")
        for file in files:
            st.text(f"🔹 {file}")
    else:
        st.warning("Profile directory not found.")

with col2:
    st.subheader("🎯 Job Match Engine")
    job_title = st.text_input("Target Job Title", "Junior Database Administrator & IT Support")
    job_description = st.text_area(
        "Enter Job Description Here", 
        "Looking for an IT specialist with SQL, database knowledge, and POS systems support. English required, ZAB recognition welcomed."
    )
    
    if st.button("🚀 Evaluate Job & Generate Cover Letter"):
        st.markdown("---")
        st.subheader("📊 Intelligence Analysis Results")
        
        job_text = job_description.lower()
        score = 0
        reasons = []
        
        # Technical Match
        if "sql" in job_text or "database" in job_text or "pos" in job_text:
            score += 40
            reasons.append("Strong technical match found (SQL/Database/POS).")
        else:
            score += 10
            reasons.append("Low technical keyword overlap.")
            
        # Language / ZAB check
        if "c1 german" in job_text or "native german" in job_text:
            score -= 30
            reasons.append("Warning: Strict C1/Native German language required.")
        else:
            score += 30
            reasons.append("Language requirements are international-friendly.")
            
        # Decision
        if score >= 60:
            st.success("Final Decision: 🟢 APPLY NOW (Recommended)")
            st.metric("Smart Match Score", f"{score}/100")
            
            with st.expander("🔍 Technical Reasons Details"):
                for r in reasons:
                    st.write(f"- {r}")
            
            st.markdown("### ✉️ Generated Cover Letter")
            cover_letter = f"""
Dear Hiring Team,

I am writing to express my strong interest in the **{job_title}** position. With a solid background in IT operations, database administration, and POS systems support, I am confident in my ability to bring immediate value to your technical team.

Key highlights of my professional profile:
- **Technical Expertise:** Proven hands-on experience with Oracle SQL, database management, and technical troubleshooting.
- **Official Qualification:** Holding a recognized technical diploma backed by official German ZAB evaluation (Ref: ZAB_DAB2026_3493), confirming full alignment with European standards.
- **Operational Readiness:** Skilled in retail POS infrastructure and dedicated IT support operations.

I am eager to contribute my technical skills and international background to your organization. Thank you for considering my application. I look forward to discussing how my profile matches your requirements.

Sincerely,
Adellah
            """
            st.code(cover_letter.strip(), language="markdown")
            st.download_button("📥 Download Cover Letter (.txt)", cover_letter, file_name=f"Cover_Letter_{job_title.replace(' ', '_')}.txt")
            
        else:
            st.error("Final Decision: 🔴 SKIP / DON'T APPLY")
            st.metric("Smart Match Score", f"{score}/100")
            for r in reasons:
                st.write(f"- {r}")