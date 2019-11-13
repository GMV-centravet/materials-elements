import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-badge-demo',
          styleUrl: 'app-badge-demo.scss'
        })
        export class AppBadgeDemo {

          render() {
            return (
              <Host>
                <app-demo-code-block blockTitle="Badge">
                  <div slot="demo">
                    <materials-badge label={4}></materials-badge>
                    <materials-badge label={2} color='secondary'></materials-badge>
                    <materials-badge label={2} color='red' inkColor='white'></materials-badge>
                    <materials-badge label='text' color='red' inkColor='white'></materials-badge>
                  </div>
                  <code slot="code">
                  {
                    `<materials-badge label="4"></materials-badge>
                    <materials-badge label="2" color="secondary"></materials-badge>
                    <materials-badge label="2" color="red" inkColor="white"></materials-badge>
                    <materials-badge label="text" color="red" inkColor="white"></materials-badge>`
                  }
                  </code>
                </app-demo-code-block>
              </Host>
            );
          }
        }