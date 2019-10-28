import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-dialog-tabs',
          styleUrl: 'app-dialog-tabs.scss'
        })
        export class AppDialogTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-dialog-api slot="api-page"/>
                <app-dialog-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }