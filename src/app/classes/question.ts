class Question {
    question: string;
    answer: string;
    points: number;

    checkAnswer(userAnswer) : boolean {
        return this.answer == userAnswer;
    }
}