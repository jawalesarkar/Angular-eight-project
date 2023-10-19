import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'shreeProject';

  arr:any=[]

 i:any=0;
  myfun(first:any,second:any,third:any)
  {
    if(this.i==5)
    {
      alert("By By")
    }
    this.i++;
     if(this.i>=5)
     {
           return;
     }
     
     var f=first.value;
     var s=second.value;
     var t=third.value;
     this.arr.push({"first":f,"second":s,"third":t})
    //  let count=this.arr.length;
    //  if(count==5)
    //  {
    //    alert("Stop you table is full")
    //  }
  }

  remove(i:any){
    this.arr.splice(i,1)
  }
   
  fun2(a:any){
    document.getElementsByTagName("table")[0].style.background=a.value;
  }
}
