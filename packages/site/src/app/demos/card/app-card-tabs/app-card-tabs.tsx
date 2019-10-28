import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-card-tabs',
  styleUrl: 'app-card-tabs.scss'
})
export class AppCardTabs {

  render() {
    return (
      <app-demo-template-page>
        <app-card-api slot="api-page" />
        <app-card-demo slot="demo-page" />
      </app-demo-template-page>
    );
  }
}
