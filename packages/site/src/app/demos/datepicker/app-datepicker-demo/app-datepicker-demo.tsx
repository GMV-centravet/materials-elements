import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-datepicker-demo',
  styleUrl: 'app-datepicker-demo.scss'
})
export class AppDatepickerDemo {



  render() {
    return (
      <div>
        <materials-datepicker></materials-datepicker>
      </div>
    );
  }
}
