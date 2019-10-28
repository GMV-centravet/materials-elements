import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-headline-tabs',
          styleUrl: 'app-headline-tabs.scss'
        })
        export class AppHeadlineTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-headline-api slot="api-page"/>
                <app-headline-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }