import { Component, asNativeElements } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './materia';
import { SubjectComponent } from './subject/subject.component';
import { LinkerService } from './linker.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-stuff-from-api';
  AllCommissions;  
  ans = [];

  constructor(private http: HttpClient,private linkerService: LinkerService) { 
  }

  addToAllSubjects(subject, commission, currCommission) {
    this.linkerService.addToAllSubjects(subject, commission, currCommission);
  }
  getAllSubjects(){
    return this.linkerService.getAllSubjects();
  }
  clearAllSubjects(){
    this.linkerService.clearAllSubjects();
  }
  getAllCommissions(){
    this.linkerService.getAllComissions();
  }
  getSubject(name){
    if(this.getAllSubjects()[name]){
      return this.getAllSubjects()[name];
    }
  }

  getCommissionInfo(subjectName,commissionName){
    if(this.getAllSubjects()[subjectName]){
      for (let actCommission of this.getAllSubjects()[subjectName].commissions){
        if (actCommission.name === commissionName){
          return actCommission;
        }
      }
    }
  }

  getCommissions(subjectName){
    this.ans = [];
    if(this.getAllSubjects()[subjectName]){
      for (let actCommission of this.getAllSubjects()[subjectName].commissions){
        this.ans.push(actCommission.name);
      }
    }
    return this.ans;
  }

  /*
    to be done: 

    getSubjects(plan[]){

    }
    getEnabledSubjects(){

    }
    getUser(){

    }
  */


  
  getDataFromApi(){
    this.http.get<any>('https://itbagw.itba.edu.ar/api/v1/courseCommissions/1wXxftFa4NTfsmOstgnQHDq55m7jZL1jq7r7gWlprbHg?level=GRADUATE&year=2019&period=SecondSemester')
    .subscribe(data => {
      // here I set what happens when I receive something from get (asynchronous)
      let subj = new SubjectComponent();
      this.AllCommissions = data.courseCommissions.courseCommission;
      for (let commission of this.AllCommissions) {
        let name = commission.subjectName;
        let timeBlockArr = []
        // push each TimeBlock in the commission
        for(let schedule in commission.courseCommissionTimes){
          let currTimeBlock = subj.createTimeBlock({
            day: schedule["day"],
            start: schedule["hourFrom"],
            end: schedule["hourTo"]
          });
          timeBlockArr.push(currTimeBlock);
        }
        // create the current comission with its current schedule
        let currCommission = subj.createCommission({
          name: commission.commissionName,
          professors: [], 
          subject: null, 
          schedule: timeBlockArr
        }); 
        
        this.addToAllSubjects(name, commission, currCommission);
        //console.log(this.getAllSubjects())
        
    
      } 

      //console.log(this.getCommissionInfo('Álgebra Lineal','A'))
      console.log(this.getSubject('Álgebra Lineal'))
    })
  }

  ngOnInit() {      
    this.getDataFromApi(); 
  }
}