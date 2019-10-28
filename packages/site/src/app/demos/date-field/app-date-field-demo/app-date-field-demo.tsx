import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-date-field-demo',
  styleUrl: 'app-date-field-demo.scss'
})
export class AppDateFieldDemo {

  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Simple date-field">
          <materials-date-field slot="demo" />
          <code slot="code">
            {`<materials-date-field></materials-date-field>`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
