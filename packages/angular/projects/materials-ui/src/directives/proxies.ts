/* tslint:disable */
/* auto-generated angular directive proxies */
import { Component, ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';

function proxyInputs(Cmp: any, inputs: string[]) {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.el[item] = val; },
    });
  });
}

function proxyMethods(Cmp: any, methods: string[]) {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.el.componentOnReady().then((el: any) => el[methodName].apply(el, args));
    };
  });
}

function proxyOutputs(instance: any, el: any, events: string[]) {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

import { Components } from '@materials-ui/core'

export declare interface MaterialsAlertController extends Components.MaterialsAlertController {}
@Component({ selector: 'materials-alert-controller', changeDetection: 0, template: '<ng-content></ng-content>' })
export class MaterialsAlertController {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(MaterialsAlertController, ['create']);

export declare interface MaterialsAutocomplete extends Components.MaterialsAutocomplete {}
@Component({ selector: 'materials-autocomplete', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['autocomplete', 'dense', 'label', 'maxSuggestions', 'trailingIcon', 'value'] })
export class MaterialsAutocomplete {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}
proxyInputs(MaterialsAutocomplete, ['autocomplete', 'dense', 'label', 'maxSuggestions', 'trailingIcon', 'value']);

export declare interface MaterialsBadge extends Components.MaterialsBadge {}
@Component({ selector: 'materials-badge', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'inkColor', 'label'] })
export class MaterialsBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsBadge, ['color', 'inkColor', 'label']);

export declare interface MaterialsButton extends Components.MaterialsButton {}
@Component({ selector: 'materials-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['block', 'color', 'dense', 'disabled', 'icon', 'outlined', 'raised', 'type', 'unelevated'] })
export class MaterialsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsButton, ['block', 'color', 'dense', 'disabled', 'icon', 'outlined', 'raised', 'type', 'unelevated']);

export declare interface MaterialsCard extends Components.MaterialsCard {}
@Component({ selector: 'materials-card', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['cardTitle', 'elevation', 'height', 'maxHeight', 'onAction', 'padding', 'width'] })
export class MaterialsCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsCard, ['cardTitle', 'elevation', 'height', 'maxHeight', 'onAction', 'padding', 'width']);

export declare interface MaterialsCardAction extends Components.MaterialsCardAction {}
@Component({ selector: 'materials-card-action', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['fullBleed', 'icon', 'label', 'onAction'] })
export class MaterialsCardAction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsCardAction, ['fullBleed', 'icon', 'label', 'onAction']);

export declare interface MaterialsCardContent extends Components.MaterialsCardContent {}
@Component({ selector: 'materials-card-content', changeDetection: 0, template: '<ng-content></ng-content>' })
export class MaterialsCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsCheckbox extends Components.MaterialsCheckbox {}
@Component({ selector: 'materials-checkbox', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['alignLabel', 'checked', 'color', 'disabled', 'indeterminate', 'label', 'name', 'value'] })
export class MaterialsCheckbox {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}
proxyInputs(MaterialsCheckbox, ['alignLabel', 'checked', 'color', 'disabled', 'indeterminate', 'label', 'name', 'value']);

export declare interface MaterialsChip extends Components.MaterialsChip {}
@Component({ selector: 'materials-chip', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'inkColor'] })
export class MaterialsChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsChip, ['color', 'inkColor']);

export declare interface MaterialsDatatable extends Components.MaterialsDatatable {}
@Component({ selector: 'materials-datatable', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'dense', 'oddEvenStyle'] })
export class MaterialsDatatable {
  sort!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sort']);
  }
}
proxyInputs(MaterialsDatatable, ['color', 'dense', 'oddEvenStyle']);

export declare interface MaterialsDatatableAction extends Components.MaterialsDatatableAction {}
@Component({ selector: 'materials-datatable-action', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'display', 'icon', 'label'] })
export class MaterialsDatatableAction {
  press!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['press']);
  }
}
proxyMethods(MaterialsDatatableAction, ['TriggerPress']);
proxyInputs(MaterialsDatatableAction, ['color', 'display', 'icon', 'label']);

export declare interface MaterialsDatatableBody extends Components.MaterialsDatatableBody {}
@Component({ selector: 'materials-datatable-body', changeDetection: 0, template: '<ng-content></ng-content>' })
export class MaterialsDatatableBody {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MaterialsDatatableBodyCell extends Components.MaterialsDatatableBodyCell {}
@Component({ selector: 'materials-datatable-body-cell', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['align', 'width'] })
export class MaterialsDatatableBodyCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsDatatableBodyCell, ['align', 'width']);

export declare interface MaterialsDatatableBodyRow extends Components.MaterialsDatatableBodyRow {}
@Component({ selector: 'materials-datatable-body-row', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['dense', 'expendable', 'expended', 'selectable', 'selected'] })
export class MaterialsDatatableBodyRow {
  selectRow!: EventEmitter<CustomEvent>;
  expand!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectRow', 'expand']);
  }
}
proxyInputs(MaterialsDatatableBodyRow, ['dense', 'expendable', 'expended', 'selectable', 'selected']);

export declare interface MaterialsDatatableFooter extends Components.MaterialsDatatableFooter {}
@Component({ selector: 'materials-datatable-footer', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color'] })
export class MaterialsDatatableFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsDatatableFooter, ['color']);

export declare interface MaterialsDatatableHeader extends Components.MaterialsDatatableHeader {}
@Component({ selector: 'materials-datatable-header', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'selectable', 'selected'] })
export class MaterialsDatatableHeader {
  selectAll!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectAll']);
  }
}
proxyInputs(MaterialsDatatableHeader, ['color', 'selectable', 'selected']);

export declare interface MaterialsDatatableHeaderColumn extends Components.MaterialsDatatableHeaderColumn {}
@Component({ selector: 'materials-datatable-header-column', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['align', 'description', 'label', 'sortable', 'sorted', 'value', 'width'] })
export class MaterialsDatatableHeaderColumn {
  sort!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sort']);
  }
}
proxyInputs(MaterialsDatatableHeaderColumn, ['align', 'description', 'label', 'sortable', 'sorted', 'value', 'width']);

export declare interface MaterialsDatatablePagination extends Components.MaterialsDatatablePagination {}
@Component({ selector: 'materials-datatable-pagination', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['currentPage', 'first', 'last', 'size', 'total'] })
export class MaterialsDatatablePagination {
  nextPage!: EventEmitter<CustomEvent>;
  previousPage!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['nextPage', 'previousPage']);
  }
}
proxyInputs(MaterialsDatatablePagination, ['currentPage', 'first', 'last', 'size', 'total']);

export declare interface MaterialsDateField extends Components.MaterialsDateField {}
@Component({ selector: 'materials-date-field', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['customValidation', 'datepicker', 'datepickerMonthPicker', 'datepickerTodayPicker', 'datepickerYearPicker', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'label', 'leadingIcon', 'outlined', 'persistent', 'required', 'value', 'width'] })
export class MaterialsDateField {
  input!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['input']);
  }
}
proxyMethods(MaterialsDateField, ['isValid', 'forceValidation']);
proxyInputs(MaterialsDateField, ['customValidation', 'datepicker', 'datepickerMonthPicker', 'datepickerTodayPicker', 'datepickerYearPicker', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'label', 'leadingIcon', 'outlined', 'persistent', 'required', 'value', 'width']);

export declare interface MaterialsDatepicker extends Components.MaterialsDatepicker {}
@Component({ selector: 'materials-datepicker', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['dateRange', 'dateSelected', 'monthPicker', 'nullable', 'todayPicker', 'yearPicker'] })
export class MaterialsDatepicker {
  dateSelectedUpdate!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dateSelectedUpdate']);
  }
}
proxyInputs(MaterialsDatepicker, ['dateRange', 'dateSelected', 'monthPicker', 'nullable', 'todayPicker', 'yearPicker']);

export declare interface MaterialsDialog extends Components.MaterialsDialog {}
@Component({ selector: 'materials-dialog', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['acceptButton', 'actions', 'body', 'cancelButton', 'closeButton', 'dialogTitle', 'disableAcceptButton', 'height', 'items', 'scrollable', 'width'] })
export class MaterialsDialog {
  accept!: EventEmitter<CustomEvent>;
  cancel!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['accept', 'cancel']);
  }
}
proxyMethods(MaterialsDialog, ['show', 'toggle', 'isOpen', 'open', 'close']);
proxyInputs(MaterialsDialog, ['acceptButton', 'actions', 'body', 'cancelButton', 'closeButton', 'dialogTitle', 'disableAcceptButton', 'height', 'items', 'scrollable', 'width']);

export declare interface MaterialsDialogController extends Components.MaterialsDialogController {}
@Component({ selector: 'materials-dialog-controller', changeDetection: 0, template: '<ng-content></ng-content>' })
export class MaterialsDialogController {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(MaterialsDialogController, ['create']);

export declare interface MaterialsDrawer extends Components.MaterialsDrawer {}
@Component({ selector: 'materials-drawer', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['dismissible', 'modal'] })
export class MaterialsDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(MaterialsDrawer, ['toggle', 'open', 'close', 'renderHtml']);
proxyInputs(MaterialsDrawer, ['dismissible', 'modal']);

export declare interface MaterialsDrawerListItem extends Components.MaterialsDrawerListItem {}
@Component({ selector: 'materials-drawer-list-item', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['activated', 'icon', 'label', 'targetUrl'] })
export class MaterialsDrawerListItem {
  press!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['press']);
  }
}
proxyMethods(MaterialsDrawerListItem, ['TriggerPress']);
proxyInputs(MaterialsDrawerListItem, ['activated', 'icon', 'label', 'targetUrl']);

export declare interface MaterialsDrawerWithTopAppBar extends Components.MaterialsDrawerWithTopAppBar {}
@Component({ selector: 'materials-drawer-with-top-app-bar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['appBarDense', 'appBarTitle', 'appBarType', 'drawerType', 'open'] })
export class MaterialsDrawerWithTopAppBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsDrawerWithTopAppBar, ['appBarDense', 'appBarTitle', 'appBarType', 'drawerType', 'open']);

export declare interface MaterialsDropdown extends Components.MaterialsDropdown {}
@Component({ selector: 'materials-dropdown', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['buttonType', 'color', 'icon', 'iconHelper', 'iconOnly', 'menuPosition', 'menuTitle'] })
export class MaterialsDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(MaterialsDropdown, ['openMenu', 'closeMenu', 'isOpen']);
proxyInputs(MaterialsDropdown, ['buttonType', 'color', 'icon', 'iconHelper', 'iconOnly', 'menuPosition', 'menuTitle']);

export declare interface MaterialsExpansionPanel extends Components.MaterialsExpansionPanel {}
@Component({ selector: 'materials-expansion-panel', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['collapsed', 'elevation', 'noPadding', 'type'] })
export class MaterialsExpansionPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsExpansionPanel, ['collapsed', 'elevation', 'noPadding', 'type']);

export declare interface MaterialsFab extends Components.MaterialsFab {}
@Component({ selector: 'materials-fab', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['hidden', 'icon', 'label', 'size'] })
export class MaterialsFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsFab, ['hidden', 'icon', 'label', 'size']);

export declare interface MaterialsFormField extends Components.MaterialsFormField {}
@Component({ selector: 'materials-form-field', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['alignEnd', 'label'] })
export class MaterialsFormField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsFormField, ['alignEnd', 'label']);

export declare interface MaterialsHeadline extends Components.MaterialsHeadline {}
@Component({ selector: 'materials-headline', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['level'] })
export class MaterialsHeadline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsHeadline, ['level']);

export declare interface MaterialsIcon extends Components.MaterialsIcon {}
@Component({ selector: 'materials-icon', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'dark', 'disabled', 'light', 'name', 'size'] })
export class MaterialsIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsIcon, ['color', 'dark', 'disabled', 'light', 'name', 'size']);

export declare interface MaterialsIconButton extends Components.MaterialsIconButton {}
@Component({ selector: 'materials-icon-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['dense', 'disabled', 'icon', 'iconOff', 'iconOn', 'img', 'imgOff', 'label', 'labelOff', 'labelOn', 'large', 'pressed', 'svg', 'svgOff'] })
export class MaterialsIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsIconButton, ['dense', 'disabled', 'icon', 'iconOff', 'iconOn', 'img', 'imgOff', 'label', 'labelOff', 'labelOn', 'large', 'pressed', 'svg', 'svgOff']);

export declare interface MaterialsLinearProgress extends Components.MaterialsLinearProgress {}
@Component({ selector: 'materials-linear-progress', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['backgroundColor', 'indeterminate', 'opened', 'timeout'] })
export class MaterialsLinearProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(MaterialsLinearProgress, ['show', 'close', 'open']);
proxyInputs(MaterialsLinearProgress, ['backgroundColor', 'indeterminate', 'opened', 'timeout']);

export declare interface MaterialsList extends Components.MaterialsList {}
@Component({ selector: 'materials-list', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['dense', 'multiple', 'selectable', 'size'] })
export class MaterialsList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsList, ['dense', 'multiple', 'selectable', 'size']);

export declare interface MaterialsListItem extends Components.MaterialsListItem {}
@Component({ selector: 'materials-list-item', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'divider', 'itemEndStyle', 'itemStartStyle', 'label', 'noPadding', 'role', 'selectable', 'selected', 'size', 'textWrap'] })
export class MaterialsListItem {
  itemSelected!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemSelected']);
  }
}
proxyInputs(MaterialsListItem, ['disabled', 'divider', 'itemEndStyle', 'itemStartStyle', 'label', 'noPadding', 'role', 'selectable', 'selected', 'size', 'textWrap']);

export declare interface MaterialsListItemCheckbox extends Components.MaterialsListItemCheckbox {}
@Component({ selector: 'materials-list-item-checkbox', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'itemEndStyle', 'itemStartStyle', 'label', 'noPadding', 'size', 'textWrap', 'value'] })
export class MaterialsListItemCheckbox {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}
proxyInputs(MaterialsListItemCheckbox, ['checked', 'color', 'disabled', 'itemEndStyle', 'itemStartStyle', 'label', 'noPadding', 'size', 'textWrap', 'value']);

export declare interface MaterialsMenu extends Components.MaterialsMenu {}
@Component({ selector: 'materials-menu', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['maxHeight', 'noPadding'] })
export class MaterialsMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(MaterialsMenu, ['setPosition', 'setAnchorMargin', 'isOpen', 'open', 'close']);
proxyInputs(MaterialsMenu, ['maxHeight', 'noPadding']);

export declare interface MaterialsMultipleSelect extends Components.MaterialsMultipleSelect {}
@Component({ selector: 'materials-multiple-select', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['dense', 'dialogTitle', 'label', 'maxElementsColumn', 'options', 'trailingIcon', 'value'] })
export class MaterialsMultipleSelect {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}
proxyInputs(MaterialsMultipleSelect, ['dense', 'dialogTitle', 'label', 'maxElementsColumn', 'options', 'trailingIcon', 'value']);

export declare interface MaterialsRadio extends Components.MaterialsRadio {}
@Component({ selector: 'materials-radio', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['alignEnd', 'checked', 'disabled', 'label', 'name', 'noPadding', 'required', 'value'] })
export class MaterialsRadio {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}
proxyInputs(MaterialsRadio, ['alignEnd', 'checked', 'disabled', 'label', 'name', 'noPadding', 'required', 'value']);

export declare interface MaterialsRadioGroup extends Components.MaterialsRadioGroup {}
@Component({ selector: 'materials-radio-group', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['label', 'linebreak', 'name', 'value'] })
export class MaterialsRadioGroup {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}
proxyInputs(MaterialsRadioGroup, ['label', 'linebreak', 'name', 'value']);

export declare interface MaterialsSelect extends Components.MaterialsSelect {}
@Component({ selector: 'materials-select', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['box', 'customValidation', 'defaultEmpty', 'dense', 'disabled', 'helperText', 'label', 'leadingIcon', 'name', 'options', 'outlined', 'required', 'value', 'width'] })
export class MaterialsSelect {
  select!: EventEmitter<CustomEvent>;
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['select', 'change']);
  }
}
proxyMethods(MaterialsSelect, ['isValid', 'forceValidation']);
proxyInputs(MaterialsSelect, ['box', 'customValidation', 'defaultEmpty', 'dense', 'disabled', 'helperText', 'label', 'leadingIcon', 'name', 'options', 'outlined', 'required', 'value', 'width']);

export declare interface MaterialsSnackbar extends Components.MaterialsSnackbar {}
@Component({ selector: 'materials-snackbar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['actionHandler', 'actionText', 'dismissButton', 'label', 'leading', 'stacked', 'timeout'] })
export class MaterialsSnackbar {
  close!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}
proxyInputs(MaterialsSnackbar, ['actionHandler', 'actionText', 'dismissButton', 'label', 'leading', 'stacked', 'timeout']);

export declare interface MaterialsSnackbarController extends Components.MaterialsSnackbarController {}
@Component({ selector: 'materials-snackbar-controller', changeDetection: 0, template: '<ng-content></ng-content>' })
export class MaterialsSnackbarController {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(MaterialsSnackbarController, ['create', 'pushToQueue', 'sliceQueue']);

export declare interface MaterialsStep extends Components.MaterialsStep {}
@Component({ selector: 'materials-step', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['active', 'confirmationText', 'editable', 'index', 'isLast', 'noPadding', 'optional', 'showButtons', 'status', 'stepTitle', 'summary'] })
export class MaterialsStep {
  stepClick!: EventEmitter<CustomEvent>;
  previousStep!: EventEmitter<CustomEvent>;
  submitStep!: EventEmitter<CustomEvent>;
  submitStepper!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stepClick', 'previousStep', 'submitStep', 'submitStepper']);
  }
}
proxyMethods(MaterialsStep, ['adjustHeight']);
proxyInputs(MaterialsStep, ['active', 'confirmationText', 'editable', 'index', 'isLast', 'noPadding', 'optional', 'showButtons', 'status', 'stepTitle', 'summary']);

export declare interface MaterialsStepper extends Components.MaterialsStepper {}
@Component({ selector: 'materials-stepper', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['activeStep', 'inactiveSteps', 'showButtons'] })
export class MaterialsStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(MaterialsStepper, ['calcIndexes', 'openStep', 'nextStep', 'previousStep', 'adjustHeight']);
proxyInputs(MaterialsStepper, ['activeStep', 'inactiveSteps', 'showButtons']);

export declare interface MaterialsSubtitle extends Components.MaterialsSubtitle {}
@Component({ selector: 'materials-subtitle', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['level'] })
export class MaterialsSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsSubtitle, ['level']);

export declare interface MaterialsSwitch extends Components.MaterialsSwitch {}
@Component({ selector: 'materials-switch', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'label'] })
export class MaterialsSwitch {
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['change']);
  }
}
proxyInputs(MaterialsSwitch, ['checked', 'disabled', 'label']);

export declare interface MaterialsTab extends Components.MaterialsTab {}
@Component({ selector: 'materials-tab', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['active', 'badgeColor', 'badgeInkColor', 'badgeLabel', 'icon', 'indicatorType', 'label', 'minWidth'] })
export class MaterialsTab {
  tabPropChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabPropChanged']);
  }
}
proxyMethods(MaterialsTab, ['renderHtml']);
proxyInputs(MaterialsTab, ['active', 'badgeColor', 'badgeInkColor', 'badgeLabel', 'icon', 'indicatorType', 'label', 'minWidth']);

export declare interface MaterialsTabs extends Components.MaterialsTabs {}
@Component({ selector: 'materials-tabs', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['activeTab', 'color', 'indicatorType', 'shrinkTabs'] })
export class MaterialsTabs {
  tabChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabChange']);
  }
}
proxyInputs(MaterialsTabs, ['activeTab', 'color', 'indicatorType', 'shrinkTabs']);

export declare interface MaterialsTextArea extends Components.MaterialsTextArea {}
@Component({ selector: 'materials-text-area', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['cols', 'disabled', 'fullwidth', 'label', 'outlined', 'required', 'rows', 'value'] })
export class MaterialsTextArea {
  input!: EventEmitter<CustomEvent>;
  change!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['input', 'change']);
  }
}
proxyInputs(MaterialsTextArea, ['cols', 'disabled', 'fullwidth', 'label', 'outlined', 'required', 'rows', 'value']);

export declare interface MaterialsTextField extends Components.MaterialsTextField {}
@Component({ selector: 'materials-text-field', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['customValidation', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'hideNativeClear', 'label', 'leadingIcon', 'leadingIconTitle', 'name', 'outlined', 'overflow', 'pattern', 'persistent', 'readonly', 'required', 'trailingIcon', 'trailingIconTitle', 'type', 'value', 'width'] })
export class MaterialsTextField {
  input!: EventEmitter<CustomEvent>;
  change!: EventEmitter<CustomEvent>;
  trailingIconPress!: EventEmitter<CustomEvent>;
  leadingIconPress!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['input', 'change', 'trailingIconPress', 'leadingIconPress']);
  }
}
proxyMethods(MaterialsTextField, ['isValid', 'forceValidation']);
proxyInputs(MaterialsTextField, ['customValidation', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'hideNativeClear', 'label', 'leadingIcon', 'leadingIconTitle', 'name', 'outlined', 'overflow', 'pattern', 'persistent', 'readonly', 'required', 'trailingIcon', 'trailingIconTitle', 'type', 'value', 'width']);

export declare interface MaterialsTimeField extends Components.MaterialsTimeField {}
@Component({ selector: 'materials-time-field', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['customValidation', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'label', 'leadingIcon', 'outlined', 'persistent', 'required', 'timepicker', 'timepickerFormat', 'timepickerStep', 'value', 'width'] })
export class MaterialsTimeField {
  input!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['input']);
  }
}
proxyMethods(MaterialsTimeField, ['isValid', 'forceValidation']);
proxyInputs(MaterialsTimeField, ['customValidation', 'dense', 'disabled', 'focused', 'fullwidth', 'helperText', 'label', 'leadingIcon', 'outlined', 'persistent', 'required', 'timepicker', 'timepickerFormat', 'timepickerStep', 'value', 'width']);

export declare interface MaterialsTimepicker extends Components.MaterialsTimepicker {}
@Component({ selector: 'materials-timepicker', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['clock24', 'step', 'timeSelected'] })
export class MaterialsTimepicker {
  timeSelectedChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['timeSelectedChange']);
  }
}
proxyInputs(MaterialsTimepicker, ['clock24', 'step', 'timeSelected']);

export declare interface MaterialsTopAppBar extends Components.MaterialsTopAppBar {}
@Component({ selector: 'materials-top-app-bar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['barTitle', 'dense', 'fixed', 'prominent', 'short'] })
export class MaterialsTopAppBar {
  toggleMenu!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleMenu']);
  }
}
proxyInputs(MaterialsTopAppBar, ['barTitle', 'dense', 'fixed', 'prominent', 'short']);

export declare interface MaterialsTopAppBarAction extends Components.MaterialsTopAppBarAction {}
@Component({ selector: 'materials-top-app-bar-action', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['icon'] })
export class MaterialsTopAppBarAction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(MaterialsTopAppBarAction, ['icon']);
