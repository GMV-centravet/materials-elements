import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-expansion-panel-demo',
  styleUrl: 'app-expansion-panel-demo.scss',
  shadow: true
})
export class AppExpansionPanelDemo {



  render() {
    return (
      <Host>
        <h1>Expension panel</h1>
        <materials-expansion-panel>
          <span slot="header">Click me to know what is the sense of life</span>
          <div slot="body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis dignissimos aliquam explicabo, nemo
            soluta minus
            obcaecati aperiam minima itaque eligendi. Rem similique eius quaerat voluptatibus consectetur sunt sequi
            exercitationem!
        </div>
        </materials-expansion-panel>
      </Host>
    );
  }
}
