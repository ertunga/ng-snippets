import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SnippetService {
    private readonly prefix = '/assets/snippets/';
    private readonly extension = '.md';

    constructor(private httpClient: HttpClient) {}

    get(slug: string): Observable<string> {
        return this.httpClient.get(environment.baseURL + this.prefix + slug + this.extension, {
            responseType: 'text'
        });
    }
}
