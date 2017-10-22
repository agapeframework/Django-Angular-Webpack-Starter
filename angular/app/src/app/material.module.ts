// import all material modules here


import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
	  MatButtonModule,
	  MatMenuModule,
	  MatToolbarModule,
	  MatIconModule,
	  MatInputModule,
	  MatCardModule,
	  MatFormFieldModule
  ],
  exports: [
	  MatButtonModule,
	  MatMenuModule,
	  MatToolbarModule,
	  MatIconModule,
	  MatInputModule,
	  MatCardModule,
	  MatFormFieldModule
  ]
})
export class MaterialModule { }
