import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-drawer-with-top-app-bar-tabs',
          styleUrl: 'app-drawer-with-top-app-bar-tabs.scss'
        })
        export class AppDrawerWithTopAppBarTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-drawer-with-top-app-bar-api slot="api-page"/>
                <app-drawer-with-top-app-bar-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }