import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'materials-tab',
  styleUrl: 'tab.scss',
  shadow: false
})

export class Tab {

  @Prop() active: boolean;

  @Prop() icon: string;

  @Prop() label: string;

  render() {
    return;
  }
}
