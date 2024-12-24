import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatLine } from '@angular/material/core';

@Component({
  selector: 'app-options-bottom-sheet',
  imports: [MatListModule, MatLine],
  templateUrl: './options-bottom-sheet.component.html',
  styleUrl: './options-bottom-sheet.component.css'
})
export class OptionsBottomSheetComponent {
  #bottomSheetRef: MatBottomSheetRef<OptionsBottomSheetComponent> = inject(MatBottomSheetRef);

  openLink($event: MouseEvent): void {
    this.#bottomSheetRef.dismiss();

    console.log('event', $event)

    $event.preventDefault();
  }
}
