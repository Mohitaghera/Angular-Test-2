import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorChangerComponent } from './color-changer/color-changer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColorChangerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
