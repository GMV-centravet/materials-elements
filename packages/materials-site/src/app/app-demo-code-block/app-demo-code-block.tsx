import { Component, Element, h, Host, Prop } from '@stencil/core';


@Component({
  tag: 'app-demo-code-block',
  styleUrl: 'app-demo-code-block.scss',
  shadow: true
})
export class AppDemoCodeBlock {

  @Element() host: HTMLAppDemoCodeBlockElement;

  @Prop() blockTitle: string;

  componentDidLoad() {
    // const codeSlot: HTMLSlotElement = this.host.shadowRoot.querySelector('slot[name="code"]');
    // const trailingSpacesPattern = /\s*\n[\t\s]*/;
    // console.log(codeSlot.assignedNodes());
    // var codeElement = codeSlot.assignedNodes()[0];
    // if (codeElement && codeElement instanceof HTMLElement) {
    //   console.log(codeElement.innerHTML);
    //   codeElement.innerHTML = codeElement.innerHTML.replace(new RegExp(trailingSpacesPattern, "g"), '\n');
    //   console.log(codeElement.innerHTML);
    //   //.html(html.replace(new RegExp(trailingSpacesPattern, "g"),'\n'));
    // }
  }

  render() {
    return (
      <Host>
        <materials-card elevation={2}>
          <h2>{this.blockTitle}</h2>
          <div class="demo-and-code">
            <slot name="demo" />
            <materials-card class="code">
              <pre>
                <slot name="code" />
              </pre>
            </materials-card>
          </div>
        </materials-card>
      </Host>
    );
  }
}
