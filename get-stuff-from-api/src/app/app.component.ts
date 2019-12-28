import { Component, asNativeElements } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './materia';
import { LinkerService } from './linker.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-stuff-from-api';
  //AllCommissions;  
  //ans = [];

  constructor(private http: HttpClient,private linkerService: LinkerService) { 
  }

  /*addToAllSubjects(subject, commission, currCommission) {
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

  getCommissionInfo(subjectName, commissionName){
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
  }*/

  /*
    to be done: 

    getSubjects(plan[]){

    }
    getEnabledSubjects(){

    }
    getUser(){

    }
  */
  ngOnInit() {      
    //this.linkerService.getDataFromApi(); 
  }
}