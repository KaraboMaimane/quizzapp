import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectPage } from '../pages/select/select';
import triviaArray, { Question, VideoQuestion, MusicQuestion } from './pages';
import bimbaArray from '../app/bimba';
import ubaniArray from './ubani';

import { TriviaPage } from '../pages/trivia/trivia';
import { Trivia2Page } from '../pages/trivia2/trivia2';
import { Trivia3Page } from '../pages/trivia3/trivia3';
import { ShufflePipe } from './shuffle.pipe';
import { NextQPage } from '../pages/next-q/next-q';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectPage,
    TriviaPage,
    Trivia2Page,
    Trivia3Page,
    ShufflePipe,
    NextQPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectPage, 
    TriviaPage,
    Trivia2Page,
    Trivia3Page, 
    NextQPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
  //plain questions
  tquestion1 = new Question(
    "Who sang the hit 90s single Thobela?",
    "Boom Shaka",
    ["Bongo Maffin", "Skeem", "Boom Shaka", "Chiskop"]
  );

  tquestion2 = new Question(
    "Which group sang the hit 90's single Sigiya Ngengoma(Ibize Moyeni)?",
    "Trompies",
    ["Trompies", "Chiskop", "Izinyoka", "Mashamplani"]
  );

  tquestion3 = new Question(
    "Who did Dj Walker feature in his hit single Chisa Mpama?",
    "Senyaka",
    ["Brown Dash", "Mdu", "Thebe", "Senyaka"]
  );
  tquestion4 = new Question(
    "What was one of Doc Shebeleza's hit singles back in the 90's",
    "Skhuvhethe",
    ["Bula Boot", "Mnike", "Skhuvhethe", "Nkalakatha"]
  );

  tquestion5 = new Question(
    "Which famous soccer player did Tkzee feature in their hit single Shibobo?",
    "Benni McCarthy",
    ["Neil Tovey", "Benni McCarthy", "Doctor Radebe", "Shoes Moshoeu"]
  );

  //audio questions
  mquestion1 = new MusicQuestion(
    "../../assets/aud/kleva.mp3",
    "What is the name of this song?",
    "Kleva",
    ["Kop","Sghubu","Tsotsi","Kleva"]
  );

  mquestion2 = new MusicQuestion(
    "../../assets/aud/chesa.mp3",
    "What is the name of this song?",
    "Chesa Mpama",
    ["Mpama","La Ntlwayela","Chesa Mpama","Fong Kong"]
  );

  mquestion3 = new MusicQuestion(
    "../../assets/aud/intwe.mp3",
    "Who is the name of this song?",
    "Intwenjani",
    ["Intwenjani","Thula Mabota","Lova","Via Orlando"]
  );

  mquestion4 = new MusicQuestion(
    "../../assets/aud/ingwazi.mp3",
    "What do you think that Ingwazi means?",
    "The Boss",
    ["The Boss","Friend","Lover","A Stupid Person"]
  );

  mquestion5 = new MusicQuestion(
    "../../assets/aud/mgezeni.mp3",
    "In this song who did Brown Dash feature?",
    "Ntando",
    ["Joe Nina","Speedy","Twistyle","Ntando"]
  );

  //video questions
  vquestion1 = new VideoQuestion(
    "../../assets/vids/gagu.mp4", 
    "Who is the artist on this video", 
    "Mawillies", 
    ["Mashamplani", "Mandoza", "Mzekezeke", "Mawillies"]
  );

  vquestion2 = new VideoQuestion(
    "../../assets/vids/skwatta.mp4", 
    "Who is the group that performs this track?", 
    "Skwatta Kamp", 
    ["Teargas", "Cashless Society", "Trompies", "Skwatta Kamp"]
  );
  vquestion3 = new VideoQuestion(
    "../../assets/vids/makh.mp4", 
    "Who was this artist related to?", 
    "Arthur Mafokate", 
    ["Mdu", "Arthur Mafokate", "Ishmael", "Zombo"]
  );
  
  vquestion4 = new VideoQuestion(
    "../../assets/vids/zola.mp4", 
    "What is the title of this song?", 
    "Dont Cry", 
    ["Dont Cry", "Unga Khali", "Mdlwembe", "Khokhovula"]
  );

  vquestion5 = new VideoQuestion(
    "../../assets/vids/mazuzu.mp4", 
    "What is the title of this song?", 
    "Oyi Oyi", 
    ["Oyi Oyi", "Mnike", "Kwasa", "Twalatsa"]
  );

  //This is our array of pages
  triviaArray = triviaArray.push(this.tquestion1,this.tquestion2, this.tquestion3, this.tquestion4, this.tquestion5);

  bimbaArray = bimbaArray.push(this.vquestion1, this.vquestion2,this.vquestion3, this.vquestion4, this.vquestion5);
  
  ubaniArray = ubaniArray.push(this.mquestion1, this.mquestion2, this.mquestion3, this.mquestion4, this.mquestion5);
  //we are going to push our pages to each relevant array

  //scoring system
  /*1:(80-100) you know your stuff!
    2:(60-79) your know your stuff good
    3:(50-59) uyazama nyana
    3:(0-49) haha. Your id no starts with 00 angithi???
  */
}
