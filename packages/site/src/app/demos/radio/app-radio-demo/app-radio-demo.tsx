import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-radio-demo',
          styleUrl: 'app-radio-demo.scss'
        })
        export class AppRadioDemo {

          render() {
            return (
              <Host>
                <app-demo-code-block blockTitle="Simple radio">
                  <materials-radio slot="demo" label="Simple Radio" onChange={() => alert('Why ? ')}></materials-radio>
                  <code slot="code">
                    {`<materials-radio label="Simple Radio"></materials-radio>
    <script>
      const button = document.querySelector('materials-radio');
      button.addEventListener('change',()=>alert('Why ?'));
    </script>`}
                  </code>
                </app-demo-code-block>
              </Host>
            );
          }
        }
