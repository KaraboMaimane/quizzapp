export class Score{
    test: any;
    correct: number;
    incorrect: number;

    constructor(Test, Correct, Incorrect){
        this.test = Test;
        this.correct = Correct;
        this.incorrect = Incorrect;
    }
}

let scoreArray = [];
export default scoreArray 