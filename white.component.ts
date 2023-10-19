import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.scss']
})
export class WhiteComponent  {
 constructor(
    public router:Router
  ){}
  ngOnInit():void{

  }
  myfun(){
    this.router.navigate(["white/red"])
  }


}
