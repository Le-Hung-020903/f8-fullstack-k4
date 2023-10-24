import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const getQuestion = async function () {
    // const queryString = new URLSearchParams(query).toString();
    const { data: questions } = await client.get(`/questions`);
    return questions;
};

class Quiz {
    constructor(questions) {
        this.container = document.querySelector(".container");
        this.questions = questions;
        this.score = 0;
    }

    clear() {
        this.container.innerHTML = "";
        this.score = 0;
    }

    playAgain() {
        this.clear();
        this.start();
    }

    start() {
        const btnStart = new El({
            el: "button",
            className: "btnStart",
            html: "Start",
        }).getEl();

        let delay = 3;

        btnStart.onclick = () => {
            btnStart.innerHTML = delay;
            const timeStartInterval = setInterval(() => {
                delay--;
                if (delay === 0) {
                    btnStart.innerHTML = "Go";
                } else if (delay < 0) {
                    clearInterval(timeStartInterval);
                    btnStart.remove();
                    this.updateQuiz();

                    this.updateQuestion(1);
                    return;
                } else {
                    btnStart.innerHTML = delay;
                }
            }, 1000);
        };

        this.container.appendChild(btnStart);
    }

    updateQuiz() {
        this.container.innerHTML = `<div class="quiz">
    <div class="topQuiz">
      <div class="progress"></div>
      <div class="quizDetail">
        <p>
          Câu:
          <span class="questionNo"></span>
        </p>
        <p>
          Điểm:
          <span class="score">0</span>
        </p>
      </div>
    </div>
    <h1 class="question">
      
    </h1>
    <div class="answers">
    </div>
    <div class="result"></div>
  </div>`;
    }

    updateQuestion(no) {
        this.updateQuiz();

        // Show result
        if (no > this.questions.length) {
            this.showResult();
            return;
        }
        const progress = document.querySelector(".progress");
        const questionNo = document.querySelector(".questionNo");
        const scoreEl = document.querySelector(".score");
        const questionEl = document.querySelector(".question");
        const answers = document.querySelector(".answers");
        const result = document.querySelector(".result");

        const indexQuestion = no - 1;
        const question = this.questions[indexQuestion];

        questionNo.textContent = `${no}/${this.questions.length}`;
        questionEl.textContent = question.question;
        scoreEl.textContent = this.score;

        question.options.forEach((answer) => {
            const btn = new El({
                el: "button",
                className: "answer",
                html: answer,
            }).getEl();
            btn.onclick = () => {
                if (answer === question.answer) {
                    btn.className = "answer correct";
                    result.textContent = "Correct";
                    result.className = "result correct";
                    this.score += 1;
                    scoreEl.textContent = this.score;
                } else {
                    btn.className = "answer incorrect";
                    result.textContent = "Incorrect";
                    result.className = "result incorrect";
                }
                const btns = document.querySelectorAll(".answer");
                btns.forEach((btn) => {
                    btn.onclick = null;
                });
                clearInterval(timeAnswerInterval);

                const timeout = setTimeout(() => {
                    clearTimeout(timeout);
                    this.updateQuestion(no + 1);
                }, 1000);
            };

            answers.appendChild(btn);
        });

        const timeAnswer = 5000;
        let percent = 100;

        const timeAnswerInterval = setInterval(() => {
            if (percent <= 0) {
                clearInterval(timeAnswerInterval);

                this.updateQuestion(no + 1);
            } else {
                percent -= 0.1;
                progress.style.width = `${percent}%`;
            }
        }, timeAnswer / 1000);
    }

    showResult() {
        const btnRestart = new El({
            el: "button",
            html: "Chơi lại",
        }).getEl();

        btnRestart.onclick = () => {
            this.playAgain();
        };

        this.container.innerHTML = `<div><p>Correct: ${
            this.score
        }</p><p>Incorrect: ${this.questions.length - this.score}</p></div>`;
        this.container.appendChild(btnRestart);
    }
}
getQuestion().then((data) => {
    const quiz = new Quiz(data);
    quiz.start();
    console.log(data);
});
