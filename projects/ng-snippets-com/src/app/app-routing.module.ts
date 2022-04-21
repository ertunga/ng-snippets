import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SnippetComponent } from './page/snippet/snippet.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'snippet/:slug',
		component: SnippetComponent
	},
	{
		path: '404',
		component: NotFoundComponent
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
