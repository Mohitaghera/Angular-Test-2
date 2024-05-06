import { Component, ElementRef, ViewChild } from '@angular/core';

interface ColorChangeEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-color-changer',
  standalone: true,
  imports: [],
  templateUrl: './color-changer.component.html',
  styleUrl: './color-changer.component.css',
})
export class ColorChangerComponent {
  @ViewChild('divContent') divContent!: ElementRef;

  content : string =
    'Colours can make your world beautiful and a better place to live in, when its all dark dull and gloomy. We have different colours for different moods or nations or religion be it anything but every colour has its own unique and a beautiful meaning. Colours are certainly vital elements of the lives of all individual.';

  changeTextColor(event: ColorChangeEvent) {
    this.divContent.nativeElement.style.color = event.target.value;
  }

  changeBgColor(event: ColorChangeEvent) {
    this.divContent.nativeElement.style.backgroundColor = event.target.value;
  }
}
