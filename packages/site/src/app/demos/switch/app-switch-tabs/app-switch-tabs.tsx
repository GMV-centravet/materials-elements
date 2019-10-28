import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-switch-tabs',
          styleUrl: 'app-switch-tabs.scss'
        })
        export class AppSwitchTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-switch-api slot="api-page"/>
                <app-switch-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }