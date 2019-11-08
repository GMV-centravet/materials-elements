import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-dialog-controller-tabs',
          styleUrl: 'app-dialog-controller-tabs.scss'
        })
        export class AppDialogControllerTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-dialog-controller-api slot="api-page"/>
                <app-dialog-controller-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }