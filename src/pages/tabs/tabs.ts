import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  settingsRoot = SettingsPage;
  homeRoot = HomePage;
  // about = AboutPage;
  contactRoot = ContactPage;

  constructor() {

  }
}
