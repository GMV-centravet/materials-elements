import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-checkbox-demo',
  styleUrl: 'app-checkbox-demo.css'
})
export class AppCheckboxDemo {



  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Simple checkbox">
          <materials-checkbox slot="demo" ></materials-checkbox>
          <code slot="code">
            {`<materials-checkbox></materials-checkbox>
            `}
          </code>
        </app-demo-code-block>

        <app-demo-code-block blockTitle="Checkbox with label">
          <materials-checkbox slot="demo" alignLabel="left" label="demo" ></materials-checkbox>
          <materials-checkbox slot="demo" alignLabel="right" label="demo" ></materials-checkbox>
          <code slot="code">
            {`
             <materials-checkbox alignLabel="left" label="demo" ></materials-checkbox>
             <materials-checkbox alignLabel="right" label="demo" ></materials-checkbox>
            `}
          </code>
        </app-demo-code-block>

        <app-demo-code-block blockTitle="Checkbox with color">
          <materials-checkbox slot="demo" color="primary" checked="true" ></materials-checkbox>
          <materials-checkbox slot="demo" checked="true" color="#1baeba"></materials-checkbox>
          
          <code slot="code">
            {`
           <materials-checkbox  color="primary" checked="true" ></materials-checkbox>
           <materials-checkbox  checked="true" color="#1baeba"></materials-checkbox>
            `}
          </code>
        </app-demo-code-block>

        <app-demo-code-block blockTitle="Checkbox disabled">
          <materials-checkbox slot="demo" disabled="true" ></materials-checkbox>
          <materials-checkbox slot="demo" checked="true" disabled="true"></materials-checkbox>
          
          <code slot="code">
            {`
           <materials-checkbox  disabled="true" ></materials-checkbox>
           <materials-checkbox  checked="true" disabled="true"></materials-checkbox>
            `}
          </code>
        </app-demo-code-block>

        <app-demo-code-block blockTitle="Checkbox check">
          <materials-checkbox slot="demo" indeterminate="true"></materials-checkbox>
          <materials-checkbox slot="demo" checked="indeterminate"></materials-checkbox>
          
          <code slot="code">
            {`
            <materials-checkbox indeterminate="true"></materials-checkbox>
            <materials-checkbox checked="true"></materials-checkbox>
            `}
          </code>
        </app-demo-code-block>

        <app-demo-code-block blockTitle="Checkbox value">
          <materials-checkbox slot="demo" onChange={(e) => alert(e.target.value)} label="checkbox 1" name="checkbox1" value="checkbox1"></materials-checkbox>
          <materials-checkbox slot="demo" onChange={(e) => alert(e.target.value)} label="checkbox 2" name="checkbox2" value="checkbox2"></materials-checkbox>
          
          <code slot="code">
            {`
            <materials-checkbox onChange={(e) => alert(e.target.value)} label="checkbox 1" name="checkbox1" value="checkbox1"></materials-checkbox>
            <materials-checkbox onChange={(e) => alert(e.target.value)} label="checkbox 2" name="checkbox2" value="checkbox2"></materials-checkbox>
            `}
          </code>
        </app-demo-code-block>


        

      </Host>
    );
  }
}
