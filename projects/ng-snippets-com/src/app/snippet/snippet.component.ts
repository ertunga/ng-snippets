import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {snippets} from "../snippets";
import {SnippetService} from "../snippet.service";

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private snippetService: SnippetService
  ) {
    this.activatedRoute.params.pipe(
      map(params => params['slug']),
      filter(slug => snippets.includes(slug))
    ).subscribe(slug => {
      this.snippetService.get(slug).subscribe(console.log);
    });
  }

  ngOnInit(): void {
  }

}
