import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
    BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
    BsDropdownModule.forRoot(),
		NgxIntlTelInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
