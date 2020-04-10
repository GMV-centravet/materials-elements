import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-dialog-demo',
  styleUrl: 'app-dialog-demo.scss',
  shadow: true
})
export class AppDialogDemo {
  private dialogWithNoFooter: HTMLMaterialsDialogElement;
  private dialogWithFooter: HTMLMaterialsDialogElement;

  render() {
    return (
      <Host>
        <materials-button style={{ 'padding-right': '16px' }} raised onClick={() => this.dialogWithNoFooter.open()}>Open dialog no footer</materials-button>
        <materials-button raised onClick={() => this.dialogWithFooter.open()}>Open dialog with footer</materials-button>
        <materials-dialog ref={el => this.dialogWithNoFooter = el} dialogTitle="Awesome dialog with no footer">
          <div slot="body">
            Is that dialog ok to you ? see no footer ;)
          </div>
        </materials-dialog>
        <materials-dialog ref={el => this.dialogWithFooter = el} acceptButton="Accepter" cancelButton="Annuler" dialogTitle="Awesome dialog">
          <div slot="body">
            Is that dialog ok to you ?
          </div>
          <materials-button slot="third-button">Action</materials-button>
        </materials-dialog>
      </Host >
    );
  }
}
