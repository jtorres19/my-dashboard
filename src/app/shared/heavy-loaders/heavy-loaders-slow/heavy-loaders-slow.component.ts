import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [
    NgClass
  ],
  templateUrl: './heavy-loaders-slow.component.html',
  styleUrl: './heavy-loaders-slow.component.css'
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();

    while (Date.now() - start < 3000) {
    }

    console.log('HeavyLoadersSlowComponent created');
  }
}
