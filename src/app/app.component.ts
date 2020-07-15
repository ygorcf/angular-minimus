import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  showMenu = false
  darkModeActive = false

  toggleMenu () {
    this.showMenu = !this.showMenu
  }

  modeToggleSwitch () {
    this.darkModeActive = !this.darkModeActive
  }

}
