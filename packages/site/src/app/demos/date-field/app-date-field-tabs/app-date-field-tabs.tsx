import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-date-field-tabs',
          styleUrl: 'app-date-field-tabs.scss'
        })
        export class AppDateFieldTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-date-field-api slot="api-page"/>
                <app-date-field-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }