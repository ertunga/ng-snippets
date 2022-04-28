import { NgModule } from '@angular/core';
import { FallbackSrcDirective } from './fallback-src.directive';

@NgModule({
    declarations: [FallbackSrcDirective],
    exports: [FallbackSrcDirective]
})
export class FallbackSrcModule {}
