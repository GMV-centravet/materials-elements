import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-card-action-tabs',
          styleUrl: 'app-card-action-tabs.scss'
        })
        export class AppCardActionTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-card-action-api slot="api-page"/>
                <app-card-action-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }