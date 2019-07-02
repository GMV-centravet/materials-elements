import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-chips-tabs',
          styleUrl: 'app-chips-tabs.scss'
        })
        export class AppChipsTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-chips-api slot="api-page"/>
                <app-chips-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }