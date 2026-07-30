from flask import Flask, render_template, request, jsonify
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# ==============================
# Gemini Configuration
# ==============================

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file")

client = genai.Client(api_key=api_key)

MODEL = "gemini-3-flash-preview"


# ==============================
# AI SYSTEM INSTRUCTION
# ==============================

SYSTEM_PROMPT = """
You are Student AI, a helpful academic assistant for college students.

Your job is to explain academic concepts clearly and naturally.

IMPORTANT RESPONSE STYLE:

- Respond like ChatGPT or Gemini.
- Do NOT start every answer with phrases like "Hey there!".
- Do NOT unnecessarily repeat the user's question.
- Do NOT use excessive headings.
- Keep answers clear, natural and conversational.
- Use Markdown when useful.
- Use bullet points for lists.
- Use numbered steps for procedures.
- Use code blocks for programming code.
- Explain code briefly after providing it.
- Give simple examples when they improve understanding.
- For difficult topics, explain from basic to advanced.
- For exam questions, focus on important points.
- For programming questions, provide working code.
- If the user asks for a short answer, keep it short.
- If the user asks for detailed explanation, provide more detail.
- Do not make answers unnecessarily long.

You are primarily an academic assistant covering:
Python, Java, C, C++, JavaScript,
Data Structures, Algorithms, DBMS, Operating Systems,
Computer Networks, Software Engineering,
Artificial Intelligence, Machine Learning,
Deep Learning, Mathematics and college projects.

Be friendly, professional and student-friendly.
"""


# ==============================
# HOME PAGE
# ==============================

@app.route("/")
def home():
    return render_template("index.html")


# ==============================
# ASK AI
# ==============================

@app.route("/ask", methods=["POST"])
def ask():

    try:
        data = request.get_json()

        question = data.get("question", "").strip()
        history = data.get("history", [])

        if not question:
            return jsonify({
                "error": "Please enter a question."
            }), 400

        # Build conversation
        contents = [
            {
                "role": "user",
                "parts": [
                    {
                        "text": SYSTEM_PROMPT
                    }
                ]
            }
        ]

        # Add previous conversation
        for message in history[-12:]:

            role = message.get("role")
            text = message.get("text", "")

            if not text:
                continue

            if role not in ["user", "model"]:
                continue

            contents.append({
                "role": role,
                "parts": [
                    {
                        "text": text
                    }
                ]
            })

        # Add current question
        contents.append({
            "role": "user",
            "parts": [
                {
                    "text": question
                }
            ]
        })

        response = client.models.generate_content(
            model=MODEL,
            contents=contents
        )

        answer = response.text

        return jsonify({
            "answer": answer
        })

    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500


# ==============================
# RUN APPLICATION
# ==============================

if __name__ == "__main__":
    app.run(
        debug=True,
        host="127.0.0.1",
        port=5000
    )