import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinModule } from '../../../ng-snippets/join';
import { TruncateModule } from '../../../ng-snippets/truncate';
import { TruncateWordsModule } from '../../../ng-snippets/truncate-words';
import { ClickOutsideModule } from '../../../ng-snippets/click-outside';
import { FallbackSrcModule } from '../../../ng-snippets/fallback-src';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        JoinModule,
        TruncateModule,
        ClickOutsideModule,
        TruncateWordsModule,
        FallbackSrcModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
