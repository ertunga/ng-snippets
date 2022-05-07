import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { SnippetComponent } from './page/snippet/snippet.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { MarkdownPipe } from './pipe/markdown.pipe';
import { TrustPipe } from './pipe/trust.pipe';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { createCustomElement } from '@angular/elements';
import { CodeBlockWithHeaderComponent } from './web-component/code-block-with-header/code-block-with-header.component';
import { provideThemeConfig } from '../../../ng-snippets/theme';

@NgModule({
    declarations: [AppComponent, HomeComponent, SnippetComponent, NotFoundComponent, MarkdownPipe, TrustPipe, CodeBlockWithHeaderComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, HighlightModule],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                    css: () => import('highlight.js/lib/languages/css')
                }
            }
        },
        provideThemeConfig({
            themes: [
                { name: 'light', value: 'light' },
                { name: 'dark', value: 'dark' }
            ]
        })
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(private injector: Injector) {
        const codeBlockWithHeaderElement = createCustomElement(CodeBlockWithHeaderComponent, { injector });
        customElements.define('ngs-code-block-with-header', codeBlockWithHeaderElement);
    }
}
