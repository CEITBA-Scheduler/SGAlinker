import { Component, OnInit } from '@angular/core';
import { Timeblock, Commission, Subject } from '../materia';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  
  createSubject(subject: Subject): {
    name: string;
    code: string;
    search: string;
    commissions: Commission[];
    priority: number}{
    // sets the default values
    let newSubject = {name: "foo" ,code: "9999", search: "9999", commissions: null, priority: 0};
    if (subject.name) {
      newSubject.name = subject.name;
    }
    if (subject.code) {
      newSubject.code = subject.code;
    }
    if (subject.search) {
      newSubject.search = subject.search;
    }
    if (subject.commissions) {
      newSubject.commissions = subject.commissions;
    }
    if (subject.priority) {
      newSubject.priority = subject.priority;
    }
    return newSubject;
  }

  createCommission(commission: Commission): {
    name: string;
    professors: string[];
    subject?: Subject;
    schedule: Timeblock[]}{
    // sets the default values
    let newCommission = {name: "foo" ,professors: [], subject: null, schedule: null};
    if (commission.name) {
      newCommission.name = commission.name;
    }
    if (commission.professors) {
      newCommission.professors = commission.professors;
    }
    if (commission.subject) {
      newCommission.subject = commission.subject;
    }
    if (commission.schedule) {
      newCommission.schedule = commission.schedule;
    }
    return newCommission;
  }

  createTimeBlock(timeblock: Timeblock): {
    day: string;
    start: string;
    end: string}{
    // sets the default values
    let newTimeBlock = {day: "foo" , start: "foo", end: "foo"};
    if (timeblock.day) {
      newTimeBlock.day = timeblock.day;
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
