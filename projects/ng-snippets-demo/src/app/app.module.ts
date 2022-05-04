import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinModule } from '../../../ng-snippets/join';
import { TruncateModule } from '../../../ng-snippets/truncate';
import { TruncateWordsModule } from '../../../ng-snippets/truncate-words';
import { ClickOutsideModule } from '../../../ng-snippets/click-outside';
import { FallbackSrcModule } from '../../../ng-snippets/fallback-src';
import { provideThemeConfig } from '../../../ng-snippets/theme/tokens';
import { Theme } from './theme';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, JoinModule, TruncateModule, ClickOutsideModule, TruncateWordsModule, FallbackSrcModule],
    providers: [
        provideThemeConfig({
            themes: [
                {
                    name: Theme.LIGHT,
                    className: 'light-theme'
                },
                {
                    name: Theme.DIMMED,
                    className: 'dimmed-theme'
                },
                {
                    name: Theme.DARK,
                    className: 'dark-theme'
                }
            ]
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
