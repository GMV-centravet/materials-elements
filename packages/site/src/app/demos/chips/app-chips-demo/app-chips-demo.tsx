import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'app-chips-demo',
  styleUrl: 'app-chips-demo.scss'
})
export class AppChipsDemo {

  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Chip elements">
          <materials-chip slot="demo">
            Chip
          </materials-chip>
          <code slot="code">
            {`<materials-chip>
            Chip
          </materials-chip>`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}