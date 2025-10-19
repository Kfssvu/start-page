import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'start-page';
  showSettingsPane = false;
  link1: string = '';
  link2: string = '';
  link3: string = '';
  imageData1: string | null = null;
  imageData2: string | null = null;
  imageData3: string | null = null;
  backgroundImageUrl: string = '' ;
  backgroundImageUrl2: string = '' ;
  backgroundImageUrl3: string = '' ;

  constructor(private router:Router){
  }

  // public changeBackground(newImageUrl: string) {
  //   this.backgroundImageUrl = `url(${newImageUrl})`;
  // }

  GotoGemini() {
   window.location.href = 'https://gemini.google.com/app';
  }
  

  public GotoSettings(){
    this.showSettingsPane = true; // Show the pane
  }

  public CloseSettingsPane(){
    this.showSettingsPane = false;
    localStorage.setItem('Url1', this.link1);
    localStorage.setItem('Url2', this.link2);
    localStorage.setItem('Url3', this.link3);
  }

  public ClearSettingsPane(){
    this.link1 = '';
    this.link2 = '';
    this.link3 = '';
    this.imageData1 = null;
    this.imageData2 = null;
    this.imageData3 = null;
    localStorage.removeItem('Url1');
    localStorage.removeItem('Url2');
    localStorage.removeItem('Url3');
    localStorage.removeItem('Image1');
    localStorage.removeItem('Image2');
    localStorage.removeItem('Image3');
    this.backgroundImageUrl = 'url(Google.png)';
    this.backgroundImageUrl2 = 'url(Google.png)';
    this.backgroundImageUrl3 = 'url(Google.png)';
  }

  onImageSelected(event: Event, tile: number) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        if (tile === 1) {
          this.imageData1 = result;
          localStorage.setItem('Image1', result);
        } else if (tile === 2) {
          this.imageData2 = result;
          localStorage.setItem('Image2', result);
        } else if (tile === 3) {
          this.imageData3 = result;
          localStorage.setItem('Image3', result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

    ngOnInit() {
      if (typeof window !== 'undefined' && window.localStorage) {
        this.link1 = localStorage.getItem('Url1') || '';
        this.link2 = localStorage.getItem('Url2') || '';
        this.link3 = localStorage.getItem('Url3') || '';
        this.backgroundImageUrl = localStorage.getItem('Image1') ?`url(${localStorage.getItem('Image1')})` : 'url(QUT1.png)';
        this.backgroundImageUrl2 = localStorage.getItem('Image2')? `url(${localStorage.getItem('Image2')})`: 'url(Github.png)';
        this.backgroundImageUrl3 = localStorage.getItem('Image3')? `url(${localStorage.getItem('Image3')})`: 'url(Google.png)';
      }
      const hour = new Date().getHours();
      console.log('Current hour:', hour);
      let bgUrl = '';
      let bgsize = '';
      if (hour >= 6 && hour < 18) {
        // Daytime
        bgUrl = 'url("cat.gif")';
        bgsize = "100%";
      } else {
        // Nighttime
        bgUrl = 'url("nights.gif")';
        bgsize = "100% 150%";
      }
      document.body.style.backgroundImage = bgUrl;
      document.body.style.backgroundSize = bgsize;
    }

  public GotoURL1(){
    window.location.href = localStorage.getItem('Url1') || 'https://qutvirtual4.qut.edu.au';
  }

  public GotoURL2(){
    window.location.href = localStorage.getItem('Url2') || 'https://github.com';
  }

  public GotoURL3(){
    window.location.href = localStorage.getItem('Url3') || 'https://www.google.com';
  }
}

