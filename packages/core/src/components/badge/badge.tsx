import { Component, Element, h, Host } from "@stencil/core";

@Component({
  tag: 'materials-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {

  @Element() host: HTMLElement;

  render() {
    return (
      <Host>
        <span class="mdc-typography"><slot/></span>
      </Host>
    );
  }

}