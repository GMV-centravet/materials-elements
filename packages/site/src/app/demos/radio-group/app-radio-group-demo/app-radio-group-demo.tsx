import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-radio-group-demo',
          styleUrl: 'app-radio-group-demo.scss'
        })
        export class AppRadioGroupDemo {

          render() {
            return (
              <Host>
                <app-demo-code-block blockTitle="Simple radio group">
                  <materials-radio-group slot="demo" onChange={(ev) => alert('You will be coming on ' + ev.detail)}>
                    <materials-radio label="Monday" value="Monday"></materials-radio>
                    <materials-radio label="Tuesday" value="Tuesday"></materials-radio>
                    <materials-radio label="Wednesday" value="Wednesday"></materials-radio>
                  </materials-radio-group>
                  <code slot="code">
                    {`<materials-radio-group onChange={(ev) => alert('You will be coming on ' + ev.detail)}>
  <materials-radio label="Monday" value="Monday"></materials-radio>
  <materials-radio label="Tuesday" value="Tuesday"></materials-radio>
  <materials-radio label="Wednesday" value="Wednesday"></materials-radio>
</materials-radio-group>`}
                  </code>
                </app-demo-code-block>
              </Host>
            );
          }
        }
