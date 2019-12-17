/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

export const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.z.runOutsideAngular(() => (this.el[item] = val)); }
    });
  });
};

export const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};

export const proxyOutputs = (instance: any, el: any, events: string[]) => {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts: { inputs?: any; methods?: any }) {
  const decorator =  function(cls: any){
    if (opts.inputs) {
      proxyInputs(cls, opts.inputs);
    }
    if (opts.methods) {
      proxyMethods(cls, opts.methods);
    }
    return cls;
  };
  return decorator;
}

import { Components } from '@materials-elements/core'

export declare interface MaterialsAlertController extends Components.MaterialsAlertController {}
@ProxyCmp({'methods': ['create']})
@Component({ selector: 'materials-alert-controller', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class MaterialsAlertController {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsAutocomplete extends Components.MaterialsAutocomplete {}
@ProxyCmp({inputs: ['autocomplete', 'dense', 'label', 'maxSuggestions', 'trailingIcon', 'value']})
@Component({ selector: 'materials-autocomplete', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autocomplete', 'dense', 'label', 'maxSuggestions', 'trailingIcon', 'value'] })
export class MaterialsAutocomplete {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}

export declare interface MaterialsBadge extends Components.MaterialsBadge {}

@Component({ selector: 'materials-badge', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class MaterialsBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsButton extends Components.MaterialsButton {}
@ProxyCmp({inputs: ['block', 'color', 'dense', 'disabled', 'icon', 'outlined', 'raised', 'type', 'unelevated']})
@Component({ selector: 'materials-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['block', 'color', 'dense', 'disabled', 'icon', 'outlined', 'raised', 'type', 'unelevated'] })
export class MaterialsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsCard extends Components.MaterialsCard {}
@ProxyCmp({inputs: ['cardTitle', 'elevation', 'height', 'maxHeight', 'onAction', 'padding', 'width']})
@Component({ selector: 'materials-card', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['cardTitle', 'elevation', 'height', 'maxHeight', 'onAction', 'padding', 'width'] })
export class MaterialsCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsCardAction extends Components.MaterialsCardAction {}
@ProxyCmp({inputs: ['fullBleed', 'icon', 'label', 'onAction']})
@Component({ selector: 'materials-card-action', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['fullBleed', 'icon', 'label', 'onAction'] })
export class MaterialsCardAction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsCardContent extends Components.MaterialsCardContent {}

@Component({ selector: 'materials-card-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class MaterialsCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsCheckbox extends Components.MaterialsCheckbox {}
@ProxyCmp({inputs: ['alignLabel', 'checked', 'color', 'disabled', 'indeterminate', 'label', 'name', 'value']})
@Component({ selector: 'materials-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignLabel', 'checked', 'color', 'disabled', 'indeterminate', 'label', 'name', 'value'] })
export class MaterialsCheckbox {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}

export declare interface MaterialsChip extends Components.MaterialsChip {}
@ProxyCmp({inputs: ['color', 'inkColor']})
@Component({ selector: 'materials-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'inkColor'] })
export class MaterialsChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsDatatable extends Components.MaterialsDatatable {}
@ProxyCmp({inputs: ['color', 'dense', 'oddEvenStyle']})
@Component({ selector: 'materials-datatable', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'dense', 'oddEvenStyle'] })
export class MaterialsDatatable {
  sort!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sort']);
  }
}

export declare interface MaterialsDatatableAction extends Components.MaterialsDatatableAction {}
@ProxyCmp({inputs: ['color', 'display', 'icon', 'label'], 'methods': ['TriggerPress']})
@Component({ selector: 'materials-datatable-action', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'display', 'icon', 'label'] })
export class MaterialsDatatableAction {
  press!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['press']);
  }
}

export declare interface MaterialsDatatableBody extends Components.MaterialsDatatableBody {}

@Component({ selector: 'materials-datatable-body', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class MaterialsDatatableBody {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsDatatableBodyCell extends Components.MaterialsDatatableBodyCell {}
@ProxyCmp({inputs: ['align', 'width']})
@Component({ selector: 'materials-datatable-body-cell', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['align', 'width'] })
export class MaterialsDatatableBodyCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsDatatableBodyRow extends Components.MaterialsDatatableBodyRow {}
@ProxyCmp({inputs: ['dense', 'expendable', 'expended', 'selectable', 'selected']})
@Component({ selector: 'materials-datatable-body-row', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dense', 'expendable', 'expended', 'selectable', 'selected'] })
export class MaterialsDatatableBodyRow {
  selectRow!: EventEmitter<CustomEvent>;
  expand!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectRow', 'expand']);
  }
}

export declare interface MaterialsDatatableFooter extends Components.MaterialsDatatableFooter {}
@ProxyCmp({inputs: ['color']})
@Component({ selector: 'materials-datatable-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color'] })
export class MaterialsDatatableFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsDatatableHeader extends Components.MaterialsDatatableHeader {}
@ProxyCmp({inputs: ['color', 'selectable', 'selected']})
@Component({ selector: 'materials-datatable-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'selectable', 'selected'] })
export class MaterialsDatatableHeader {
  selectAll!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectAll']);
  }
}

export declare interface MaterialsDatatableHeaderColumn extends Components.MaterialsDatatableHeaderColumn {}
@ProxyCmp({inputs: ['align', 'description', 'label', 'sortable', 'sorted', 'value', 'width']})
@Component({ selector: 'materials-datatable-header-column', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['align', 'description', 'label', 'sortable', 'sorted', 'value', 'width'] })
export class MaterialsDatatableHeaderColumn {
  sort!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sort']);
  }
}

export declare interface MaterialsDatatablePagination extends Components.MaterialsDatatablePagination {}
@ProxyCmp({inputs: ['currentPage', 'first', 'last', 'size', 'total']})
@Component({ selector: 'materials-datatable-pagination', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['currentPage', 'first', 'last', 'size', 'total'] })
export class MaterialsDatatablePagination {
  nextPage!: EventEmitter<CustomEvent>;
  previousPage!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['nextPage', 'previousPage']);
  }
}

export declare interface MaterialsDateField extends Components.MaterialsDateField {}
@ProxyCmp({inputs: ['customValidation', 'datepicker', 'datepickerMonthPicker', 'datepickerTodayPicker', 'datepickerYearPicker', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'label', 'leadingIcon', 'outlined', 'persistent', 'required', 'value', 'width'], 'methods': ['isValid', 'forceValidation']})
@Component({ selector: 'materials-date-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['customValidation', 'datepicker', 'datepickerMonthPicker', 'datepickerTodayPicker', 'datepickerYearPicker', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'label', 'leadingIcon', 'outlined', 'persistent', 'required', 'value', 'width'] })
export class MaterialsDateField {
  input!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['input']);
  }
}

export declare interface MaterialsDatepicker extends Components.MaterialsDatepicker {}
@ProxyCmp({inputs: ['dateRange', 'dateSelected', 'monthPicker', 'nullable', 'todayPicker', 'yearPicker']})
@Component({ selector: 'materials-datepicker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dateRange', 'dateSelected', 'monthPicker', 'nullable', 'todayPicker', 'yearPicker'] })
export class MaterialsDatepicker {
  dateSelectedUpdate!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dateSelectedUpdate']);
  }
}

export declare interface MaterialsDialog extends Components.MaterialsDialog {}
@ProxyCmp({inputs: ['acceptButton', 'actions', 'body', 'cancelButton', 'closeButton', 'dialogTitle', 'disableAcceptButton', 'height', 'items', 'scrollable', 'width'], 'methods': ['show', 'toggle', 'isOpen', 'open', 'close']})
@Component({ selector: 'materials-dialog', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['acceptButton', 'actions', 'body', 'cancelButton', 'closeButton', 'dialogTitle', 'disableAcceptButton', 'height', 'items', 'scrollable', 'width'] })
export class MaterialsDialog {
  accept!: EventEmitter<CustomEvent>;
  cancel!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['accept', 'cancel']);
  }
}

export declare interface MaterialsDialogController extends Components.MaterialsDialogController {}
@ProxyCmp({'methods': ['create']})
@Component({ selector: 'materials-dialog-controller', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class MaterialsDialogController {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsDrawer extends Components.MaterialsDrawer {}
@ProxyCmp({inputs: ['dismissible', 'modal'], 'methods': ['toggle', 'open', 'close', 'renderHtml']})
@Component({ selector: 'materials-drawer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dismissible', 'modal'] })
export class MaterialsDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsDrawerListItem extends Components.MaterialsDrawerListItem {}
@ProxyCmp({inputs: ['activated', 'icon', 'label', 'targetUrl'], 'methods': ['TriggerPress']})
@Component({ selector: 'materials-drawer-list-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activated', 'icon', 'label', 'targetUrl'] })
export class MaterialsDrawerListItem {
  press!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['press']);
  }
}

export declare interface MaterialsDrawerWithTopAppBar extends Components.MaterialsDrawerWithTopAppBar {}
@ProxyCmp({inputs: ['appBarDense', 'appBarTitle', 'appBarType', 'drawerType', 'open']})
@Component({ selector: 'materials-drawer-with-top-app-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appBarDense', 'appBarTitle', 'appBarType', 'drawerType', 'open'] })
export class MaterialsDrawerWithTopAppBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsDropdown extends Components.MaterialsDropdown {}
@ProxyCmp({inputs: ['buttonType', 'color', 'icon', 'iconHelper', 'iconOnly', 'menuPosition', 'menuTitle'], 'methods': ['openMenu', 'closeMenu', 'isOpen']})
@Component({ selector: 'materials-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonType', 'color', 'icon', 'iconHelper', 'iconOnly', 'menuPosition', 'menuTitle'] })
export class MaterialsDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsExpansionPanel extends Components.MaterialsExpansionPanel {}
@ProxyCmp({inputs: ['collapsed', 'elevation', 'noPadding', 'type']})
@Component({ selector: 'materials-expansion-panel', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['collapsed', 'elevation', 'noPadding', 'type'] })
export class MaterialsExpansionPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsFab extends Components.MaterialsFab {}
@ProxyCmp({inputs: ['hidden', 'icon', 'label', 'size']})
@Component({ selector: 'materials-fab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['hidden', 'icon', 'label', 'size'] })
export class MaterialsFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsFormField extends Components.MaterialsFormField {}
@ProxyCmp({inputs: ['alignEnd', 'label']})
@Component({ selector: 'materials-form-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignEnd', 'label'] })
export class MaterialsFormField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsHeadline extends Components.MaterialsHeadline {}
@ProxyCmp({inputs: ['level']})
@Component({ selector: 'materials-headline', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['level'] })
export class MaterialsHeadline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsIcon extends Components.MaterialsIcon {}
@ProxyCmp({inputs: ['color', 'dark', 'disabled', 'light', 'name', 'size']})
@Component({ selector: 'materials-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'dark', 'disabled', 'light', 'name', 'size'] })
export class MaterialsIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsIconButton extends Components.MaterialsIconButton {}
@ProxyCmp({inputs: ['dense', 'disabled', 'icon', 'iconOff', 'iconOn', 'img', 'imgOff', 'label', 'labelOff', 'labelOn', 'large', 'pressed', 'svg', 'svgOff']})
@Component({ selector: 'materials-icon-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dense', 'disabled', 'icon', 'iconOff', 'iconOn', 'img', 'imgOff', 'label', 'labelOff', 'labelOn', 'large', 'pressed', 'svg', 'svgOff'] })
export class MaterialsIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsLinearProgress extends Components.MaterialsLinearProgress {}
@ProxyCmp({inputs: ['backgroundColor', 'indeterminate', 'opened', 'timeout'], 'methods': ['show', 'close', 'open']})
@Component({ selector: 'materials-linear-progress', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['backgroundColor', 'indeterminate', 'opened', 'timeout'] })
export class MaterialsLinearProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsList extends Components.MaterialsList {}
@ProxyCmp({inputs: ['dense', 'multiple', 'selectable', 'size']})
@Component({ selector: 'materials-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dense', 'multiple', 'selectable', 'size'] })
export class MaterialsList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsListItem extends Components.MaterialsListItem {}
@ProxyCmp({inputs: ['disabled', 'divider', 'itemEndStyle', 'itemStartStyle', 'label', 'noPadding', 'role', 'selectable', 'selected', 'size', 'textWrap']})
@Component({ selector: 'materials-list-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'divider', 'itemEndStyle', 'itemStartStyle', 'label', 'noPadding', 'role', 'selectable', 'selected', 'size', 'textWrap'] })
export class MaterialsListItem {
  itemSelected!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemSelected']);
  }
}

export declare interface MaterialsListItemCheckbox extends Components.MaterialsListItemCheckbox {}
@ProxyCmp({inputs: ['checked', 'color', 'disabled', 'itemEndStyle', 'itemStartStyle', 'label', 'noPadding', 'size', 'textWrap', 'value']})
@Component({ selector: 'materials-list-item-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'itemEndStyle', 'itemStartStyle', 'label', 'noPadding', 'size', 'textWrap', 'value'] })
export class MaterialsListItemCheckbox {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}

export declare interface MaterialsMenu extends Components.MaterialsMenu {}
@ProxyCmp({inputs: ['maxHeight', 'noPadding'], 'methods': ['setPosition', 'setAnchorMargin', 'isOpen', 'open', 'close']})
@Component({ selector: 'materials-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['maxHeight', 'noPadding'] })
export class MaterialsMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsMultipleSelect extends Components.MaterialsMultipleSelect {}
@ProxyCmp({inputs: ['dense', 'dialogTitle', 'label', 'maxElementsColumn', 'options', 'trailingIcon', 'value']})
@Component({ selector: 'materials-multiple-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['dense', 'dialogTitle', 'label', 'maxElementsColumn', 'options', 'trailingIcon', 'value'] })
export class MaterialsMultipleSelect {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}

export declare interface MaterialsRadio extends Components.MaterialsRadio {}
@ProxyCmp({inputs: ['alignEnd', 'checked', 'disabled', 'label', 'name', 'noPadding', 'required', 'value']})
@Component({ selector: 'materials-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignEnd', 'checked', 'disabled', 'label', 'name', 'noPadding', 'required', 'value'] })
export class MaterialsRadio {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}

export declare interface MaterialsRadioGroup extends Components.MaterialsRadioGroup {}
@ProxyCmp({inputs: ['label', 'linebreak', 'name', 'value']})
@Component({ selector: 'materials-radio-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'linebreak', 'name', 'value'] })
export class MaterialsRadioGroup {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}

export declare interface MaterialsSelect extends Components.MaterialsSelect {}
@ProxyCmp({inputs: ['box', 'customValidation', 'defaultEmpty', 'dense', 'disabled', 'helperText', 'label', 'leadingIcon', 'name', 'options', 'outlined', 'required', 'value', 'width'], 'methods': ['isValid', 'forceValidation']})
@Component({ selector: 'materials-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['box', 'customValidation', 'defaultEmpty', 'dense', 'disabled', 'helperText', 'label', 'leadingIcon', 'name', 'options', 'outlined', 'required', 'value', 'width'] })
export class MaterialsSelect {
  select!: EventEmitter<CustomEvent>;
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['select', 'change']);
  }
}

export declare interface MaterialsSnackbar extends Components.MaterialsSnackbar {}
@ProxyCmp({inputs: ['actionHandler', 'actionText', 'dismissButton', 'label', 'leading', 'stacked', 'timeout']})
@Component({ selector: 'materials-snackbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['actionHandler', 'actionText', 'dismissButton', 'label', 'leading', 'stacked', 'timeout'] })
export class MaterialsSnackbar {
  close!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}

export declare interface MaterialsSnackbarController extends Components.MaterialsSnackbarController {}
@ProxyCmp({'methods': ['create', 'pushToQueue', 'sliceQueue']})
@Component({ selector: 'materials-snackbar-controller', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class MaterialsSnackbarController {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsStep extends Components.MaterialsStep {}
@ProxyCmp({inputs: ['active', 'confirmationText', 'editable', 'index', 'isLast', 'noPadding', 'optional', 'showButtons', 'status', 'stepTitle', 'summary'], 'methods': ['adjustHeight']})
@Component({ selector: 'materials-step', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['active', 'confirmationText', 'editable', 'index', 'isLast', 'noPadding', 'optional', 'showButtons', 'status', 'stepTitle', 'summary'] })
export class MaterialsStep {
  stepClick!: EventEmitter<CustomEvent>;
  previousStep!: EventEmitter<CustomEvent>;
  submitStep!: EventEmitter<CustomEvent>;
  submitStepper!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stepClick', 'previousStep', 'submitStep', 'submitStepper']);
  }
}

export declare interface MaterialsStepper extends Components.MaterialsStepper {}
@ProxyCmp({inputs: ['activeStep', 'inactiveSteps', 'showButtons'], 'methods': ['calcIndexes', 'openStep', 'nextStep', 'previousStep', 'adjustHeight']})
@Component({ selector: 'materials-stepper', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activeStep', 'inactiveSteps', 'showButtons'] })
export class MaterialsStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsSubtitle extends Components.MaterialsSubtitle {}
@ProxyCmp({inputs: ['level']})
@Component({ selector: 'materials-subtitle', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['level'] })
export class MaterialsSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsSwitch extends Components.MaterialsSwitch {}
@ProxyCmp({inputs: ['checked', 'disabled', 'label']})
@Component({ selector: 'materials-switch', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'label'] })
export class MaterialsSwitch {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}

export declare interface MaterialsTab extends Components.MaterialsTab {}
@ProxyCmp({inputs: ['active', 'icon', 'label']})
@Component({ selector: 'materials-tab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['active', 'icon', 'label'] })
export class MaterialsTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsTabs extends Components.MaterialsTabs {}
@ProxyCmp({inputs: ['activeTab', 'color', 'indicatorType', 'shrinkTabs']})
@Component({ selector: 'materials-tabs', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activeTab', 'color', 'indicatorType', 'shrinkTabs'] })
export class MaterialsTabs {
  tabChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabChange']);
  }
}

export declare interface MaterialsTextArea extends Components.MaterialsTextArea {}
@ProxyCmp({inputs: ['cols', 'disabled', 'fullwidth', 'label', 'outlined', 'required', 'rows', 'value']})
@Component({ selector: 'materials-text-area', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['cols', 'disabled', 'fullwidth', 'label', 'outlined', 'required', 'rows', 'value'] })
export class MaterialsTextArea {
  input!: EventEmitter<CustomEvent>;
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['input', 'change']);
  }
}

export declare interface MaterialsTextField extends Components.MaterialsTextField {}
@ProxyCmp({inputs: ['customValidation', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'hideNativeClear', 'label', 'leadingIcon', 'leadingIconTitle', 'maxlength', 'name', 'outlined', 'overflow', 'pattern', 'persistent', 'readonly', 'required', 'trailingIcon', 'trailingIconTitle', 'type', 'value', 'width'], 'methods': ['isValid', 'forceValidation']})
@Component({ selector: 'materials-text-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['customValidation', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'hideNativeClear', 'label', 'leadingIcon', 'leadingIconTitle', 'maxlength', 'name', 'outlined', 'overflow', 'pattern', 'persistent', 'readonly', 'required', 'trailingIcon', 'trailingIconTitle', 'type', 'value', 'width'] })
export class MaterialsTextField {
  input!: EventEmitter<CustomEvent>;
  change!: EventEmitter<CustomEvent>;
  trailingIconPress!: EventEmitter<CustomEvent>;
  leadingIconPress!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['input', 'change', 'trailingIconPress', 'leadingIconPress']);
  }
}

export declare interface MaterialsTimeField extends Components.MaterialsTimeField {}
@ProxyCmp({inputs: ['customValidation', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'label', 'leadingIcon', 'outlined', 'persistent', 'required', 'timepicker', 'timepickerFormat', 'timepickerStep', 'value', 'width'], 'methods': ['isValid', 'forceValidation']})
@Component({ selector: 'materials-time-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['customValidation', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'label', 'leadingIcon', 'outlined', 'persistent', 'required', 'timepicker', 'timepickerFormat', 'timepickerStep', 'value', 'width'] })
export class MaterialsTimeField {
  input!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['input']);
  }
}

export declare interface MaterialsTimepicker extends Components.MaterialsTimepicker {}
@ProxyCmp({inputs: ['clock24', 'step', 'timeSelected']})
@Component({ selector: 'materials-timepicker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clock24', 'step', 'timeSelected'] })
export class MaterialsTimepicker {
  timeSelectedChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['timeSelectedChange']);
  }
}

export declare interface MaterialsTopAppBar extends Components.MaterialsTopAppBar {}
@ProxyCmp({inputs: ['barTitle', 'dense', 'fixed', 'prominent', 'short']})
@Component({ selector: 'materials-top-app-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['barTitle', 'dense', 'fixed', 'prominent', 'short'] })
export class MaterialsTopAppBar {
  toggleMenu!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleMenu']);
  }
}

export declare interface MaterialsTopAppBarAction extends Components.MaterialsTopAppBarAction {}
@ProxyCmp({inputs: ['icon']})
@Component({ selector: 'materials-top-app-bar-action', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['icon'] })
export class MaterialsTopAppBarAction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
