/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'nb-auth',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-column>
      <div class="flex-centered col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <h3>Demo Credentials: </h3>
                  <p>Email: admin@admin.com</p>
                  <p>Password: admin</p>
            </div>
        <nb-card>
          <nb-card-body>
            <div class="flex-centered col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <router-outlet></router-outlet>
            </div>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class NgxAuthComponent implements OnDestroy {

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  constructor() {

  
  }

  ngOnDestroy(): void {
  }
}
