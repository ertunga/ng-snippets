import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SnippetService } from '../snippet.service';
import { HighlightJS } from 'ngx-highlightjs';

@Component({
	selector: 'ngs-snippet',
	template: '<article *ngIf="content" [innerHTML]="content | markdown | trust"></article>',
})
export class SnippetComponent implements OnInit, AfterViewChecked {
	content: string | undefined;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private snippetService: SnippetService,
		private highlightJS: HighlightJS
	) { }

	ngOnInit(): void {
		this.activatedRoute.params.pipe(map((params) => params['slug'])).subscribe((slug: string) => {
			this.snippetService
				.get(slug)
				.pipe(
					catchError(() => {
						this.router.navigateByUrl('404');
						return EMPTY;
					})
				)
				.subscribe((content) => {
					this.content = content;
				});
		});
	}

	ngAfterViewChecked(): void {
		this.highlightJS.highlightAll().subscribe();
	}
}
