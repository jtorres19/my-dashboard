import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, UserRs, UsersRs } from '../interfaces/users-rs';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient);
  #state = signal<State>({ loading: true, users: [] });
  users = computed(() => this.#state().users);
  loading = computed(() => this.#state().loading);

  constructor() {
    this.http.get<UsersRs>('https://reqres.in/api/users')
      .pipe(delay(2000))
      .subscribe((res) => {
        this.#state.set({ loading: false, users: res.data });
      });
  }

  getUserById(id: string) {
    return this.http.get<UserRs>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(2000),
        map((res) => res.data),
      )
  }
}
