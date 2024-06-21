import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader, IonInput, IonItem, IonContent, IonButtons, IonToolbar, IonButton, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-modal-artist',
  templateUrl: './modal-artist.component.html',
  styleUrls: ['./modal-artist.component.scss'],
  standalone: true,
  imports: [IonTitle, IonButton, IonToolbar, IonButtons, IonContent, 
    IonItem,
    IonInput,
    IonHeader,
    
 
  ],
  providers: [ModalController],
})
export class ModalArtistComponent  implements OnInit {
  private modalCtrl = inject(ModalController);
  constructor() { }

  ngOnInit() {}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }
}
