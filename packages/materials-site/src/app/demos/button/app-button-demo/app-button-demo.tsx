import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-button-demo',
  styleUrl: 'app-button-demo.scss'
})
export class AppButtonDemo {

  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Simple button">
          <materials-button slot="demo" onClick={() => alert('Why ? ')}>Do not click</materials-button>
          <code slot="code">
            {`<materials-button>Do not click</materials-button>
<script>
  const button = document.querySelector('materials-button');
  button.addEventListener('click',()=>alert('Why ?'));
</script>`}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Raised button">
          <materials-button slot="demo" raised>I am raised</materials-button>
          <code slot="code">
            {`
<materials-button raised>I am raised</materials-button>
            `}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Unelevated button">
          <materials-button slot="demo" unelevated>I am unelevated</materials-button>
          <code slot="code">
            {`
<materials-button unelevated>I am unelevated</materials-button>
            `}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Icon button">
          <materials-button slot="demo" icon="shopping_cart">Add to cart</materials-button>
          <code slot="code">
            {`
<materials-button icon="cart">Add to cart</materials-button>
            `}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Color button">
          <div slot="demo" class="color-buttons-demo">
            <materials-button color="primary" raised>Click me</materials-button>
            <materials-button color="secondary" raised>Click me</materials-button>
            <materials-button color="error" raised>Click me</materials-button>
            <materials-button color="cyan" raised>Click me</materials-button>
            <materials-button color="#dd00aa" raised>Click me</materials-button>
          </div>
          <code slot="code">
            {`
<materials-button color="primary" raised>Click me</materials-button>
<materials-button color="secondary" raised>Click me</materials-button>
<materials-button color="error" raised>Click me</materials-button>
<materials-button color="cyan" raised>Click me</materials-button>
<materials-button color="#dd00aa" raised>Click me</materials-button>
            `}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Outlined button">
          <materials-button slot="demo" outlined>Outlined button</materials-button>
          <code slot="code">
            {`
<materials-button outlined>Outlined button</materials-button>
            `}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Dense button">
          <materials-button slot="demo" dense>Dense button</materials-button>
          <code slot="code">
            {`
<materials-button dense>Dense button</materials-button>
            `}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Disabled button">
          <materials-button disabled slot="demo">Disabled button</materials-button>
          <code slot="code">
            {`
<materials-button disabled>Disabled button</materials-button>
            `}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
