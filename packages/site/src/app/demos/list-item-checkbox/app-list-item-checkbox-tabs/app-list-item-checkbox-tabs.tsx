import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-list-item-checkbox-tabs',
          styleUrl: 'app-list-item-checkbox-tabs.scss'
        })
        export class AppListItemCheckboxTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-list-item-checkbox-api slot="api-page"/>
                <app-list-item-checkbox-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }