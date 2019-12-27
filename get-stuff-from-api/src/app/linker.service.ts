import { Injectable } from '@angular/core';
import { Subject } from './materia'
import { HttpClient } from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';

@Injectable({
  providedIn: 'root'
})
export class LinkerService {
  AllSubjects: { [id: string] : Subject; } = {};
  
  constructor(
    private http: HttpClient
  ) { }

  addToAllSubjects(name, commission, currCommission) {
    if(!this.AllSubjects[name]){
      let subj = new SubjectComponent();
      // if such subject doesn't exist, we create it and then add it to the dictionary
      let currSubject = subj.createSubject({
        name: commission.subjectName,
        code: commission.subjectCode, 
        search: "9999", 
        commissions: [currCommission], 
        priority: 0
      });
      this.AllSubjects[name] = currSubject;
    }else{
      // if the subject exists, we just push the comission
      this.AllSubjects[name].commissions.push(currCommission);
    }
  }

  getAllSubjects() {
    return this.AllSubjects;
  }

  clearAllSubjects() {
    this.AllSubjects = {};
    return this.AllSubjects;
  }

  getAllComissions() {
    return this.http.get('https://itbagw.itba.edu.ar/api/v1/courseCommissions/1wXxftFa4NTfsmOstgnQHDq55m7jZL1jq7r7gWlprbHg?level=GRADUATE&year=2019&period=SecondSemester');
  }
}
