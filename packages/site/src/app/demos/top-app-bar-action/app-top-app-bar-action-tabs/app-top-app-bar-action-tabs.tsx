import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-top-app-bar-action-tabs',
          styleUrl: 'app-top-app-bar-action-tabs.scss'
        })
        export class AppTopAppBarActionTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-top-app-bar-action-api slot="api-page"/>
                <app-top-app-bar-action-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }