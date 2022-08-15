import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Pipess } from './app.component';
import { Sentence } from './Pipes/app.pipe';
import { Sorting } from './Pipes/appp.pipe';
import { CaptchService } from './services/captcha.service';
import { DataService } from './services/shoping.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/Api.service';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Pipess, Sentence, Sorting],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CaptchService, DataService, ApiService],
  bootstrap: [Pipess],
})
export class AppModule {}
