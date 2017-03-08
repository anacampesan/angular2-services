import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Click to see the users';

  // When the user clicks on the 'see list of users' link
  onActivate() {
    this.message = 'List of users';
  }

  onDeactivate() {
    this.message = 'Click to see the users';
  }
}
