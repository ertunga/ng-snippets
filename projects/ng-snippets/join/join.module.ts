import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';

@NgModule({
    declarations: [JoinPipe],
    exports: [JoinPipe]
})
export class JoinModule {}
