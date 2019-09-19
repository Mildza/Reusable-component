import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { AccordionContentComponent } from './shared/accordion-content/accordion-content.component';
import { AccordionGroupComponent } from './shared/accordion-group/accordion-group.component';
import { AccordionHeaderComponent } from './shared/accordion-header/accordion-header.component';
import { AccordionContentLazyDirective } from './shared/accordion-content-lazy.directive'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AccordionComponent,
    AccordionContentComponent,
    AccordionGroupComponent,
    AccordionHeaderComponent,
    AccordionContentLazyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
