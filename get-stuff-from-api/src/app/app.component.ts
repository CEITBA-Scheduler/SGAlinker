import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-stuff-from-api';
  codigos = [];
  materias;
   
  constructor(private http: HttpClient) { }
  
  ngOnInit() {      
        // Simple GET request with response type <any>
        this.http.get<any>('https://itbagw.itba.edu.ar/api/v1/courseCommissions/1wXxftFa4NTfsmOstgnQHDq55m7jZL1jq7r7gWlprbHg?level=GRADUATE&year=2019&period=SecondSemester').subscribe(data => {
          this.materias = data.courseCommissions.courseCommission
          for (let entry of this.materias) {
            this.codigos.push(entry.subjectCode)
            console.log(entry); // 1, "string", false
          }
        })
        console.log(this)
    }
    
}
