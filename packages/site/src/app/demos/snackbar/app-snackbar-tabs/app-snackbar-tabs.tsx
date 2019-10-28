import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-snackbar-tabs',
          styleUrl: 'app-snackbar-tabs.scss'
        })
        export class AppSnackbarTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-snackbar-api slot="api-page"/>
                <app-snackbar-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }