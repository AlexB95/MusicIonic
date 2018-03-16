import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviewPage } from './preview';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    PreviewPage,
    ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(PreviewPage),
  ],
})
export class PreviewPageModule {}
