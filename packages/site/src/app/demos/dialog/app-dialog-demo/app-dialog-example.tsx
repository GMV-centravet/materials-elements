import { Component, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
  tag: 'app-dialog-example',
  styleUrl: 'app-dialog-example.scss',
  shadow: true
})
export class AppDialogExample {

  @Event() toggleButton: EventEmitter<boolean>;
  private stateButton = true;

  toggle() {
    this.stateButton = !this.stateButton;
    this.toggleButton.emit(this.stateButton);
  }
  render() {
    return (
      <Host>
        <materials-button raised onclick={() => this.toggle()}>Toggle</materials-button>
      </Host>
    )
  }
}
