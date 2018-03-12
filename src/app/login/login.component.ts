import { Component,OnInit } from "@angular/core";
import {Router} from '@angular/router'
import {MyHttpService} from '../utility/service/http.service'

@Component({
    selector:"Login",
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
    //存储表单中用户所输入的用户名和密码
    userName:string="";
    userPwd:string="";
    record:any=""

    constructor(
        private myRouter:Router,
        private myHttpService:MyHttpService
    ) {}
    
ngOnInit() { }
    
    //当点击登录按钮时，调用方法向服务器发起请求
  login(){
    //验证数据的正确
    // console.log(this.userName,this.userPwd);
    this.myHttpService
    .sendRequest('http://localhost/probject/zongjie/data/login.php?uname='
    +this.userName+"&upwd="+this.userPwd)
    .subscribe((result)=>{
        if(result.code == 200){
                this.myRouter.navigateByUrl('detail');
        }else{
            alert(result.msg)
        }
    });
}
     
}