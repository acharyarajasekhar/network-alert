import { Component } from '@angular/core';
import { NetworkAlertService } from 'projects/network-alert/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private networkAlert: NetworkAlertService) { }

  showAlert() {
    this.networkAlert.show();
    setTimeout(() => this.networkAlert.hide(), 2000);
  }
}
