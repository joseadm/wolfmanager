/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nb-reset-password-page',
  styleUrls: ['./reset-password.component.scss'],
  template: `
  <img src="../../../assets/images/wolf.png" class="img-icon"/> <br>
      <h2 class="title">Change password</h2>
      <small class="form-text sub-title">Please enter a new password</small>
      <form (ngSubmit)="resetPass()" #resetPassForm="ngForm">

        <div *ngIf="errors && errors.length > 0 && !submitted" class="alert alert-danger" role="alert">
          <div><strong>Oh snap!</strong></div>
          <div *ngFor="let error of errors">{{ error }}</div>
        </div>
        <div *ngIf="messages && messages.length > 0 && !submitted" class="alert alert-success" role="alert">
          <div><strong>Hooray!</strong></div>
          <div *ngFor="let message of messages">{{ message }}</div>
        </div>

        <div class="form-group">
          <label for="input-password" class="sr-only">New Password</label>
          <input name="password" [(ngModel)]="user.password" type="password" id="input-password"
                 class="form-control form-control-lg first" placeholder="New Password" #password="ngModel"
                 [class.form-control-danger]="password.invalid && password.touched"
                 [required]="getConfigValue('forms.validation.password.required')"
                 [minlength]="getConfigValue('forms.validation.password.minLength')"
                 [maxlength]="getConfigValue('forms.validation.password.maxLength')"
                 autofocus>
          <small class="form-text error" *ngIf="password.invalid && password.touched && password.errors?.required">
            Password is required!
          </small>
          <small
            class="form-text error"
            *ngIf="password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)">
            Password should contains
            from {{getConfigValue('forms.validation.password.minLength')}}
            to {{getConfigValue('forms.validation.password.maxLength')}}
            characters
          </small>
        </div>

        <div class="form-group">
          <label for="input-re-password" class="sr-only">Confirm Password</label>
          <input
            name="rePass" [(ngModel)]="user.confirmPassword" type="password" id="input-re-password"
            class="form-control form-control-lg last" placeholder="Confirm Password" #rePass="ngModel"
            [class.form-control-danger]="(rePass.invalid || password.value != rePass.value) && rePass.touched"
            [required]="getConfigValue('forms.validation.password.required')">
          <small class="form-text error"
                 *ngIf="rePass.invalid && rePass.touched && rePass.errors?.required">
            Password confirmation is required!
          </small>
          <small
            class="form-text error"
            *ngIf="rePass.touched && password.value != rePass.value && !rePass.errors?.required">
            Password does not match the confirm password.
          </small>
        </div>

        <button [disabled]="submitted || !resetPassForm.form.valid" class="btn btn-hero-info btn-block"
                [class.btn-pulse]="submitted">
          Change password
        </button>
      </form>

      <div class="links col-sm-12">
        <small class="form-text">
          Already have an account? <a routerLink="../login"><strong>Sign In</strong></a>
        </small>
        <small class="form-text">
          <a routerLink="../register"><strong>Sign Up</strong></a>
        </small>
      </div>
  `,
})
export class NgxResetPasswordComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor() {
  }

  resetPass(): void {

  }

  getConfigValue(key: string): any {
  }
}
