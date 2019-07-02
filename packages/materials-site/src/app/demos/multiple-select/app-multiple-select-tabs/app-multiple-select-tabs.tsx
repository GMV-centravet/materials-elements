import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-multiple-select-tabs',
          styleUrl: 'app-multiple-select-tabs.scss'
        })
        export class AppMultipleSelectTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-multiple-select-api slot="api-page"/>
                <app-multiple-select-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }