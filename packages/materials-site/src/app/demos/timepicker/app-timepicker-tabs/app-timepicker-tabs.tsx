import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-timepicker-tabs',
          styleUrl: 'app-timepicker-tabs.scss'
        })
        export class AppTimepickerTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-timepicker-api slot="api-page"/>
                <app-timepicker-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }