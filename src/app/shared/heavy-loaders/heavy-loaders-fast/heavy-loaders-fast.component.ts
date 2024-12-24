import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [
    NgClass
  ],
  templateUrl: './heavy-loaders-fast.component.html',
  styleUrl: './heavy-loaders-fast.component.css'
})
export class HeavyLoadersFastComponent {
  @Input() cssClass!: string;

  constructor() {
    console.log('HeavyLoadersFastComponent created');
  }
}
