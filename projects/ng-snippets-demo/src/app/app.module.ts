import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinModule } from '../../../ng-snippets/join';
import { TruncateModule } from '../../../ng-snippets/truncate';
import { TruncateWordsModule } from '../../../ng-snippets/truncate-words';
import { ClickOutsideModule } from '../../../ng-snippets/click-outside';
import { FallbackImageModule } from '../../../ng-snippets/fallback-image';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, JoinModule, TruncateModule, ClickOutsideModule, TruncateWordsModule, FallbackImageModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
