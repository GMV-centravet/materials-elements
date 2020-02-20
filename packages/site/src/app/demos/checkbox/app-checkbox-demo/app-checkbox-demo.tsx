import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-checkbox-demo',
  styleUrl: 'app-checkbox-demo.css'
})
export class AppCheckboxDemo {

  render() {
    return (
      <div>
      <app-demo-code-block blockTitle="Simple checkbox">
          <materials-checkbox slot="demo"></materials-checkbox>
          <code slot="code">
            {`<materials-checkbox></materials-checkbox>`}
          </code>
        </app-demo-code-block>
      <app-demo-code-block blockTitle="Labelled checkbox">
          <materials-checkbox label="Check me!" slot="demo" onChange={() => alert('You dared to check me!')}></materials-checkbox>
          <code slot="code">
            {`<materials-checkbox></materials-checkbox>
<script>
  const checkbox = document.querySelector('materials-checkbox');
  checkbox.addEventListener('click',()=>alert('You dared to check me!'));
</script>`}
          </code>
        </app-demo-code-block>
      <app-demo-code-block blockTitle="Disabled checkbox">
          <materials-checkbox label="You can't check me!" slot="demo" disabled></materials-checkbox>
          <code slot="code">
            {` <materials-checkbox label="You can't check me!" disabled></materials-checkbox>`}
          </code>
        </app-demo-code-block>
      <app-demo-code-block blockTitle="Indeterminate checkbox">
          <materials-checkbox indeterminate slot="demo"></materials-checkbox>
          <code slot="code">
            {` <materials-checkboxindeterminate></materials-checkbox>`}
          </code>
        </app-demo-code-block>

      </div>
    );
  }
}
