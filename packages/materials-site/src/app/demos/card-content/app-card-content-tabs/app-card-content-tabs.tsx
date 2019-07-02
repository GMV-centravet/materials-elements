import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-card-content-tabs',
          styleUrl: 'app-card-content-tabs.scss'
        })
        export class AppCardContentTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-card-content-api slot="api-page"/>
                <app-card-content-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }