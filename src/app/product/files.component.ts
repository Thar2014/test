import { Component,OnInit,Input } from "@angular/core";
import {Router} from '@angular/router'
import {MyHttpService} from '../utility/service/http.service'

@Component({
    selector:"files",
    templateUrl:'./files.component.html',
    styleUrls:[]
})
export class FilesComponent implements OnInit{
    isTrue:boolean=false
    data:any
    constructor(
        private myRouter:Router,
        private myHttpService:MyHttpService
    ){}

    ngOnInit(){
        this.myHttpService
        .sendRequest('http://127.0.0.1/probject/zongjie/data/product.php')
        .subscribe((result)=>{
            if(result.power!=undefined){
                console.log("可以访问")
                this.isTrue=true
                this.myHttpService
                .sendRequest('http://127.0.0.1/probject/zongjie/data/files.php')
                .subscribe((result)=>{
                    this.data=result
                })
            }else if(result.code==201){
                this.data=result.msg
                this.isTrue=false
                console.log(this.data)
            }
        })
    }
}