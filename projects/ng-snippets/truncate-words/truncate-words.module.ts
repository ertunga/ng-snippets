import { NgModule } from '@angular/core';
import { TruncateWordsPipe } from './truncate-words.pipe';

@NgModule({
    declarations: [TruncateWordsPipe],
    exports: [TruncateWordsPipe]
})
export class TruncateWordsModule {}
