import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinPipe } from './join.pipe';

@NgModule({
	declarations: [JoinPipe],
	imports: [CommonModule],
	exports: [JoinPipe]
})
export class JoinModule {}
