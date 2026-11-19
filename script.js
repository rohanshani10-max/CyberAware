
// CyberAware JavaScript

console.log("Welcome to CyberAware!");

// Scroll to Top Functionality

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});







// CYBER THREAT SEARCH FUNCTIONALITY

const threatSearch = document.getElementById("threatSearch");
const threatCards = document.querySelectorAll(".threat-card");
const noThreatResults = document.getElementById("noThreatResults");

if (threatSearch) {

    threatSearch.addEventListener("input", function () {

        const searchValue = this.value.toLowerCase().trim();
        let visibleCards = 0;

        threatCards.forEach(function (card) {

            const threatName = card.textContent.toLowerCase();

            if (threatName.includes(searchValue)) {
                card.style.display = "";
                visibleCards++;
            } else {
                card.style.display = "none";
            }

        });

        if (noThreatResults) {
            noThreatResults.hidden = visibleCards !== 0;
        }

    });

}
// CYBER SAFETY QUIZ

const quizQuestions = [
    {
        question: "1. What should you do if you receive a suspicious bank link?",
        answers: [
            "Click the link immediately",
            "Share your OTP",
            "Ignore it and verify through the official bank",
            "Forward it to friends"
        ],
        correct: 2
    },
    {
        question: "2. What is phishing?",
        answers: [
            "A computer game",
            "A fraud attempt to steal personal information",
            "A type of antivirus",
            "A safe payment method"
        ],
        correct: 1
    },
    {
        question: "3. Should you share your OTP with anyone?",
        answers: [
            "Yes, with bank employees",
            "Yes, with friends",
            "Only online",
            "Never share your OTP"
        ],
        correct: 3
    },
    {
        question: "4. What should you do after noticing online financial fraud in India?",
        answers: [
            "Wait for several days",
            "Call 1930 promptly and report it",
            "Delete all messages",
            "Ignore the transaction"
        ],
        correct: 1
    },
    {
        question: "5. Which password is stronger?",
        answers: [
            "123456",
            "password",
            "Rohan@2026#Secure",
            "abcdef"
        ],
        correct: 2
    },
    {
        question: "6. What is malware?",
        answers: [
            "Malicious software",
            "A search engine",
            "A keyboard",
            "A safe website"
        ],
        correct: 0
    },
    {
        question: "7. What should you do before using public Wi-Fi for banking?",
        answers: [
            "Share your password",
            "Use any available network",
            "Avoid sensitive transactions on unsecured public Wi-Fi",
            "Disable all security"
        ],
        correct: 2
    },
    {
        question: "8. What is ransomware?",
        answers: [
            "A photo editor",
            "Malware that locks or encrypts data and demands payment",
            "A web browser",
            "A social media app"
        ],
        correct: 1
    },
    {
        question: "9. What should you do with an unknown email attachment?",
        answers: [
            "Open it immediately",
            "Download it without checking",
            "Forward it to everyone",
            "Verify the sender before opening it"
        ],
        correct: 3
    },
    {
        question: "10. What is the official Indian cybercrime reporting website?",
        answers: [
            "www.google.com",
            "www.cybercrime.gov.in",
            "www.facebook.com",
            "www.wikipedia.org"
        ],
        correct: 1
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const feedbackElement = document.getElementById("quiz-feedback");
const nextButton = document.getElementById("next-question");
const resultElement = document.getElementById("quiz-result");

let currentQuestionIndex = 0;
let quizScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    resultElement.textContent = "";
    showQuestion();
}

function showQuestion() {
    resetQuiz();

    const currentQuestion = quizQuestions[currentQuestionIndex];
        // UPDATE QUIZ PROGRESS
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    document.getElementById("quiz-progress-fill").style.width = progress + "%";

    document.getElementById("quiz-progress-text").textContent =
        `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answerButtons.appendChild(button);
    });
}

function resetQuiz() {
    answerButtons.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.style.display = "none";
}

function selectAnswer(selectedIndex) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correct;
    const buttons = answerButtons.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctAnswer) {
            button.style.borderColor = "#22c55e";
            button.style.background = "#14532d";
        }

        if (index === selectedIndex && selectedIndex !== correctAnswer) {
            button.style.borderColor = "#ef4444";
            button.style.background = "#7f1d1d";
        }
    });

    if (selectedIndex === correctAnswer) {
        quizScore++;
        feedbackElement.textContent = "Correct answer! Well done.";
        feedbackElement.style.color = "#22c55e";
    } else {
        feedbackElement.textContent = "Incorrect! The correct answer is highlighted.";
        feedbackElement.style.color = "#ef4444";
    }

    nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.textContent = "Quiz Completed!";
    answerButtons.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.style.display = "none";

    let message = "";

    if (quizScore >= 8) {
        message = "Excellent! You have strong cybersecurity knowledge. 🏆";
    } 
    else if (quizScore >= 5) {
        message = "Good effort! Keep learning about digital safety. 👍";
    } 
    else {
        message = "Keep practising! Learn more about online safety. 📚";
    }

    resultElement.textContent =
        `Your Score: ${quizScore} / ${quizQuestions.length} — ${message}`;

    document.getElementById("restart-quiz").style.display = "inline-block";a
}

// RESTART QUIZ FUNCTION

document.getElementById("restart-quiz").addEventListener("click", () => {
    document.getElementById("restart-quiz").style.display = "none";
    startQuiz();
});

startQuiz();
// PHISHING AWARENESS CHALLENGE

const phishingOption = document.getElementById("phishing-option");
const safeOption = document.getElementById("safe-option");
const phishingFeedback = document.getElementById("phishing-feedback");

function checkPhishingAnswer(isPhishing) {

    phishingOption.disabled = true;
    safeOption.disabled = true;

    if (isPhishing) {
        phishingFeedback.textContent =
            "Correct! This is a phishing message. Never click suspicious links or share personal information.";
        phishingFeedback.style.color = "#22c55e";
    } else {
        phishingFeedback.textContent =
            "Incorrect! This is a phishing message. Fake urgency and suspicious KYC links are common warning signs.";
        phishingFeedback.style.color = "#ef4444";
    }
}

phishingOption.addEventListener("click", function () {
    checkPhishingAnswer(true);
});

safeOption.addEventListener("click", function () {
    checkPhishingAnswer(false);
});
// CYBERSECURITY TIP OF THE DAY

const dailyTips = [
    "Never share your OTP, PIN or password with anyone.",
    "Always enable two-factor authentication on important accounts.",
    "Avoid clicking suspicious links in emails and messages.",
    "Use strong and unique passwords for different accounts.",
    "Keep your mobile phone and computer software updated.",
    "Never enter your UPI PIN to receive money.",
    "Avoid making sensitive transactions on unsecured public Wi-Fi."
];

function displayDailyTip() {

    const today = new Date();

    const startOfYear = new Date(today.getFullYear(), 0, 0);

    const dayNumber = Math.floor(
        (today - startOfYear) / (1000 * 60 * 60 * 24)
    );

    const tipIndex = dayNumber % dailyTips.length;

    document.getElementById("dailyTipText").textContent =
        dailyTips[tipIndex];

    document.getElementById("tipNumber").textContent =
        `Tip ${tipIndex + 1} of ${dailyTips.length}`;
}

displayDailyTip();
