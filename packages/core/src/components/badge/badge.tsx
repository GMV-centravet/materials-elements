import { Component, Element, h, Host, Prop } from "@stencil/core";

@Component({
  tag: 'materials-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {
  /** Label displayed */
  @Prop() label: string | number
  /** The badge background color, it can be either :
   *  - a predifined value : 'primary', 'secondary'.
   *  - an hexa color code : #225566, #CCC.
   *  - a css named color : red, blue.
   */
  @Prop() color: 'primary' | 'secondary' | string = 'primary';

  /** The badge text color, it can be either :
   *  - a predifined value : 'primary', 'secondary'.
   *  - an hexa color code : #225566, #CCC.
   *  - a css named color : red, blue.
   */
  @Prop() inkColor: 'primary' | 'secondary' | string = 'primary';

  @Element() host: HTMLElement;

  componentDidLoad() {
    if (this.color && !/(primary)|(secondary)/.test(this.color)) {
      this.host.style.setProperty('--mdc-theme-primary', this.color);
    }
    if (this.inkColor && !/(primary)|(secondary)/.test(this.inkColor)) {
      this.host.style.setProperty('--mdc-theme-on-primary', this.inkColor);
    }
  }

  private getClasses() {
    return {
      'mdc-badge': true,
      'mdc-badge--colored': !!this.color,
      'mdc-badge--ink-colored': !!this.inkColor,
      'mdc-theme--secondary': this.color === 'secondary'
    };
  }

  render() {
    return (
      <Host>
        <span class={this.getClasses()}>{this.label}</span>
      </Host>
    );
  }

}