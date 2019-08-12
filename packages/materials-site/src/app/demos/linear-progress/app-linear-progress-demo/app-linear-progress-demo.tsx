import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-linear-progress-demo',
          styleUrl: 'app-linear-progress-demo.scss'
        })
        export class AppLinearProgressDemo {

          private progressElement: HTMLMaterialsLinearProgressElement;

          toggleProgress() {
            this.progressElement.show();
          }

          render() {
            return (
              <Host>
                <app-demo-code-block blockTitle="Linear progress">
                  <div style={{width: '100%'}} slot="demo">
                    <materials-button onClick={() => this.toggleProgress() }>Toggle progress</materials-button>
                    <materials-linear-progress backgroundColor="#ff9100" ref={el => this.progressElement = el as HTMLMaterialsLinearProgressElement}>
                    </materials-linear-progress>
                  </div>
                  <code slot="code">
                    {`<materials-linear-progress slot="demo">
                      </materials-linear-progress>`}
                  </code>
                </app-demo-code-block>
              </Host>
            );
          }
        }