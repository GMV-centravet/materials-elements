import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-datatable-tabs',
          styleUrl: 'app-datatable-tabs.scss'
        })
        export class AppDatatableTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-datatable-api slot="api-page"/>
                <app-datatable-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }