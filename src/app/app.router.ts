import { NgModule,Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './login/login.component'
import {FilesComponent} from './product/files.component'
import {MemberComponent} from './product/member.component'
import {DetailComponent} from './product/detail.component'

const routes:Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {
        path:'detail',component:DetailComponent,
        children:[
            {path:'',component:MemberComponent},
            {path:'member',component:MemberComponent},
            {path:'files',component:FilesComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }