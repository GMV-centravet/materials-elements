import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-switch-demo',
          styleUrl: 'app-switch-demo.scss'
        })
        export class AppSwitchDemo {

          render() {
            return (
              <Host>
                 <app-demo-code-block blockTitle="Simple switch">
                    <materials-switch slot="demo"></materials-switch>
                    <code slot="code">
                      {`<materials-switch></materials-switch>`}
                    </code>
                  </app-demo-code-block>
                 <app-demo-code-block blockTitle="Switch checked">
                    <materials-switch checked slot="demo" label="Switch checked"></materials-switch>
                    <code slot="code">
                      {`<materials-switch checked label="Switch checked"></materials-switch>`}
                    </code>
                  </app-demo-code-block>
                 <app-demo-code-block blockTitle="Switch disabled">
                    <materials-switch slot="demo" disabled label="Switch disabled"></materials-switch>
                    <code slot="code">
                      {`<materials-switch disabled label="Switch disabled"></materials-switch>`}
                    </code>
                  </app-demo-code-block>
              </Host>
            );
          }
        }
