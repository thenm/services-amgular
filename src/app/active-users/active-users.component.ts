import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  private users: string[];
  
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.users = this.userService.activeUsers
  }

  onSetToInactive(index) {
    this.userService.setToInactive(index)
  }

}
