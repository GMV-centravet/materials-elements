import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'materials-tab',
  styleUrl: 'tab.scss',
})
export class Tab {

  /** Indique si la tab est active */
  @Prop() active = false;

  /** Icon de la librairie Material */ 
  @Prop() icon: string;

  /** Titre de la tab */ 
  @Prop() label!: string;

  render() {
    return;
  }
}
