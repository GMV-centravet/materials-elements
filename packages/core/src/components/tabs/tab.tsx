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

  @Prop() indicatorType: 'underline' | 'icon' = 'underline';

  @Prop() minWidth: boolean;

  @Prop() badgeLabel: string | number;

  @Prop() badgeColor: 'primary' | 'secondary' | string = 'primary';

  @Prop() badgeInkColor: 'primary' | 'secondary' | string = 'primary';

  render() {
    console.log('propchanged', this.badgeLabel);
    return;
  }
}
