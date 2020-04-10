import { Component, h, Listen, State } from '@stencil/core';
import { Router } from '@vaadin/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @State() smallScreen: boolean;

  componentWillLoad() {
    this.smallScreen = window.innerWidth <= 768;
  }

  componentDidLoad() {
    const router = new Router(document.getElementById('outlet'));
    router.setRoutes([
      { path: '/home', component: 'app-home' },
      { path: '/intro', component: 'app-introduction-page', },
      { path: '/components/autocomplete', component: 'app-autocomplete-tabs' },
      { path: '/components/autocomplete/demo', component: 'app-autocomplete-tabs' },
      { path: '/components/autocomplete/api', component: 'app-autocomplete-tabs' },
      { path: '/components/button', component: 'app-button-tabs', },
      { path: '/components/button/demo', component: 'app-button-tabs', },
      { path: '/components/button/api', component: 'app-button-tabs', },
      { path: '/components/card', component: 'app-card-tabs' },
      { path: '/components/card/demo', component: 'app-card-tabs' },
      { path: '/components/card/api', component: 'app-card-tabs' },
      { path: '/components/card-content', component: 'app-card-content-tabs' },
      { path: '/components/card-content/demo', component: 'app-card-content-tabs' },
      { path: '/components/card-content/api', component: 'app-card-content-tabs' },
      { path: '/components/checkbox', component: 'app-checkbox-tabs' },
      { path: '/components/checkbox/demo', component: 'app-checkbox-tabs' },
      { path: '/components/checkbox/api', component: 'app-checkbox-tabs' },
      { path: '/components/chips', component: 'app-chips-tabs' },
      { path: '/components/chips/demo', component: 'app-chips-tabs' },
      { path: '/components/chips/api', component: 'app-chips-tabs' },
      { path: '/components/datatable', component: 'app-datatable-tabs' },
      { path: '/components/datatable/demo', component: 'app-datatable-tabs' },
      { path: '/components/datatable/api', component: 'app-datatable-tabs' },
      { path: '/components/date-field', component: 'app-date-field-tabs' },
      { path: '/components/date-field/demo', component: 'app-date-field-tabs' },
      { path: '/components/date-field/api', component: 'app-date-field-tabs' },
      { path: '/components/datepicker', component: 'app-datepicker-tabs' },
      { path: '/components/datepicker/demo', component: 'app-datepicker-tabs' },
      { path: '/components/datepicker/api', component: 'app-datepicker-tabs' },
      { path: '/components/dialog', component: 'app-dialog-tabs' },
      { path: '/components/dialog/demo', component: 'app-dialog-tabs' },
      { path: '/components/dialog/api', component: 'app-dialog-tabs' },
      { path: '/components/drawer', component: 'app-drawer-tabs' },
      { path: '/components/drawer/demo', component: 'app-drawer-tabs' },
      { path: '/components/drawer/api', component: 'app-drawer-tabs' },
      { path: '/components/drawer-list-item', component: 'app-drawer-list-item-tabs' },
      { path: '/components/drawer-list-item/demo', component: 'app-drawer-list-item-tabs' },
      { path: '/components/drawer-list-item/api', component: 'app-drawer-list-item-tabs' },
      { path: '/components/drawer-with-top-app-bar', component: 'app-drawer-with-top-app-bar-tabs' },
      { path: '/components/drawer-with-top-app-bar/demo', component: 'app-drawer-with-top-app-bar-tabs' },
      { path: '/components/drawer-with-top-app-bar/api', component: 'app-drawer-with-top-app-bar-tabs' },
      { path: '/components/dropdown', component: 'app-dropdown-tabs' },
      { path: '/components/dropdown/demo', component: 'app-dropdown-tabs' },
      { path: '/components/dropdown/api', component: 'app-dropdown-tabs' },
      { path: '/components/expansion-panel', component: 'app-expansion-panel-tabs' },
      { path: '/components/expansion-panel/demo', component: 'app-expansion-panel-tabs' },
      { path: '/components/expansion-panel/api', component: 'app-expansion-panel-tabs' },
      { path: '/components/fab', component: 'app-fab-tabs' },
      { path: '/components/fab/demo', component: 'app-fab-tabs' },
      { path: '/components/fab/api', component: 'app-fab-tabs' },
      { path: '/components/form-field', component: 'app-form-field-tabs' },
      { path: '/components/form-field/demo', component: 'app-form-field-tabs' },
      { path: '/components/form-field/api', component: 'app-form-field-tabs' },
      { path: '/components/icon', component: 'app-icon-tabs' },
      { path: '/components/icon/demo', component: 'app-icon-tabs' },
      { path: '/components/icon/api', component: 'app-icon-tabs' },
      { path: '/components/icon-button', component: 'app-icon-button-tabs' },
      { path: '/components/icon-button/demo', component: 'app-icon-button-tabs' },
      { path: '/components/icon-button/api', component: 'app-icon-button-tabs' },
      { path: '/components/linear-progress', component: 'app-linear-progress-tabs' },
      { path: '/components/linear-progress/demo', component: 'app-linear-progress-tabs' },
      { path: '/components/linear-progress/api', component: 'app-linear-progress-tabs' },
      { path: '/components/list', component: 'app-list-tabs' },
      { path: '/components/list/demo', component: 'app-list-tabs' },
      { path: '/components/list/api', component: 'app-list-tabs' },
      { path: '/components/list-item', component: 'app-list-item-tabs' },
      { path: '/components/list-item/demo', component: 'app-list-item-tabs' },
      { path: '/components/list-item/api', component: 'app-list-item-tabs' },
      { path: '/components/list-item-checkbox', component: 'app-list-item-checkbox-tabs' },
      { path: '/components/list-item-checkbox/demo', component: 'app-list-item-checkbox-tabs' },
      { path: '/components/list-item-checkbox/api', component: 'app-list-item-checkbox-tabs' },
      { path: '/components/menu', component: 'app-menu-tabs' },
      { path: '/components/menu/demo', component: 'app-menu-tabs' },
      { path: '/components/menu/api', component: 'app-menu-tabs' },
      { path: '/components/radio-group', component: 'app-radio-group-tabs' },
      { path: '/components/radio-group/demo', component: 'app-radio-group-tabs' },
      { path: '/components/radio-group/api', component: 'app-radio-group-tabs' },
      { path: '/components/radio', component: 'app-radio-tabs' },
      { path: '/components/radio/demo', component: 'app-radio-tabs' },
      { path: '/components/radio/api', component: 'app-radio-tabs' },
      { path: '/components/select', component: 'app-select-tabs' },
      { path: '/components/select/demo', component: 'app-select-tabs' },
      { path: '/components/select/api', component: 'app-select-tabs' },
      { path: '/components/snackbar', component: 'app-snackbar-tabs' },
      { path: '/components/snackbar/demo', component: 'app-snackbar-tabs' },
      { path: '/components/snackbar/api', component: 'app-snackbar-tabs' },
      { path: '/components/stepper', component: 'app-stepper-tabs' },
      { path: '/components/stepper/demo', component: 'app-stepper-tabs' },
      { path: '/components/stepper/api', component: 'app-stepper-tabs' },
      { path: '/components/switch', component: 'app-switch-tabs' },
      { path: '/components/switch/demo', component: 'app-switch-tabs' },
      { path: '/components/switch/api', component: 'app-switch-tabs' },
      { path: '/components/text-area', component: 'app-text-area-tabs' },
      { path: '/components/text-area/demo', component: 'app-text-area-tabs' },
      { path: '/components/text-area/api', component: 'app-text-area-tabs' },
      { path: '/components/text-field', component: 'app-text-field-tabs' },
      { path: '/components/text-field/demo', component: 'app-text-field-tabs' },
      { path: '/components/text-field/api', component: 'app-text-field-tabs' },
      { path: '/components/time-field', component: 'app-time-field-tabs' },
      { path: '/components/time-field/demo', component: 'app-time-field-tabs' },
      { path: '/components/time-field/api', component: 'app-time-field-tabs' },
      { path: '/components/timepicker', component: 'app-timepicker-tabs' },
      { path: '/components/timepicker/demo', component: 'app-timepicker-tabs' },
      { path: '/components/timepicker/api', component: 'app-timepicker-tabs' },
      { path: '/components/top-app-bar', component: 'app-top-app-bar-tabs' },
      { path: '/components/top-app-bar/demo', component: 'app-top-app-bar-tabs' },
      { path: '/components/top-app-bar/api', component: 'app-top-app-bar-tabs' },
      { path: '/components/tabs', component: 'app-tabs-tabs' },
      { path: '/components/multiple-select', component: 'app-multiple-select-tabs' },
      { path: '/components/multiple-select/demo', component: 'app-multiple-select-tabs' },
      { path: '/components/multiple-select/api', component: 'app-multiple-select-tabs' },
      { path: '/components/top-app-bar-action', component: 'app-top-app-bar-action-tabs' },
      { path: '/components/top-app-bar-action/demo', component: 'app-top-app-bar-action-tabs' },
      { path: '/components/top-app-bar-action/api', component: 'app-top-app-bar-action-tabs' },
      { path: '/components/subtitle', component: 'app-subtitle-tabs' },
      { path: '/components/subtitle/demo', component: 'app-subtitle-tabs' },
      { path: '/components/subtitle/api', component: 'app-subtitle-tabs' },
      { path: '/components/headline', component: 'app-headline-tabs' },
      { path: '/components/headline/demo', component: 'app-headline-tabs' },
      { path: '/components/headline/api', component: 'app-headline-tabs' },
      { path: '/components/card-action', component: 'app-card-action-tabs' },
      { path: '/components/card-action/demo', component: 'app-card-action-tabs' },
      { path: '/components/card-action/api', component: 'app-card-action-tabs' },
      { path: '/components/dialog-controller', component: 'app-dialog-controller-tabs' },
      { path: '/components/dialog-controller/demo', component: 'app-dialog-controller-tabs' },
      { path: '/components/dialog-controller/api', component: 'app-dialog-controller-tabs' },
      { path: '/components/alert-controller', component: 'app-alert-controller-tabs' },
      { path: '/components/alert-controller/demo', component: 'app-alert-controller-tabs' },
      { path: '/components/alert-controller/api', component: 'app-alert-controller-tabs' },
      { path: '/components/badge', component: 'app-badge-tabs' },
      { path: '/components/badge/demo', component: 'app-badge-tabs' },
      { path: '/components/badge/api', component: 'app-badge-tabs' },
      { path: '/components/_docs', component: 'app-_docs-tabs' },
      { path: '/components/_docs/demo', component: 'app-_docs-tabs' },
      { path: '/components/_docs/api', component: 'app-_docs-tabs' },
      /* ROUTE GENERATION NEEDLE */
    ]);
  }

  @Listen('resize', { target: 'window' })
  windowResize() {
    this.smallScreen = window.innerWidth <= 768;
  }

  render() {
    return (
      <materials-drawer-with-top-app-bar open={!this.smallScreen} appBarType="fixed" drawerType='below' appBarTitle="Materials">
        <materials-drawer-list-item label="Introduction" targetUrl="/intro" />
        <materials-drawer-list-item label="Autocomplete" targetUrl="/components/autocomplete" />
        <materials-drawer-list-item label="Buttons" targetUrl="/components/button" />
        <materials-drawer-list-item label="Cards" targetUrl="/components/card" />
        <materials-drawer-list-item label="Card content" targetUrl="/components/card-content" />
        <materials-drawer-list-item label="Checkbox" targetUrl="/components/checkbox" />
        <materials-drawer-list-item label="Chips" targetUrl="/components/chips" />
        <materials-drawer-list-item label="Datatable" targetUrl="/components/datatable" />
        <materials-drawer-list-item label="Date field" targetUrl="/components/date-field" />
        <materials-drawer-list-item label="Datepicker" targetUrl="/components/datepicker" />
        <materials-drawer-list-item label="Dialog" targetUrl="/components/dialog" />
        <materials-drawer-list-item label="Drawer" targetUrl="/components/drawer" />
        <materials-drawer-list-item label="Drawer list item" targetUrl="/components/drawer-list-item" />
        <materials-drawer-list-item label="Drawer with top app bar" targetUrl="/components/drawer-with-top-app-bar" />
        <materials-drawer-list-item label="Dropdown" targetUrl="/components/dropdown" />
        <materials-drawer-list-item label="Expansion panel" targetUrl="/components/expansion-panel" />
        <materials-drawer-list-item label="FAB" targetUrl="/components/fab" />
        <materials-drawer-list-item label="Form field" targetUrl="/components/form-field" />
        <materials-drawer-list-item label="Icon" targetUrl="/components/icon" />
        <materials-drawer-list-item label="Icon-button" targetUrl="/components/icon-button" />
        <materials-drawer-list-item label="Linear-progress" targetUrl="/components/linear-progress" />
        <materials-drawer-list-item label="List" targetUrl="/components/list" />
        <materials-drawer-list-item label="List item" targetUrl="/components/list-item" />
        <materials-drawer-list-item label="List item checkbox" targetUrl="/components/list-item-checkbox" />
        <materials-drawer-list-item label="Menu" targetUrl="/components/menu" />
        <materials-drawer-list-item label="Multiple Select" targetUrl="/components/multiple-select" />
        <materials-drawer-list-item label="Radio" targetUrl="/components/radio" />
        <materials-drawer-list-item label="Radio group" targetUrl="/components/radio-group" />
        <materials-drawer-list-item label="Select" targetUrl="/components/select" />
        <materials-drawer-list-item label="Snackbar" targetUrl="/components/snackbar" />
        <materials-drawer-list-item label="Stepper" targetUrl="/components/stepper" />
        <materials-drawer-list-item label="Switch" targetUrl="/components/switch" />
        <materials-drawer-list-item label="Tabs" targetUrl="/components/tabs" />
        <materials-drawer-list-item label="Text area" targetUrl="/components/text-area" />
        <materials-drawer-list-item label="Text field" targetUrl="/components/text-field" />
        <materials-drawer-list-item label="Time field" targetUrl="/components/time-field" />
        <materials-drawer-list-item label="Timepicker" targetUrl="/components/timepicker" />
        <materials-drawer-list-item label="Top app bar" targetUrl="/components/top-app-bar" />
        <materials-drawer-list-item label="Top app bar action" targetUrl="/components/top-app-bar-action" />
        <materials-drawer-list-item label="Subtitle" targetUrl="/components/subtitle" />
        <materials-drawer-list-item label="Headline" targetUrl="/components/headline" />
        <materials-drawer-list-item label="Card action" targetUrl="/components/card-action" />
        <materials-drawer-list-item label="Dialog controller" targetUrl="/components/dialog-controller" />
        <materials-drawer-list-item label="Alert controller" targetUrl="/components/alert-controller" />
        <materials-drawer-list-item label="Badge" targetUrl="/components/badge" />
        <materials-drawer-list-item label="_docs" targetUrl="/components/_docs" />
        {/* MENU GENERATION NEEDLE */}
        <div id="outlet" slot="main" />
      </materials-drawer-with-top-app-bar>
    );
  }
}
