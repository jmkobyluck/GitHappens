function quizViewModel() {

    var self = this;

    self.quizQuestions = ko.observableArray([
        {questionNumber: "Question 1",
        question: "JavaScript was created at ____________ in the early days of the Web.",
        answer: ["A. Netscape", "B. Sun Microsystems", "C. Oracle", "D. Mozilla"],
        correctAnswer: "c"},

        {questionNumber: "Question 2",
        question: "JavaScript is typically used to specify the ____________ of web pages.",
        answer: ["A. behavior", "B. content", "C. presentation", "D. behavior, content, and presentation"],
        correctAnswer: "c"},

        {questionNumber: "Question 3",
        question: "In JavaScript a variable is a symbolic name for a:",
        answer: ["A. value", "B. function", "C. constant", "D. method"],
        correctAnswer: "c"},

        {questionNumber: "Question 4",
        question: "One of the built-in features of JavaScript is the ability to:",
        answer: ["A. concentrate strings", "B. match patterns", "C. control structures", "D. wrap objects"],
        correctAnswer: "c"},

        {questionNumber: "Question 5",
        question: "All numbers in JavaScript are represented as:",
        answer: ["A. floating point values", "B. integer values", "C. numeric literals", "D. strings"],
        correctAnswer: "c"},

        {questionNumber: "Question 6",
        question: "A return statement may appear only within the:",
        answer: ["A. body of a function", "B. return expression", "C. specified expression", "D. all of the above"],
        correctAnswer: "c"},

        {questionNumber: "Question 7",
        question: "To obtain the value of a property use the:",
        answer: ["A. dot notation or square brackets", "B. curly braces or square brackets", "C. curly braces or dot notation", "D. dot notation or parentheses"],
        correctAnswer: "c"},

        {questionNumber: "Question 8",
        question: "Client-side JavaScript does not provide any way to _______arbitrary files on the clients computer.",
        answer: ["A. write or delete", "B. delete or create", "C. write or animate", "D. animate or delete"],
        correctAnswer: "c"},

        {questionNumber: "Question 9",
        question: "The _____________ method was the first and only way to display computed text in a document.",
        answer: ["A. document.write()", "B. document.get()", "C. write.document()", "D. document.return()"],
        correctAnswer: "c"},

        {questionNumber: "Question 10",
        question: "OnKeydown is an:",
        answer: ["A. event handler", "B. invocation", "C. attribute", "D. access key"],
        correctAnswer: "c"},
    ]);

    
    self.checkedAnswer = ko.observable();
    self.numCorrect = ko.observable(0);

    self.submit = function() {
        for(var i=0; i<self.quizQuestions.length; i++) {
            if ( self.checkedAnswer() === self.quizQuestions[i].correctAnswer ){
                self.numCorrect(self.numCorrect() + 1);
                self.checkedAnswer().style.backgroundColor = "green"
            } else {
                self.checkedAnswer().style.backgroundColor = "red"
            }
        };
    };

};

ko.applyBindings(new quizViewModel());
