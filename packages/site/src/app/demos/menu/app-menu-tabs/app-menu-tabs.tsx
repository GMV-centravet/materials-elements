import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-menu-tabs',
          styleUrl: 'app-menu-tabs.scss'
        })
        export class AppMenuTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-menu-api slot="api-page"/>
                <app-menu-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }