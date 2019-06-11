import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-dropdown-demo',
  styleUrl: 'app-dropdown-demo.scss',
  shadow: true
})
export class AppDropdownDemo {



  render() {
    return (
      <Host>
        <h1>DROPDOWN</h1>
        <materials-dropdown menu-position="BOTTOM_START" icon="more_vert" icon-only>
          <materials-list-item>
            Don't worry
          </materials-list-item>
          <materials-list-item divider></materials-list-item>
          <materials-list-item>
            Be happy
          </materials-list-item>
        </materials-dropdown>
      </Host>
    );
  }
}
