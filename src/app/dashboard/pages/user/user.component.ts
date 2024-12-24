import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  imports: [
    TitleComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent {
  #route = inject(ActivatedRoute)
  #usersService = inject(UsersService)
  // user = signal<User | undefined>(undefined);
  user = toSignal(
    this.#route.params.pipe(
      switchMap(({ id }) => this.#usersService.getUserById(id))
    )
  );
  titleLabel = computed(() => {
    if (this.user()) {
      return `User info: ${this.user()?.first_name} ${this.user()?.last_name}`
    }

    return 'User info'
  });

  // constructor() {
  //   this.#route.params.subscribe(params => {
  //     console.log(params)
  //   });
  // }
}
