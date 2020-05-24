import { Component } from '@angular/core';
import { NetworkAlertService } from 'projects/network-alert/src/public-api';
import { NetworkService } from 'projects/network-alert/src/lib/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private networkAlert: NetworkAlertService,
    private networkService: NetworkService
  ) {

    this.networkService.onlineChanges.subscribe(isOnline => {
      if (isOnline) {
        this.networkAlert.hide();
      }
      else {
        this.networkAlert.show();
      }
    })

  }

  showAlert() {
    this.networkAlert.show();
    setTimeout(() => this.networkAlert.hide(), 2000);
  }
}
