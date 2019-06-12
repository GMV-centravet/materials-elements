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
      { path: '/components/button', component: 'app-button-tabs', },
      { path: '/components/button/demo', component: 'app-button-tabs', },
      { path: '/components/button/api', component: 'app-button-tabs', },
      { path: '/components/card', component: 'app-card-tabs' },
      { path: '/components/card/demo', component: 'app-card-tabs' },
      { path: '/components/card/api', component: 'app-card-tabs' },
      { path: '/components/checkbox', component: 'app-checkbox-demo' },
      { path: '/components/chip', component: 'app-chip-demo' },
      { path: '/components/datatable', component: 'app-datatable-demo' },
      { path: '/components/datepicker', component: 'app-datepicker-demo' },
      { path: '/components/dialog', component: 'app-dialog-demo' },
      { path: '/components/dropdown', component: 'app-dropdown-demo' },
      { path: '/components/expansion-panel', component: 'app-expansion-panel-demo' },
      { path: '/components/fab', component: 'app-fab-demo' },
      { path: '/components/icon', component: 'app-icon-demo' },
      { path: '/components/icon-button', component: 'app-icon-button-demo' },
      { path: '/components/linear-progress', component: 'app-linear-progress-demo' },
      { path: '/components/list', component: 'app-list-demo' },
      { path: '/components/menu', component: 'app-menu-demo' },
      { path: '/components/radio', component: 'app-radio-demo' },
      { path: '/components/select', component: 'app-select-demo' },
      { path: '/components/snackbar', component: 'app-snackbar-demo' },
      { path: '/components/stepper', component: 'app-stepper-demo' },
      { path: '/components/switch', component: 'app-switch-demo' },
      { path: '/components/tabs', component: 'app-tabs-demo' },
      { path: '/components/textarea', component: 'app-textarea-demo' },
      { path: '/components/text-field', component: 'app-text-field-demo' },
      { path: '/components/timepicker', component: 'app-timepicker-demo' },
      { path: '/components/top-app-bar', component: 'app-top-app-bar-demo' },
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
        <materials-drawer-list-item label="Buttons" targetUrl="/components/button" />
        <materials-drawer-list-item label="Cards" targetUrl="/components/card" />
        <materials-drawer-list-item label="Checkbox" targetUrl="/components/checkbox" />
        <materials-drawer-list-item label="Chip" targetUrl="/components/chip" />
        <materials-drawer-list-item label="Datatable" targetUrl="/components/datatable" />
        <materials-drawer-list-item label="Datepicker" targetUrl="/components/datepicker" />
        <materials-drawer-list-item label="Dialog" targetUrl="/components/dialog" />
        <materials-drawer-list-item label="Dropdown" targetUrl="/components/dropdown" />
        <materials-drawer-list-item label="Expansion panel" targetUrl="/components/expansion-panel" />
        <materials-drawer-list-item label="FAB" targetUrl="/components/fab" />
        <materials-drawer-list-item label="Icon" targetUrl="/components/icon" />
        <materials-drawer-list-item label="Icon-button" targetUrl="/components/icon-button" />
        <materials-drawer-list-item label="Linear-progress" targetUrl="/components/linear-progress" />
        <materials-drawer-list-item label="List" targetUrl="/components/list" />
        <materials-drawer-list-item label="Menu" targetUrl="/components/menu" />
        <materials-drawer-list-item label="Radio" targetUrl="/components/radio" />
        <materials-drawer-list-item label="Select" targetUrl="/components/select" />
        <materials-drawer-list-item label="Snackbar" targetUrl="/components/snackbar" />
        <materials-drawer-list-item label="Stepper" targetUrl="/components/stepper" />
        <materials-drawer-list-item label="Switch" targetUrl="/components/switch" />
        <materials-drawer-list-item label="Tabs" targetUrl="/components/tabs" />
        <materials-drawer-list-item label="Textarea" targetUrl="/components/textarea" />
        <materials-drawer-list-item label="Text field" targetUrl="/components/text-field" />
        <materials-drawer-list-item label="Timepicker" targetUrl="/components/timepicker" />
        <materials-drawer-list-item label="Top app bar" targetUrl="/components/top-app-bar" />
        <div id="outlet" slot="main" />
      </materials-drawer-with-top-app-bar>
    );
  }
}
