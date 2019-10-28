import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-dialog-demo',
  styleUrl: 'app-dialog-demo.scss',
  shadow: true
})
export class AppDialogDemo {
  private dialog: HTMLMaterialsDialogElement;



  render() {
    return (
      <Host>
        <materials-button raised onClick={() => this.dialog.open()}>Open dialog</materials-button>
        <materials-dialog ref={el => this.dialog = el} dialogTitle="Awesome dialog" acceptButton="yes" cancelButton="No">
          <div slot="body">
            Is that dialog ok to you ?
          </div>
        </materials-dialog>
      </Host>
    );
  }
}
