import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-top-app-bar-tabs',
          styleUrl: 'app-top-app-bar-tabs.scss'
        })
        export class AppTopAppBarTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-top-app-bar-api slot="api-page"/>
                <app-top-app-bar-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }