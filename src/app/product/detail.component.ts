import { Component,OnInit,Input,EventEmitter } from "@angular/core"
import {Router,ActivatedRoute,Params} from '@angular/router'
import {MyHttpService} from '../utility/service/http.service'

@Component({
    selector:"detail",
    templateUrl:'./detail.component.html',
    styleUrls:[]
})
export class DetailComponent implements OnInit{
    @Input() myValue:any
    record:any
    isTrue:any=0
    parent_name:any
    constructor(
        private activatedRoute: ActivatedRoute,//这里需要注入ActivatedRoute模块  
        private myRouter:Router,
        private myHttpService:MyHttpService
    ) {}
    ngOnInit(){ //第一次初始化调用钩子函数
    }
    toMember(){
        this.myRouter.navigate(['detail/member']);
    }
    tofiles(){
        this.myRouter.navigate(['detail/files']);
    }
    
}