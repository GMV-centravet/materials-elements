import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-datepicker-tabs',
          styleUrl: 'app-datepicker-tabs.scss'
        })
        export class AppDatepickerTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-datepicker-api slot="api-page"/>
                <app-datepicker-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }