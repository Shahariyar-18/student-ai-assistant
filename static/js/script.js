/* =========================================================
   STUDENT AI ASSISTANT - JAVASCRIPT
========================================================= */


/* =========================================================
   GLOBAL
========================================================= */

const questionInput = document.getElementById("question");
const chatBox = document.getElementById("chat-box");
const sendButton = document.getElementById("send-btn");
const welcome = document.getElementById("welcome");

let isSending = false;


/* =========================================================
   TOOL DATA
========================================================= */

const toolData = {

    study: {

        icon: "📚",

        title: "Study Help",

        description: "Choose what you want to learn.",

        options: [

            {
                icon: "📖",
                title: "Explain a topic",
                description: "Understand any topic in simple language",
                prompt: "Explain this topic in simple language with an example: "
            },

            {
                icon: "📝",
                title: "Create short notes",
                description: "Get quick revision notes",
                prompt: "Create short and easy-to-revise notes about: "
            },

            {
                icon: "❓",
                title: "Ask a doubt",
                description: "Get help with an academic doubt",
                prompt: "Explain this academic doubt clearly: "
            },

            {
                icon: "🔍",
                title: "Deep explanation",
                description: "Learn a topic in detail",
                prompt: "Explain this topic in detail with examples: "
            }

        ]

    },


    programming: {

        icon: "💻",

        title: "Programming",

        description: "Learn coding and solve programming problems.",

        options: [

            {
                icon: "🐍",
                title: "Python Help",
                description: "Learn Python concepts and syntax",
                prompt: "Explain this Python concept with an example: "
            },

            {
                icon: "☕",
                title: "Java Help",
                description: "Learn Java programming",
                prompt: "Explain this Java concept with an example: "
            },

            {
                icon: "🐞",
                title: "Debug My Code",
                description: "Find and fix programming errors",
                prompt: "Help me debug this code. Explain the error and give the corrected code:\n"
            },

            {
                icon: "🧩",
                title: "DSA Problem",
                description: "Practice data structures and algorithms",
                prompt: "Explain and solve this DSA problem step by step: "
            },

            {
                icon: "💡",
                title: "Programming Project",
                description: "Get beginner-friendly project ideas",
                prompt: "Give me beginner-friendly programming project ideas with technologies used."
            }

        ]

    },


    exam: {

        icon: "📝",

        title: "Exam Preparation",

        description: "Prepare smarter for your exams.",

        options: [

            {
                icon: "📅",
                title: "Study Plan",
                description: "Create a personalized study plan",
                prompt: "Create a practical study plan for my upcoming exams."
            },

            {
                icon: "❓",
                title: "Practice Questions",
                description: "Generate questions for practice",
                prompt: "Give me 10 important practice questions on: "
            },

            {
                icon: "📌",
                title: "Important Topics",
                description: "Find important topics to study",
                prompt: "List the most important exam topics for: "
            },

            {
                icon: "🧠",
                title: "Quick Revision",
                description: "Revise a subject quickly",
                prompt: "Give me quick revision notes for: "
            }

        ]

    },


    aiml: {

        icon: "🧠",

        title: "AI & Machine Learning",

        description: "Learn AI and ML concepts easily.",

        options: [

            {
                icon: "🤖",
                title: "Machine Learning",
                description: "Understand ML concepts",
                prompt: "Explain machine learning in simple language with a real-world example: "
            },

            {
                icon: "🧠",
                title: "Deep Learning",
                description: "Learn neural networks and deep learning",
                prompt: "Explain this deep learning concept simply: "
            },

            {
                icon: "📊",
                title: "ML Algorithms",
                description: "Understand common ML algorithms",
                prompt: "Explain this machine learning algorithm with an example: "
            },

            {
                icon: "🚀",
                title: "AI Project",
                description: "Get AI/ML project ideas",
                prompt: "Give me 5 beginner-friendly AI and ML project ideas with technologies used."
            }

        ]

    }

};


/* =========================================================
   SUGGESTION DATA
========================================================= */

const suggestionData = {

    python: {

        icon: "🐍",

        title: "Learn Python",

        description: "Choose how you want to learn Python.",

        options: [

            {
                icon: "📖",
                title: "Python Basics",
                description: "Learn Python from the beginning",
                prompt: "Explain Python basics in simple language with examples."
            },

            {
                icon: "🧩",
                title: "Python Practice",
                description: "Practice Python programming",
                prompt: "Give me 5 beginner Python programming problems with solutions."
            },

            {
                icon: "🚀",
                title: "Python Projects",
                description: "Build beginner projects",
                prompt: "Give me 5 beginner-friendly Python project ideas."
            }

        ]

    },


    ml: {

        icon: "🤖",

        title: "Machine Learning",

        description: "Start learning machine learning.",

        options: [

            {
                icon: "📖",
                title: "ML Basics",
                description: "Learn the fundamentals",
                prompt: "Explain machine learning in simple language."
            },

            {
                icon: "📊",
                title: "ML Algorithms",
                description: "Learn common algorithms",
                prompt: "Explain the most important machine learning algorithms with examples."
            },

            {
                icon: "🚀",
                title: "ML Projects",
                description: "Find project ideas",
                prompt: "Give me 5 beginner machine learning project ideas."
            }

        ]

    },


    exam: {

        icon: "📖",

        title: "Exam Preparation",

        description: "Prepare efficiently for exams.",

        options: [

            {
                icon: "📅",
                title: "Create Study Plan",
                description: "Build a daily study schedule",
                prompt: "Create a practical study plan for my upcoming exams."
            },

            {
                icon: "📝",
                title: "Important Questions",
                description: "Practice important questions",
                prompt: "Give me important exam questions for: "
            }

        ]

    },


    project: {

        icon: "🚀",

        title: "Project Ideas",

        description: "Find a project that matches your skills.",

        options: [

            {
                icon: "🐍",
                title: "Python Projects",
                description: "Beginner Python projects",
                prompt: "Give me 5 beginner Python project ideas with technologies used."
            },

            {
                icon: "🤖",
                title: "AI/ML Projects",
                description: "AI and ML project ideas",
                prompt: "Give me 5 beginner-friendly AI and ML project ideas with technologies used."
            },

            {
                icon: "🌐",
                title: "Web Projects",
                description: "HTML, CSS and JavaScript projects",
                prompt: "Give me 5 beginner-friendly web development project ideas."
            }

        ]

    }

};


/* =========================================================
   OPEN TOOL POPUP
========================================================= */

function openToolPopup(type) {

    const data = toolData[type];

    if (!data) return;

    showModal(data);

}


/* =========================================================
   OPEN SUGGESTION POPUP
========================================================= */

function openSuggestionPopup(type) {

    const data = suggestionData[type];

    if (!data) return;

    showModal(data);

}


/* =========================================================
   SHOW MODAL
========================================================= */

function showModal(data) {

    const modal =
        document.getElementById("tool-modal");

    const icon =
        document.getElementById("modal-icon");

    const title =
        document.getElementById("modal-title");

    const description =
        document.getElementById("modal-description");

    const options =
        document.getElementById("modal-options");


    icon.textContent = data.icon;

    title.textContent = data.title;

    description.textContent = data.description;


    options.innerHTML = "";


    data.options.forEach(option => {

        const button =
            document.createElement("button");

        button.className = "modal-option";


        button.innerHTML = `

            <span class="option-icon">
                ${option.icon}
            </span>

            <span class="option-text">

                <strong>
                    ${option.title}
                </strong>

                <small>
                    ${option.description}
                </small>

            </span>

        `;


        button.onclick = function () {

            closeToolPopup();

            questionInput.value = option.prompt;

            questionInput.focus();

            autoResize();

        };


        options.appendChild(button);

    });


    modal.classList.add("active");

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeToolPopup() {

    const modal =
        document.getElementById("tool-modal");

    modal.classList.remove("active");

}


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE
========================================================= */

function closeModalOutside(event) {

    if (event.target.id === "tool-modal") {

        closeToolPopup();

    }

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeToolPopup();

    }

});


/* =========================================================
   SEND QUESTION
========================================================= */

async function sendQuestion() {

    if (isSending) return;


    const question =
        questionInput.value.trim();


    if (!question) return;


    isSending = true;

    sendButton.disabled = true;


    // Hide welcome screen

    if (welcome) {

        welcome.style.display = "none";

    }


    // Add user message

    addMessage(question, "user");


    // Save history

    saveChatHistory(question);


    // Clear input

    questionInput.value = "";

    autoResize();


    // Add typing

    const typingId =
        addTypingMessage();


    try {


        /*
         IMPORTANT:
         Your Flask app should have:

         @app.route("/ask", methods=["POST"])

         and receive:

         {
             "question": "..."
         }
        */


        const response =
            await fetch("/ask", {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    question: question

                })

            });


        if (!response.ok) {

            throw new Error(
                "Server returned " + response.status
            );

        }


        const data =
            await response.json();


        removeMessage(typingId);


        const answer =
            data.answer ||
            data.response ||
            data.message ||
            "Sorry, I could not generate a response.";


        addMessage(answer, "ai");


    }

    catch (error) {

        console.error(error);


        removeMessage(typingId);


        addMessage(

            "⚠️ Sorry, something went wrong while connecting to the AI. Please check that your Flask server is running.",

            "ai"

        );

    }


    finally {

        isSending = false;

        sendButton.disabled = false;

        questionInput.focus();

    }

}


/* =========================================================
   ADD MESSAGE
========================================================= */

function addMessage(text, sender) {

    const message =
        document.createElement("div");


    message.className =
        "message " + sender;


    const inner =
        document.createElement("div");


    inner.className =
        "message-inner";


    const label =
        document.createElement("div");


    label.className =
        "message-label";


    const avatar =
        document.createElement("div");


    avatar.className =
        "message-avatar";


    const name =
        document.createElement("span");


    if (sender === "user") {

        avatar.textContent = "👤";

        name.textContent = "You";

    }

    else {

        avatar.textContent = "🤖";

        name.textContent = "Student AI";

    }


    label.appendChild(avatar);

    label.appendChild(name);


    const content =
        document.createElement("div");


    content.className =
        "message-content";


    if (sender === "ai") {

        if (typeof marked !== "undefined") {

            const html =
                marked.parse(text);

            content.innerHTML =
                DOMPurify.sanitize(html);

        }

        else {

            content.textContent = text;

        }

    }

    else {

        content.textContent = text;

    }


    inner.appendChild(label);

    inner.appendChild(content);


    // Copy button only for AI

    if (sender === "ai") {

        const actions =
            document.createElement("div");


        actions.className =
            "message-actions";


        const copyButton =
            document.createElement("button");


        copyButton.className =
            "copy-btn";


        copyButton.textContent =
            "📋 Copy";


        copyButton.onclick =
            function () {

                navigator.clipboard
                    .writeText(text)
                    .then(() => {

                        copyButton.textContent =
                            "✓ Copied";

                        setTimeout(() => {

                            copyButton.textContent =
                                "📋 Copy";

                        }, 1500);

                    });

            };


        actions.appendChild(copyButton);

        inner.appendChild(actions);

    }


    message.appendChild(inner);


    chatBox.appendChild(message);


    scrollToBottom();

}


/* =========================================================
   TYPING MESSAGE
========================================================= */

function addTypingMessage() {

    const id =
        "typing-" + Date.now();


    const message =
        document.createElement("div");


    message.className =
        "message ai";


    message.id = id;


    message.innerHTML = `

        <div class="message-inner">

            <div class="message-label">

                <div class="message-avatar">
                    🤖
                </div>

                <span>
                    Student AI
                </span>

            </div>


            <div class="message-content">

                <div class="typing">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        </div>

    `;


    chatBox.appendChild(message);


    scrollToBottom();


    return id;

}


/* =========================================================
   REMOVE MESSAGE
========================================================= */

function removeMessage(id) {

    const element =
        document.getElementById(id);


    if (element) {

        element.remove();

    }

}


/* =========================================================
   SCROLL
========================================================= */

function scrollToBottom() {

    setTimeout(() => {

        chatBox.scrollTop =
            chatBox.scrollHeight;

    }, 50);

}


/* =========================================================
   NEW CHAT
========================================================= */

function newChat() {

    const messages =
        chatBox.querySelectorAll(".message");


    messages.forEach(message => {

        message.remove();

    });


    if (welcome) {

        welcome.style.display = "block";

    }


    questionInput.value = "";

    autoResize();

    questionInput.focus();

}


/* =========================================================
   CHAT HISTORY
========================================================= */

function saveChatHistory(question) {

    let history =
        JSON.parse(
            localStorage.getItem("studentAIHistory") || "[]"
        );


    history.unshift({

        id: Date.now(),

        text: question

    });


    // Keep last 15

    history =
        history.slice(0, 15);


    localStorage.setItem(

        "studentAIHistory",

        JSON.stringify(history)

    );


    renderChatHistory();

}


/* =========================================================
   RENDER HISTORY
========================================================= */

function renderChatHistory() {

    const historyContainer =
        document.getElementById("chat-history");


    if (!historyContainer) return;


    let history =
        JSON.parse(
            localStorage.getItem("studentAIHistory") || "[]"
        );


    historyContainer.innerHTML = "";


    if (history.length === 0) {

        historyContainer.innerHTML = `

            <div style="
                padding: 10px 8px;
                color: #94a3b8;
                font-size: 12px;
            ">

                No recent chats

            </div>

        `;

        return;

    }


    history.forEach(item => {

        const row =
            document.createElement("div");


        row.className =
            "history-item";


        const icon =
            document.createElement("span");


        icon.textContent = "💬";


        const text =
            document.createElement("span");


        text.className =
            "history-text";


        text.textContent = item.text;


        const deleteButton =
            document.createElement("button");


        deleteButton.className =
            "history-delete";


        deleteButton.textContent =
            "🗑";


        deleteButton.title =
            "Delete chat";


        deleteButton.onclick =
            function(event) {

                event.stopPropagation();

                deleteHistoryItem(item.id);

            };


        row.onclick =
            function() {

                questionInput.value =
                    item.text;

                questionInput.focus();

                autoResize();

            };


        row.appendChild(icon);

        row.appendChild(text);

        row.appendChild(deleteButton);


        historyContainer.appendChild(row);

    });

}


/* =========================================================
   DELETE ONE HISTORY ITEM
========================================================= */

function deleteHistoryItem(id) {

    let history =
        JSON.parse(
            localStorage.getItem("studentAIHistory") || "[]"
        );


    history =
        history.filter(item => item.id !== id);


    localStorage.setItem(

        "studentAIHistory",

        JSON.stringify(history)

    );


    renderChatHistory();

}


/* =========================================================
   DELETE ALL HISTORY
========================================================= */

function clearChatHistory() {

    const confirmDelete =
        confirm("Delete all recent chats?");


    if (!confirmDelete) return;


    localStorage.removeItem(
        "studentAIHistory"
    );


    renderChatHistory();

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleTheme() {

    document.body.classList.toggle("dark");


    const dark =
        document.body.classList.contains("dark");


    localStorage.setItem(

        "studentAIDarkMode",

        dark ? "true" : "false"

    );


    const button =
        document.getElementById("theme-btn");


    if (dark) {

        button.textContent = "☀️";

    }

    else {

        button.textContent = "🌙";

    }

}


/* =========================================================
   LOAD THEME
========================================================= */

function loadTheme() {

    const dark =
        localStorage.getItem(
            "studentAIDarkMode"
        ) === "true";


    if (dark) {

        document.body.classList.add("dark");


        const button =
            document.getElementById("theme-btn");


        if (button) {

            button.textContent = "☀️";

        }

    }

}


/* =========================================================
   TEXTAREA AUTO RESIZE
========================================================= */

function autoResize() {

    questionInput.style.height = "auto";


    questionInput.style.height =
        Math.min(
            questionInput.scrollHeight,
            160
        ) + "px";

}


/* =========================================================
   ENTER KEY
========================================================= */

questionInput.addEventListener(

    "keydown",

    function(event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendQuestion();

        }

    }

);


/* =========================================================
   INPUT RESIZE
========================================================= */

questionInput.addEventListener(

    "input",

    autoResize

);


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function() {

        loadTheme();

        renderChatHistory();

        questionInput.focus();

    }

);