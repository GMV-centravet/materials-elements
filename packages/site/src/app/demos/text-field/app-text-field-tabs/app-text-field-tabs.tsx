import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-text-field-tabs',
          styleUrl: 'app-text-field-tabs.scss'
        })
        export class AppTextFieldTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-text-field-api slot="api-page"/>
                <app-text-field-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }