import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  @Input() user: User | null = null;
}
