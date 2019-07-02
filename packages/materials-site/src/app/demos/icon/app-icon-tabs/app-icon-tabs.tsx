import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-icon-tabs',
          styleUrl: 'app-icon-tabs.scss'
        })
        export class AppIconTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-icon-api slot="api-page"/>
                <app-icon-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }