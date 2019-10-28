import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-fab-demo',
  styleUrl: 'app-fab-demo.scss',
  shadow: true
})
export class AppFabDemo {



  render() {
    return (
      <Host>
        <h1>FAB</h1>
        <materials-fab icon="accessibility_new"></materials-fab>
      </Host>
    );
  }
}
