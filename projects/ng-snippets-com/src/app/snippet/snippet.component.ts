import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SnippetService } from '../snippet.service';

@Component({
	selector: 'app-snippet',
	templateUrl: './snippet.component.html',
	styleUrls: ['./snippet.component.scss'],
})
export class SnippetComponent implements AfterViewInit {
	content: string | undefined;

	@ViewChild('article') private article: ElementRef | undefined;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private snippetService: SnippetService,
	) {}

	ngAfterViewInit(): void {
		this.activatedRoute.params
			.pipe(map((params) => params['slug']))
			.subscribe((slug) => {
				this.snippetService
					.get(slug)
					.pipe(
						pipe(
							catchError(() => {
								this.router.navigateByUrl('404');
								return EMPTY;
							}),
						),
					)
					.subscribe((content) => {
						if (this.article) {
							this.article.nativeElement.innerHTML = content;
						}
					});
			});
	}
}
