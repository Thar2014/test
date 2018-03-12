import { Component,OnInit,Output } from "@angular/core"
import {Router,ActivatedRoute,Params} from '@angular/router'
import {MyHttpService} from '../utility/service/http.service'

@Component({
    selector:"member",
    templateUrl:'./member.component.html',
    styleUrls:[]
})
export class MemberComponent implements OnInit{
    record:any
    isTrue:boolean=false
    constructor(
        private myRouter:Router,
        private myHttpService:MyHttpService
    ){}
    ngOnInit(){
        this.myHttpService
        .sendRequest('http://127.0.0.1/probject/zongjie/data/product.php')
        .subscribe((result)=>{
            console.log(result)
            if(result.power!=undefined){  // 判断权限
                this.record = result.data
                this.isTrue = true
                console.log(this.record)   
            }else if(result.code==201){
                this.record=result.msg
                this.isTrue=false
                console.log(this.record)
            }
        })
    }
}