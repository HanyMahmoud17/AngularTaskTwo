import { Component } from '@angular/core';
// this is come from my file todo.ts custom folder
import{todoItem} from "../shared/todo"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  list:todoItem[]=[
    new todoItem("sleep"),
    new todoItem("weke up at 7am "),
    new todoItem("weke up at 8am "),
    new todoItem("weke up at 9am "),
    new todoItem("weke up at 10am ")

  ]
  change(i:number){
    this.list[i].isDone =true
  }
  delete(i:number){
    this.list.splice(i,1);
  }
  addTask(task:string){
   let addT=new todoItem(task)
    this.list.push(addT)
  }
  // todoItem.task
  
  // date="jenuary"
  
  // task=todoItem.t;
  

  // date=new Date();
  // changeTime(timeInput:Date){
   
  //   this.date=timeInput;
  // }
//  jobtitle="front end";
//  age:number = 18
// img="https://picsum.photos/400"
// changeAge(n:string){
//   this.age = Number(n)
// }
//   change(job:string){
//     this.jobtitle = job
//   }
//   keyuphandler(j:string){
//     console.log(j)
//   }
//   print():string{
//     return "test"
//   }

}
