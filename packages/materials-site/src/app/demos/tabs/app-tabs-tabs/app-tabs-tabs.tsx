import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-tabs-tabs',
  styleUrl: 'app-tabs-tabs.scss'
})
export class AppTabsTabs {

  render() {
    return (
      <app-demo-template-page>
        <app-tabs-api slot="api-page" />
        <app-tabs-demo slot="demo-page" />
      </app-demo-template-page>
    );
  }
}
