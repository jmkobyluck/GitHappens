var answerKey = [
    "Netscape",
    "behavior",
    "value",
    "concentrate strings",
    "floating point values",
    "body of a function",
    "dot notation or square brackets",
    "write or delete",
    "document.write()",
    "event handler"
];

var correctAnswers = 0;

function randomize(ar) {
    return ar
        .map(a => ({ num: Math.random(), val: a }))
        .sort((a, b) => a.num - b.num)
        .map(a => a.val);
}

var quizViewModel = {
    quizQuestions: ko.observableArray([
        {
            id: 1,
            question: "JavaScript was created at ____________ in the early days of the Web.",
            answer: randomize(["Netscape", "Sun Microsystems", "Oracle", "Mozilla"])
        },

        {
            id: 2,
            question: "JavaScript is typically used to specify the ____________ of web pages.",
            answer: randomize(["behavior", "content", "presentation", "behavior, content, and presentation"])
        },

        {
            id: 3,
            question: "In JavaScript a variable is a symbolic name for a:",
            answer: randomize(["value", "function", "constant", "method"])
        },

        {
            id: 4,
            question: "One of the built-in features of JavaScript is the ability to:",
            answer: randomize(["concatenate strings", "match patterns", "control structures", "wrap objects"])
        },

        {
            id: 5,
            question: "All numbers in JavaScript are represented as:",
            answer: randomize(["floating point values", "integer values", "numeric literals", "strings"])
        },

        {
            id: 6,
            question: "A return statement may appear only within the:",
            answer: randomize(["body of a function", "return expression", "specified expression", "all of the above"])
        },

        {
            id: 7,
            question: "To obtain the value of a property use the:",
            answer: randomize(["dot notation or square brackets", "curly braces or square brackets", "curly braces or dot notation", "dot notation or parentheses"])
        },

        {
            id: 8,
            question: "Client-side JavaScript does not provide any way to _______arbitrary files on the clients computer.",
            answer: randomize(["write or delete", "delete or create", "write or animate", "animate or delete"])
        },

        {
            id: 9,
            question: "The _____________ method was the first and only way to display computed text in a document.",
            answer: randomize(["document.write()", "document.get()", "write.document()", "document.return()"])
        },

        {
            id: 10,
            question: "OnKeydown is an:",
            answer: randomize(["event handler", "invocation", "attribute", "access key"])
        }
    ]),
    correctAnswers: ko.observable(0),
    questionAnswered: function (ev, id, selectedAnswer) {
        const element = document.getElementById(`question_${id}`);
        if (element.classList.contains("correct") || element.classList.contains("incorrect"))
            return;

        if (answerKey[id - 1] === selectedAnswer) {
            this.correctAnswers(this.correctAnswers() + 1)
            ev.target.style.backgroundColor = "green";
            if (!element.classList.contains("correct"))
                document.getElementById(`question_${id}`).classList.add("correct");
            if (element.classList.contains("incorrect"))
                document.getElementById(`question_${id}`).classList.remove("incorrect");
        } else {
            ev.target.style.backgroundColor = "red";
            if (element.classList.contains("correct"))
                document.getElementById(`question_${id}`).classList.remove("correct");
            if (!element.classList.contains("incorrect"))
                document.getElementById(`question_${id}`).classList.add("incorrect");
        }
        console.log(this.correctAnswers())
    }
}

ko.applyBindings(quizViewModel);