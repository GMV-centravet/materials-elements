import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-stepper-tabs',
          styleUrl: 'app-stepper-tabs.scss'
        })
        export class AppStepperTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-stepper-api slot="api-page"/>
                <app-stepper-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }