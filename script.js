// =========================================================
// WETLANDWATCH — INTERACTIVE CITY CASE STUDIES
// =========================================================

console.log("WetlandWatch JavaScript loaded successfully.");


// Get all city buttons
const cityButtons = document.querySelectorAll(".city-button");

// Get all city information panels
const cityDetails = document.querySelectorAll(".city-detail");


// Add click functionality to every city button
cityButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Get the city name from the button
        const selectedCity = button.dataset.city;


        // Remove active state from all buttons
        cityButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        // Add active state to clicked button
        button.classList.add("active");


        // Hide all city information
        cityDetails.forEach(city => {
            city.classList.remove("active");
        });


        // Show the selected city
        const selectedDetail = document.getElementById(selectedCity);

        if (selectedDetail) {
            selectedDetail.classList.add("active");
        }

    });

});
// =========================================================
// WETLANDWATCH — INTERACTIVE QUIZ
// =========================================================

const correctAnswers = {
    q1: "d",
    q2: "a",
    q3: "b",
    q4: "d",
    q5: "d"
};


// Get quiz elements
const submitQuiz = document.getElementById("submitQuiz");
const quizScore = document.getElementById("quizScore");
const scoreValue = document.getElementById("scoreValue");
const scoreMessage = document.getElementById("scoreMessage");
const scoreDescription = document.getElementById("scoreDescription");


// Submit quiz
submitQuiz.addEventListener("click", () => {

    let score = 0;
    let unanswered = false;


    // Check every question
    Object.keys(correctAnswers).forEach(question => {

        const selectedAnswer = document.querySelector(
            `input[name="${question}"]:checked`
        );

        const result = document.getElementById(
            `result-${question}`
        );

        const questionBox = document
            .querySelector(`input[name="${question}"]`)
            .closest(".quiz-question");


        // Remove previous result classes
        result.classList.remove(
            "correct",
            "incorrect"
        );

        questionBox.classList.remove(
            "answer-correct",
            "answer-incorrect"
        );


        // If no answer selected
        if (!selectedAnswer) {

            unanswered = true;

            result.textContent =
                "Please select an answer.";

            result.classList.add("incorrect");

            questionBox.classList.add(
                "answer-incorrect"
            );

            return;
        }


        // Correct answer
        if (
            selectedAnswer.value ===
            correctAnswers[question]
        ) {

            score++;

            result.classList.add("correct");

            questionBox.classList.add(
                "answer-correct"
            );


            if (question === "q1") {
                result.textContent =
                    "✓ Correct! Wetlands can include marshes, lakes and floodplains.";
            }

            if (question === "q2") {
                result.textContent =
                    "✓ Correct! Wetlands can temporarily store excess water and release it more slowly.";
            }

            if (question === "q3") {
                result.textContent =
                    "✓ Correct! Hard urban surfaces can increase rapid surface runoff.";
            }

            if (question === "q4") {
                result.textContent =
                    "✓ Correct! Land conversion, pollution and climate-related pressures are among the major drivers.";
            }

            if (question === "q5") {
                result.textContent =
                    "✓ Correct! Protecting wetlands can involve governments, scientists, communities and individuals.";
            }

        }


        // Incorrect answer
        else {

            result.classList.add("incorrect");

            questionBox.classList.add(
                "answer-incorrect"
            );


            if (question === "q1") {
                result.textContent =
                    "✕ Incorrect. Correct answer: D — All of the above.";
            }

            if (question === "q2") {
                result.textContent =
                    "✕ Incorrect. Correct answer: A — They store excess water temporarily.";
            }

            if (question === "q3") {
                result.textContent =
                    "✕ Incorrect. Correct answer: B — Rainfall can become faster surface runoff.";
            }

            if (question === "q4") {
                result.textContent =
                    "✕ Incorrect. Correct answer: D — All of the above.";
            }

            if (question === "q5") {
                result.textContent =
                    "✕ Incorrect. Correct answer: D — Everyone.";
            }

        }

    });


    // Don't show final score if questions are unanswered
    if (unanswered) {

        scoreValue.textContent = score;

        scoreMessage.textContent =
            "Complete all questions.";

        scoreDescription.textContent =
            "Please answer every question and submit the quiz again.";

        quizScore.classList.add("show");

        quizScore.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;
    }


    // Display final score
    scoreValue.textContent = score;


    // Score messages
    if (score === 5) {

        scoreMessage.textContent =
            "Excellent understanding.";

        scoreDescription.textContent =
            "You answered all five questions correctly and understood the key ideas about urban wetlands.";

    }

    else if (score === 4) {

        scoreMessage.textContent =
            "Very good work.";

        scoreDescription.textContent =
            "You have a strong understanding of the role wetlands play in urban environments.";

    }

    else if (score === 3) {

        scoreMessage.textContent =
            "Good start.";

        scoreDescription.textContent =
            "You understand several important concepts. Review the sections above to strengthen your knowledge.";

    }

    else if (score >= 1) {

        scoreMessage.textContent =
            "Keep learning.";

        scoreDescription.textContent =
            "Review the wetlands, flood protection and city case-study sections and try the quiz again.";

    }

    else {

        scoreMessage.textContent =
            "Time for a review.";

        scoreDescription.textContent =
            "Go through the website sections again and then retake the quiz.";

    }


    // Show score panel
    quizScore.classList.add("show");


    // Scroll to score
    quizScore.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
// =========================================================
// WETLANDWATCH — GLOBAL LOSS INTERACTIVE VISUAL
// =========================================================


// Get the visual buttons
const visualButtons = document.querySelectorAll(".visual-button");

// Get the two landscape views
const wetlandView = document.getElementById("wetlandView");
const urbanView = document.getElementById("urbanView");

// Get the description text
const visualText = document.getElementById("visualText");


// Add click functionality to both buttons
visualButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Get which view was selected
        const selectedView = button.dataset.view;


        // Remove active state from both buttons
        visualButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        // Add active state to clicked button
        button.classList.add("active");


        // WETLAND VIEW
        if (selectedView === "wetland") {

            wetlandView.classList.add("active");
            urbanView.classList.remove("active");

            visualText.textContent =
                "Wetlands provide natural space where rainfall can temporarily accumulate before water moves onward.";
        }


        // URBAN VIEW
        if (selectedView === "urban") {

            urbanView.classList.add("active");
            wetlandView.classList.remove("active");

            visualText.textContent =
                "When natural storage is replaced by hard urban surfaces, rainfall can become faster surface runoff, increasing pressure on drainage systems.";
        }

    });

});