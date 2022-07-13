import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';

import { UtilisateurService } from '../shared/services/utilisateur.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  loading: boolean;
  loginError: boolean;

  uUsernameCtrl: FormControl;
  uPasswordCtrl: FormControl;

  authentificationForm: FormGroup;

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.uUsernameCtrl = this.fb.control('', Validators.required);
    this.uPasswordCtrl = this.fb.control('', Validators.required);
    this.authentificationForm = this.fb.group({
      u_username: this.uUsernameCtrl,
      u_password: this.uPasswordCtrl
    });
  }

  register(): void {
    this.loading = true;

    this.utilisateurService.utilisateurAuthentification(
      this.uUsernameCtrl.value,
      this.uPasswordCtrl.value
    ).subscribe((data) => {
      try {
        localStorage.setItem("u_id", data.u_id);
        this.router.navigate(['/mes-medias'], { relativeTo: this.route });      
      }
      catch(e) {
        this.loginError = true;
        this.loading = false;
      }
    });
  }
}
