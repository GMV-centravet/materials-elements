import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-radio-tabs',
          styleUrl: 'app-radio-tabs.scss'
        })
        export class AppRadioTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-radio-api slot="api-page"/>
                <app-radio-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }