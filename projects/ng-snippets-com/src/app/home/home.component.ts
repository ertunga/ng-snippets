import { Component, OnInit } from '@angular/core';
import {snippets} from "../snippets";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  snippets = snippets;

  constructor() { }

  ngOnInit(): void {
  }

}
