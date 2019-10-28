import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-drawer-tabs',
          styleUrl: 'app-drawer-tabs.scss'
        })
        export class AppDrawerTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-drawer-api slot="api-page"/>
                <app-drawer-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }