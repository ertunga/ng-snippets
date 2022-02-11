import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SnippetComponent } from './snippet/snippet.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import './web-component/code-block-with-header.component';
import { MarkdownPipe } from './markdown.pipe';
import { TrustPipe } from './trust.pipe';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

@NgModule({
	declarations: [AppComponent, HomeComponent, SnippetComponent, NotFoundComponent, MarkdownPipe, TrustPipe],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, HighlightModule],
	providers: [
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: {
				coreLibraryLoader: () => import('highlight.js/lib/core'),
				languages: {
					typescript: () => import('highlight.js/lib/languages/typescript'),
					xml: () => import('highlight.js/lib/languages/xml')
				}
			}
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
