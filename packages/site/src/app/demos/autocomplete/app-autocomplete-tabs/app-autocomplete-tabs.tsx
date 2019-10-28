import { Component, h } from '@stencil/core';
@Component({
  tag: 'app-autocomplete-tabs',
  styleUrl: 'app-autocomplete-tabs.scss'
})
export class AppAutocompleteTabs {

  render() {
    return (
      <app-demo-template-page>
        <app-autocomplete-api slot="api-page"/>
        <app-autocomplete-demo slot="demo-page"/>
      </app-demo-template-page>
    );
  }
}
