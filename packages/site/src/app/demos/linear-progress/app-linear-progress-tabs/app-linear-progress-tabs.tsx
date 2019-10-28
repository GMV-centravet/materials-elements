import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-linear-progress-tabs',
          styleUrl: 'app-linear-progress-tabs.scss'
        })
        export class AppLinearProgressTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-linear-progress-api slot="api-page"/>
                <app-linear-progress-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }