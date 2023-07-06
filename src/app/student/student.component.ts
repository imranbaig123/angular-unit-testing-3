import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  [x: string]: any;

  sum = 0;
  result: any;
  constructor(public service: StudentService){}

  ngOnInit(): void {
    
  }

  calculate(num1: number, num2: number) {
    this.sum= num1+num2;
    return this.sum;
  }

  saveData(){
    let info = {
      sumVal: this.calculate(5,5),
      name: "dot net office"
    };
    // this.SaveDataIntoConsol(info);
    // this.service.SaveDetails(info).subscribe(response => {
    //   this.result = response;
    // })
  }

  StudentResult(){
    if(this.calculate(10,20) >= 40)
    {
      return "pass";
    }
    else {
      return "fail"
    }
  }

  // SaveDataIntoConsol(info){
  //   console.log(info);
  // }


  StudentSchoolResult(){
    if(this.calculate(10,20) >= 40)
    {
      this['studentResult'] =  "pass";
      return this['studentResult'];
    }
    else {
      this['studentResult'] =  "fail";
      return this['studentResult'];
    }
  }
}
