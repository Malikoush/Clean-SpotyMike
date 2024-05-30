import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonButtons,
  IonToolbar,
  IonButton,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-password-lost',
  templateUrl: './password-lost.component.html',
  styleUrls: ['./password-lost.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonInput,
    IonContent,
    IonTitle,
    IonButton,
    IonToolbar,
    IonButtons,
    IonHeader,
    NgIf,
  ],
  providers: [ModalController],
})
export class PasswordLostComponent implements OnInit {
  private modalCtrl = inject(ModalController);
  constructor() {}

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }
}
