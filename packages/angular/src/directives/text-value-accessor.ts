import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'materials-autocomplete, materials-date-field, materials-time-field, materials-text-field:not([type=number]), materials-textarea',
  host: {
    '(change)': 'handleChangeEvent($event.target.value)'
    '(change)': 'handleChangeEvent($event.target.value)'
    '(change)': 'handleChangeEvent($event.target.value)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ]
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
