import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-drawer-list-item-tabs',
          styleUrl: 'app-drawer-list-item-tabs.scss'
        })
        export class AppDrawerListItemTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-drawer-list-item-api slot="api-page"/>
                <app-drawer-list-item-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }