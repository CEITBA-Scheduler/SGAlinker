import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awesomeApp';

  constructor(private authService: AuthService) {}

  iniciarSesion() {
    this.authService.signInWithGoogle().then(credentials => console.log(credentials));
  }
}
