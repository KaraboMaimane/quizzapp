let triviaArray = [];
let ubaniArray = [];

let masalaArray = [];
let inc: number = 0;


export class Question{
    question;
    answer;
    answersArray = [];
    
    constructor(Question, Answer, AnswersArray){
        this.question = Question;
        this.answer = Answer;
        this.answersArray = AnswersArray;
    }
}

export class MusicQuestion{
    audio;
    question;
    answer;
    answersArray = [];
    constructor(Audio,Question, Answer, AnswersArray){
        this.audio = Audio;
        this.question = Question;
        this.answer = Answer;
        this.answersArray = AnswersArray;
    }
}

export class VideoQuestion{
    video;
    question;
    answer;
    answersArray = [];

    constructor(Video,Question, Answer, AnswersArray){
        this.video = Video
        this.question = Question;
        this.answer = Answer;
        this.answersArray = AnswersArray;
    }
}


