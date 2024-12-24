import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  imports: [
    TitleComponent,
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export default class ChangeDetectionComponent {
  currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`);
  frameworkAsSignal = signal({ name: 'Angular', releaseDate: '2010-10-20' });
  frameworkAsProperty = { name: 'Angular', releaseDate: '2010-10-20' };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update(value => {
        value.name = 'React';

        return { ...value };
      });

      console.log('Done');
    }, 3000);
  }
}
