import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonList, IonItem, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonItem, IonList, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule]
})
export class RegisterPage implements OnInit {
  private router = inject(Router);

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor() { }
  onSubmit() {
   
      this.router.navigateByUrl('/home/tabs/tab1');

  }
  ngOnInit() {
  }
  goToConnexion() {
    this.router.navigateByUrl('');
  }

}
