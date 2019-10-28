import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-list-item-tabs',
          styleUrl: 'app-list-item-tabs.scss'
        })
        export class AppListItemTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-list-item-api slot="api-page"/>
                <app-list-item-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }