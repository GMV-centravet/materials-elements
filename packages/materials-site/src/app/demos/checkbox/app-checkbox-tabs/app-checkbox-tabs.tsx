import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-checkbox-tabs',
          styleUrl: 'app-checkbox-tabs.scss'
        })
        export class AppCheckboxTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-checkbox-api slot="api-page"/>
                <app-checkbox-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }