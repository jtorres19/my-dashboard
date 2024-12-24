import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [
    TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {
  showContent = signal(false);
  grade = signal<Grade>('A');
  frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Qwik']);
  frameworks2 = signal([]);

  toggleContent() {
    this.showContent.update(value => !value);
  }
}
