import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-form-field-tabs',
          styleUrl: 'app-form-field-tabs.scss'
        })
        export class AppFormFieldTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-form-field-api slot="api-page"/>
                <app-form-field-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }