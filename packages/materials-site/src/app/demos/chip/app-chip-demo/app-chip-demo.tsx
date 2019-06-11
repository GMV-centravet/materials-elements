import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-chip-demo',
  styleUrl: 'app-chip-demo.scss',
})
export class AppChipDemo {



  render() {
    return (
      <materials-chip>Materials</materials-chip>
    );
  }
}
