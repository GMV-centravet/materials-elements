import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-checkbox-demo',
  styleUrl: 'app-checkbox-demo.css'
})
export class AppCheckboxDemo {



  render() {
    return (
      <div>
        <materials-checkbox></materials-checkbox>
      </div>
    );
  }
}
