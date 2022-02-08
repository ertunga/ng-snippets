import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SnippetComponent } from './snippet/snippet.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import './web-component/code-block-with-header.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SnippetComponent,
		NotFoundComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
	// schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
