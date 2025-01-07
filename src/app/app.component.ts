import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'start-page';

  constructor(private router:Router){
  }

  public GotoQUT(){
    window.location.href = 'https://qutvirtual4.qut.edu.au/group/student/home'
  }

  public GotoGithub(){
    window.location.href = 'https://github.com'
  }

  public GotoGoogle(){
    window.location.href = 'https://www.google.com'
  }
}

