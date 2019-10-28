import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-multiple-select-demo',
  styleUrl: 'app-multiple-select-demo.scss',
  shadow: true
})
export class AppMultipleSelectDemo {

  private options: Map<string, string>;

  componentWillLoad() {
    this.options = new Map();
    this.options.set('1', 'One');
    this.options.set('2', 'Two');
    this.options.set('3', 'Three');
    this.options.set('4', 'Four');
  }

  render() {
    return (
      <div>
        <materials-multiple-select label="Toto" dialogTitle="Choose many" options={this.options} />
      </div>
    );
  }
}
