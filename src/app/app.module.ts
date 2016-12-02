import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GradePage} from "../pages/grade/grade";
import {RegisterPage} from "../pages/register/register";
import {MenuPage} from "../pages/menu/menu";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GradePage,
    RegisterPage,
    MenuPage
    // MenuPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GradePage,
    RegisterPage,
    MenuPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
