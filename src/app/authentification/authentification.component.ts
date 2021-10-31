import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UtilisateurService } from '../shared/services/utilisateur.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  uUsernameCtrl: FormControl;
  uPasswordCtrl: FormControl;

  authentificationForm: FormGroup;

  test;

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
    this.utilisateurService.utilisateurAuthentification(
      this.uUsernameCtrl.value,
      this.uPasswordCtrl.value
    ).subscribe((data: number) => {
      console.log(data);
    });
  }
}
