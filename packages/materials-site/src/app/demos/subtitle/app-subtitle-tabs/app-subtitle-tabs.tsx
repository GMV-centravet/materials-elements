import { Component, h } from '@stencil/core';
        @Component({
          tag: 'app-subtitle-tabs',
          styleUrl: 'app-subtitle-tabs.scss'
        })
        export class AppSubtitleTabs {

          render() {
            return (
              <app-demo-template-page>
                <app-subtitle-api slot="api-page"/>
                <app-subtitle-demo slot="demo-page"/>
              </app-demo-template-page>
            );
          }
        }