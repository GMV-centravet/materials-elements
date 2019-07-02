import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-radio-group-tabs',
          styleUrl: 'app-radio-group-tabs.scss'
        })
        export class AppRadioGroupTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-radio-group-api slot="api-page"/>
                <app-radio-group-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }