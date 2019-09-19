import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AccordionContentLazyDirective } from '../accordion-content-lazy.directive';

@Component({
  selector: 'accordion-content',
  template: `
    <div *ngIf="isOpen" [@slideInOut]>
      <ng-template [ngTemplateOutlet]="lazyContent && lazyContent.content"></ng-template>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        overflow: hidden;
        display: block;
        background-color: rgba(160, 155, 155, 0.03);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [style({ height: '0px' }), animate('400ms', style({ height: '*' }))]),
      transition(':leave', [style({ height: '*' }), animate('400ms', style({ height: '0px' }))])
    ])
  ]
})
export class AccordionContentComponent {
  @ContentChild(AccordionContentLazyDirective) lazyContent: AccordionContentLazyDirective;
  _isOpen = false;

  set isOpen(value: boolean) {
    if (this._isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }
  get isOpen() {
    return this._isOpen;
  }

  constructor(private cdr: ChangeDetectorRef) { }
}
