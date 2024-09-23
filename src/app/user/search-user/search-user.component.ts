// search-user.component.ts
import { Component } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/userService';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
})
export class SearchUserComponent {
  searchTerm: string = '';
  user: User | null = null;

  constructor(private userService: UserService) {}

  onSearch() {
    this.userService.getUsers().subscribe((response) => {
      const users = response.users;
      const foundUser = users.find((u: User) => u.username === this.searchTerm);

      if (foundUser) {
        this.user = foundUser;
      } else {
        this.user = null;
      }
    });
  }
}
