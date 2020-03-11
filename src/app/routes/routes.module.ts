import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    ComponentsModule
  ],
  exports: [PagesModule, ComponentsModule]
})
export class RoutesModule { }
