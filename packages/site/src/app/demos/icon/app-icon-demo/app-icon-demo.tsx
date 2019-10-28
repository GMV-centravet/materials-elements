import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-icon-demo',
  styleUrl: 'app-icon-demo.scss'
})
export class AppIconDemo {



  render() {
    return (
      <div>
        <h1>Icon</h1>
        <materials-icon name="accessibility_new"></materials-icon>
      </div>
    );
  }
}
