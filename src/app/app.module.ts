import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.router';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import {MyHttpService} from './utility/service/http.service'
import {LoginComponent} from './login/login.component'
import {FilesComponent} from './product/files.component'
import {MemberComponent} from './product/member.component'
import {DetailComponent} from './product/detail.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilesComponent,
    MemberComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpModule
  ],
  providers: [MyHttpService],  //注明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
