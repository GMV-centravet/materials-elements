import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-alert-controller-tabs',
          styleUrl: 'app-alert-controller-tabs.scss'
        })
        export class AppAlertControllerTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-alert-controller-api slot="api-page"/>
                <app-alert-controller-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }