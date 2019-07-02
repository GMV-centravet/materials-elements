import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-time-field-tabs',
          styleUrl: 'app-time-field-tabs.scss'
        })
        export class AppTimeFieldTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-time-field-api slot="api-page"/>
                <app-time-field-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }