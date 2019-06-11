import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-button-tabs',
  styleUrl: 'app-button-tabs.scss'
})
export class AppButtonTabs {

  render() {
    return (
      <app-demo-template-page>
        <app-button-api slot="api-page"></app-button-api>
        <app-button-demo slot="demo-page"></app-button-demo>
      </app-demo-template-page>
    );
  }
}
