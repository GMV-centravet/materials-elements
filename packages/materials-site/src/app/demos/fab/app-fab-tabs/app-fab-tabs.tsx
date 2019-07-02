import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-fab-tabs',
          styleUrl: 'app-fab-tabs.scss'
        })
        export class AppFabTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-fab-api slot="api-page"/>
                <app-fab-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }