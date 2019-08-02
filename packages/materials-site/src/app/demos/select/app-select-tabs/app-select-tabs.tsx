import { Component, h } from '@stencil/core';
@Component({
  tag: 'app-select-tabs',
  styleUrl: 'app-select-tabs.scss'
})
export class AppSelectTabs {

  render() {
    return (
      <app-demo-template-page>
        <app-select-api slot="api-page"/>
        <app-select-demo slot="demo-page"/>
      </app-demo-template-page>
    );
  }
}
