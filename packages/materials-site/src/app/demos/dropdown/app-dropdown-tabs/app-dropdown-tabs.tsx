import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-dropdown-tabs',
          styleUrl: 'app-dropdown-tabs.scss'
        })
        export class AppDropdownTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-dropdown-api slot="api-page"/>
                <app-dropdown-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }