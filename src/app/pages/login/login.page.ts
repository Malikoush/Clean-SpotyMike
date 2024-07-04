import { LocalstorageService } from './../../core/services/localstorage.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ModalController } from '@ionic/angular';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonText,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/angular/standalone';
//import { AuthentificationService } from 'src/app/core/services/authentification.service';
//import { TranslateModule } from '@ngx-translate/core';
//import { LoginRequestError } from 'src/app/core/interfaces/login';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { eye, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { PasswordLostComponent } from 'src/app/shared/modal/password-lost/password-lost.component';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { IUser } from 'src/app/core/interfaces/user';
import { FirestoreService } from 'src/app/core/services/firestore.service';
//import { ModalController } from '@ionic/angular';
//import { PasswordLostComponent } from 'src/app/shared/modal/password-lost/password-lost.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonGrid,
    IonText,
    IonIcon,
    IonItem,
    IonList,
    IonTitle,
    IonInput,
    IonHeader,
    IonButton,
    IonToolbar,
    IonContent,
    FormsModule,
    CommonModule,
    //TranslateModule,
    ReactiveFormsModule,
    NgClass,
  ],
  providers: [ModalController],
})
export class LoginPage implements OnInit {
  error = '';
  submitForm = false;
  userIdDocument: string = '';
  private router = inject(Router);
  private modalCtl = inject(ModalController);
  private localStorageService = inject(LocalstorageService);
  private firebase = inject(FirestoreService);
  passwordFieldType: string = 'password';

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
      ),
    ]),
  });
  constructor() {
    addIcons({ eyeOutline, eyeOffOutline });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.error = '';
    this.submitForm = true;

    if (this.form.valid) {
      // this.router.navigateByUrl('/home');
      this.firebase
        .login(this.form.value.email, this.form.value.password)
        .subscribe((user) => {
          if (user.idDocument) {
            this.localStorageService.setElement(
              'userIdDocument',
              JSON.stringify(user.idDocument)
            ); // JSON.stringify( user);
            this.router.navigateByUrl('/home');
          } else {
            this.error = 'Email ou mot de passe incorrect';
            console.log(this.error);
          }
        });
    }
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
  async onPasswordLostModal() {
    const modal = await this.modalCtl.create({
      component: PasswordLostComponent,
    });
    await modal.present();
  }
  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
