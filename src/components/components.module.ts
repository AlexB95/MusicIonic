import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { SearchComponent } from './search/search';
@NgModule({
	declarations: [ProgressBarComponent,
    SearchComponent],
	imports: [],
	exports: [ProgressBarComponent,
    SearchComponent]
})
export class ComponentsModule {}
