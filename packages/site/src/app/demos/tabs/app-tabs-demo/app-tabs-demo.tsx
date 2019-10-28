import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-tabs-demo',
  styleUrl: 'app-tabs-demo.scss'
})
export class AppTabsDemo {

  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Basic tabs">
          <materials-tabs slot="demo">
            <materials-tab label="First tab"></materials-tab>
            <materials-tab label="Second tab"></materials-tab>
          </materials-tabs>
          <code slot="code">
            {`<materials-tabs>
            <materials-tab label="First tab"></materials-tab>
            <materials-tab label="Second tab"></materials-tab>
          </materials-tabs>`}
          </code>
        </app-demo-code-block>

        <app-demo-code-block blockTitle="Full width tabs">
          <div slot="demo" style={{ 'width': '100%' }}>
            <materials-tabs slot="demo">
              <materials-tab label="First tab"></materials-tab>
              <materials-tab label="Second tab"></materials-tab>
            </materials-tabs>
          </div>
          <code slot="code">
            {`<div style="width:100%">
            <materials-tabs>
              <materials-tab label="First tab"></materials-tab>
              <materials-tab label="Second tab"></materials-tab>
            </materials-tabs>
          </div>`}
          </code>
        </app-demo-code-block>

        <app-demo-code-block blockTitle="shrink tabs">
          <div slot="demo" style={{ 'width': '100%' }}>
            <materials-tabs shrinkTabs slot="demo">
              <materials-tab label="First tab"></materials-tab>
              <materials-tab label="Second tab"></materials-tab>
            </materials-tabs>
          </div>
          <code slot="code">
            {`<div style="width:100%">
            <materials-tabs shrinkTabs>
              <materials-tab label="First tab"></materials-tab>
              <materials-tab label="Second tab"></materials-tab>
            </materials-tabs>
          </div>`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
