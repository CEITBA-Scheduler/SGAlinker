import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeblock, Comission, Subject } from './materia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-stuff-from-api';
  codigos = [];
  courseComissions;
  
  constructor(private http: HttpClient) { }
  
  createSubject(subject: Subject): {
    name: string;
    code: string;
    search: string;
    comissions: Comission[];
    priority: number}{
    // sets the default values
    let newSubject = {name: "foo" ,code: "9999", search: "9999", comissions: null, priority: 0};
    if (subject.name) {
      newSubject.name = subject.name;
    }
    if (subject.code) {
      newSubject.code = subject.code;
    }
    if (subject.search) {
      newSubject.search = subject.search;
    }
    if (subject.comissions) {
      newSubject.comissions = subject.comissions;
    }
    if (subject.priority) {
      newSubject.priority = subject.priority;
    }
    return newSubject;
  }

  createComission(comission: Comission): {
    name: string;
    profesores: string[];
    subject?: Subject;
    schedule: Timeblock[]}{
    // sets the default values
    let newComission = {name: "foo" ,profesores: [], subject: null, schedule: null};
    if (comission.name) {
      newComission.name = comission.name;
    }
    if (comission.profesores) {
      newComission.profesores = comission.profesores;
    }
    if (comission.subject) {
      newComission.subject = comission.subject;
    }
    if (comission.schedule) {
      newComission.schedule = comission.schedule;
    }
    return newComission;
  }

  createTimeBlock(timeblock: Timeblock): {
    dia: string;
    start: string;
    end: string}{
    // sets the default values
    let newTimeBlock = {dia: "foo" , start: "foo", end: "foo"};
    if (timeblock.dia) {
      newTimeBlock.dia = timeblock.dia;
    }
    if (timeblock.start) {
      newTimeBlock.start = timeblock.start;
    }
    if (timeblock.end) {
      newTimeBlock.end = timeblock.end;
    }
    return newTimeBlock;
  }



  /* Esta version es mostrando con los codigos de las materias
    subjDictByCode: { [id: string] : Subject[]; } = {};  

    ngOnInit() {      
        // Simple GET request with response type <any>
        this.http.get<any>('https://itbagw.itba.edu.ar/api/v1/courseCommissions/1wXxftFa4NTfsmOstgnQHDq55m7jZL1jq7r7gWlprbHg?level=GRADUATE&year=2019&period=SecondSemester').subscribe(data => {
          this.courseComissions = data.courseCommissions.courseCommission
          for (let course_comission of this.courseComissions) {
            let code = course_comission.subjectCode;
            let currSubject = this.createSubject({
              name: course_comission.subjectName,
              code: course_comission.subjectCode, 
              search: "9999", 
              comissions: null, 
              priority: 0});
            if(!this.subjDictByCode[code]){
              this.subjDictByCode[code] = [];
              this.subjDictByCode[code].push(currSubject);
            }else{
              this.subjDictByCode[code].push(currSubject);
            }
            console.log(this.subjDictByCode)
          }
        })
    }
  
  */

  subjDictByName: { [id: string] : Subject; } = {};  

  ngOnInit() {      
        // Simple GET request with response type <any>
          this.http.get<any>('https://itbagw.itba.edu.ar/api/v1/courseCommissions/1wXxftFa4NTfsmOstgnQHDq55m7jZL1jq7r7gWlprbHg?level=GRADUATE&year=2019&period=SecondSemester').subscribe(data => {
          this.courseComissions = data.courseCommissions.courseCommission
          for (let course_comission of this.courseComissions) {
            let name = course_comission.subjectName;
            let timeBlockArr = []
            //console.log(course_comission.courseCommissionTimes)
            for(let horarios in course_comission.courseCommissionTimes){
              let currTimeBlock = this.createTimeBlock({
                dia: horarios["day"],
                start: horarios["hourFrom"],
                end: horarios["hourTo"]});
              timeBlockArr.push(currTimeBlock);
            }

            let currCommission = this.createComission({
              name: course_comission.commissionName,
              profesores: [], 
              subject: null, 
              schedule: timeBlockArr});

            let currSubject = this.createSubject({
              name: course_comission.subjectName,
              code: course_comission.subjectCode, 
              search: "9999", 
              comissions: [currCommission], 
              priority: 0});
  
            if(!this.subjDictByName[name]){
              this.subjDictByName[name] = currSubject;
            }else{
              this.subjDictByName[name].comissions.push(currCommission);
            }
            //console.log(this.subjDictByName)
          }
        })
    }
    
}
