import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'na-network-alert',
  templateUrl: './network-alert.component.html',
  styleUrls: ['./network-alert.component.css']
})
export class NetworkAlertComponent implements OnInit {

  @Input() bdColor = 'rgba(0,0,0,0.3)';
  @Input() color = 'rgb(89,40,177, 1)';
  @Input() bgColor = '#fff';
  @Input() icon: string = 'cloud-offline-outline';
  @Input() message = "Critical Message";

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }

}
