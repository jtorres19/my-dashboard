import { Component, inject } from '@angular/core';

import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    TitleComponent,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export default class UsersComponent {
  usersServices = inject(UsersService);
}
