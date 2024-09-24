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
  userNotFound: boolean = false;
  isSearchAttempted: boolean = false;  // Nueva bandera para saber si se intentó buscar

  constructor(private userService: UserService) {}

  onSearch() {
    this.isSearchAttempted = true;  // Marca que se ha intentado buscar
    this.userService.getUsers().subscribe((response) => {
      const users = response.users;
      const foundUser = users.find((u: User) => u.username === this.searchTerm);

      if (foundUser) {
        this.user = foundUser;
        this.userNotFound = false;
      } else {
        this.user = null;
        this.userNotFound = true;
      }
    });
  }
}
