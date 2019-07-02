import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-expansion-panel-tabs',
          styleUrl: 'app-expansion-panel-tabs.scss'
        })
        export class AppExpansionPanelTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-expansion-panel-api slot="api-page"/>
                <app-expansion-panel-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }