import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-badge-tabs',
          styleUrl: 'app-badge-tabs.scss'
        })
        export class AppBadgeTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-badge-api slot="api-page"/>
                <app-badge-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }