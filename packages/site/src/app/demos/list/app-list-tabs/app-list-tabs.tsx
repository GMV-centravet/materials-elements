import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-list-tabs',
          styleUrl: 'app-list-tabs.scss'
        })
        export class AppListTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-list-api slot="api-page"/>
                <app-list-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }