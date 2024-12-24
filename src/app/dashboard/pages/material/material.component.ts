import { Component, inject } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
  selector: 'app-material',
  imports: [MatSlideToggle, MatBadge, MatIcon, MatButton],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export default class MaterialComponent {
  #bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this.#bottomSheet.open(OptionsBottomSheetComponent);
  }
}
