import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'app-select-demo',
  styleUrl: 'app-select-demo.scss'
})
export class AppSelectDemo {

  render() {
    const simpleSelectOptions = new Map().set('VAL1', 'value 1').set('VAL2', 'value 2');
    return (
      <Host>
        <app-demo-code-block blockTitle="Simple select">
          <materials-select slot="demo" width="100%" label="Simple select"
            options={simpleSelectOptions}/>
          <code slot="code">
            {`<materials-select width="100%" label="Simple select"
            options={simpleSelectOptions}/>`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
