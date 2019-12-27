import { Component, OnInit } from '@angular/core';
import { Timeblock, Comission, Subject } from '../materia';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  
  courseComissions;

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

  ngOnInit() {
  }

}
