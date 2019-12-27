import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './materia';
import { SubjectComponent } from './subject/subject.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-stuff-from-api';
  AllCommissions;
  constructor(private http: HttpClient) { }
  subjDictByName: { [id: string] : Subject; } = {};  

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
            dia: schedule["day"],
            start: schedule["hourFrom"],
            end: schedule["hourTo"]
          });
          timeBlockArr.push(currTimeBlock);
        }
        // create the current comission with its current schedule
        let currCommission = subj.createComission({
          name: commission.commissionName,
          profesores: [], 
          subject: null, 
          schedule: timeBlockArr
        });
      
        if(!this.subjDictByName[name]){
          // if such subject doenn't exist, we create it and then add it to the dictionary
          let currSubject = subj.createSubject({
            name: commission.subjectName,
            code: commission.subjectCode, 
            search: "9999", 
            comissions: [currCommission], 
            priority: 0
          });
          this.subjDictByName[name] = currSubject;
        }else{
          // if the subject exists, we just push the comission
          this.subjDictByName[name].comissions.push(currCommission);
        }
      } 
  
    })
  }

  ngOnInit() {      
    this.getDataFromApi(); 
  }
}