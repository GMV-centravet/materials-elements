import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-icon-button-tabs',
          styleUrl: 'app-icon-button-tabs.scss'
        })
        export class AppIconButtonTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-icon-button-api slot="api-page"/>
                <app-icon-button-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }