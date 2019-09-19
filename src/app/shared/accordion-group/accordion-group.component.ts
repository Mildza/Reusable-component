import { Component, ContentChild } from '@angular/core';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionContentComponent } from '../accordion-content/accordion-content.component';

@Component({
  selector: 'accordion-group',
  template: `
    <ng-content></ng-content>
  `
})
export class AccordionGroupComponent {
  @ContentChild(AccordionHeaderComponent) header: AccordionHeaderComponent;
  @ContentChild(AccordionContentComponent) content: AccordionContentComponent;

  toggle(value?: boolean) {
    this.header.isOpen = value ? value : !this.header.isOpen;
    this.content.isOpen = value ? value : !this.content.isOpen;
  }
}
