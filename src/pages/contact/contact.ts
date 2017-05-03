import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public list: boolean[] = [];
  private storage:Storage;

  constructor(public navCtrl: NavController, storages: Storage) {
    this.storage = storages;
  }
  ionViewDidEnter()
  {
      this.storage.ready().then(() => {
        this.storage.get('settings').then((val) => {
          if(val == null)
          {
            this.list = [true, true, true, true, true, true, true, false, false];
            this.storage.set('settings', this.list);
          }
          else
          {
            this.list = val;
          }
        })
      });
  }
  public notify() {
    this.storage.set('settings', this.list);
  }
}
