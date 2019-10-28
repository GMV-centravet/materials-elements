import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-text-area-tabs',
          styleUrl: 'app-text-area-tabs.scss'
        })
        export class AppTextAreaTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-text-area-api slot="api-page"/>
                <app-text-area-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }