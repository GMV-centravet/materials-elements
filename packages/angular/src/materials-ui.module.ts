import { NumericValueAccessor } from './directives/number-value-accessor';
// tslint:disable-next-line: max-line-length
import { MaterialsAlertController, MaterialsAutocomplete, MaterialsButton, MaterialsCard, MaterialsCardAction, MaterialsCardContent, MaterialsCheckbox, MaterialsChip, MaterialsDatatable, MaterialsDatatableAction, MaterialsDatatableBody, MaterialsDatatableBodyCell, MaterialsDatatableBodyRow, MaterialsDatatableFooter, MaterialsDatatableHeader, MaterialsDatatableHeaderColumn, MaterialsDatatablePagination, MaterialsDateField, MaterialsDatepicker, MaterialsDialog, MaterialsDialogController, MaterialsDrawer, MaterialsDrawerListItem, MaterialsDrawerWithTopAppBar, MaterialsDropdown, MaterialsExpansionPanel, MaterialsFab, MaterialsFormField, MaterialsHeadline, MaterialsIcon, MaterialsIconButton, MaterialsLinearProgress, MaterialsList, MaterialsListItem, MaterialsListItemCheckbox, MaterialsMenu, MaterialsMultipleSelect, MaterialsRadio, MaterialsRadioGroup, MaterialsSelect, MaterialsSnackbar, MaterialsSnackbarController, MaterialsStep, MaterialsStepper, MaterialsSubtitle, MaterialsSwitch, MaterialsTab, MaterialsTabs, MaterialsTextArea, MaterialsTextField, MaterialsTimeField, MaterialsTimepicker, MaterialsTopAppBar, MaterialsTopAppBarAction } from './directives/proxies';

import { CommonModule } from '@angular/common';

import { TextValueAccessor } from './directives/text-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NgModule } from '@angular/core';

const DECLARATIONS = [
  // proxies
  MaterialsAlertController,
  MaterialsAutocomplete,
  MaterialsButton,
  MaterialsCard,
  MaterialsCardAction,
  MaterialsCardContent,
  MaterialsCheckbox,
  MaterialsChip,
  MaterialsDatatable,
  MaterialsDatatableAction,
  MaterialsDatatableBody,
  MaterialsDatatableBodyCell,
  MaterialsDatatableBodyRow,
  MaterialsDatatableFooter,
  MaterialsDatatableHeader,
  MaterialsDatatableHeaderColumn,
  MaterialsDatatablePagination,
  MaterialsDateField,
  MaterialsDatepicker,
  MaterialsDialog,
  MaterialsDialogController,
  MaterialsDrawer,
  MaterialsDrawerListItem,
  MaterialsDrawerWithTopAppBar,
  MaterialsDropdown,
  MaterialsExpansionPanel,
  MaterialsFab,
  MaterialsFormField,
  MaterialsHeadline,
  MaterialsIcon,
  MaterialsIconButton,
  MaterialsLinearProgress,
  MaterialsList,
  MaterialsListItem,
  MaterialsListItemCheckbox,
  MaterialsMenu,
  MaterialsMultipleSelect,
  MaterialsRadio,
  MaterialsRadioGroup,
  MaterialsSelect,
  MaterialsSnackbar,
  MaterialsSnackbarController,
  MaterialsStep,
  MaterialsStepper,
  MaterialsSubtitle,
  MaterialsSwitch,
  MaterialsTab,
  MaterialsTabs,
  MaterialsTextArea,
  MaterialsTextField,
  MaterialsTimeField,
  MaterialsTimepicker,
  MaterialsTopAppBar,
  MaterialsTopAppBarAction,

  // ngModel accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,

]

@NgModule({
  declarations: [
    DECLARATIONS
  ],
  imports: [CommonModule],
  exports: [DECLARATIONS]
})
export class MaterialsUIModule {

}
