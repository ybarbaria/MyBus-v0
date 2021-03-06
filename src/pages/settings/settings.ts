import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  searchQuery: string = '';
  items: string[];

  constructor( private busApi: BusService) {
  //private navCtrl: NavController,
  }

  initializeBusItems() {
    this.items = this.busApi.getBus();
  }

  getBus(ev: any) {
    // Reset items back to all of the items
    this.initializeBusItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
