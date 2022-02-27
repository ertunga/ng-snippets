import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinModule } from '../../../ng-snippets/src/lib/join';
import { TruncateModule } from '../../../ng-snippets/src/lib/truncate';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, JoinModule, TruncateModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
