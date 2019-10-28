import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-card-demo',
  styleUrl: 'app-card-demo.scss'
})
export class AppCardDemo {

  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Simple card">
          <materials-card slot="demo">
            I am a fantastic simple card
          </materials-card>
          <code slot="code">
            {`<materials-card>
            I am a fantastic simple card
          </materials-card>`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
