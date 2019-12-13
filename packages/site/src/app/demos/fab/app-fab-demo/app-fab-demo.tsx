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
        <app-demo-code-block blockTitle="Simple FAB">
          <materials-fab slot="demo" icon="accessibility_new"></materials-fab>
          <code slot="code">
            {`<materials-fab icon="accessibility_new"></materials-fab>`}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Simple FAB with label">
          <materials-fab slot="demo" icon="accessibility_new" label="Accessibility"></materials-fab>
          <code slot="code">
            {`<materials-fab icon="accessibility_new"  label="Accessibility"></materials-fab>`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
