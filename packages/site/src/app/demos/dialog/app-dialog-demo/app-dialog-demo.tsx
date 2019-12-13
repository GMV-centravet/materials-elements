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
        <app-demo-code-block blockTitle="Simple dialog">
          <div slot="demo">

          <materials-button onClick={() => this.dialog.open()} raised>Open dialog</materials-button>
          <materials-dialog dialogTitle="Awesome dialog" acceptButton="yes" cancelButton="No">
            <div slot="body">
              Is that dialog ok to you ?
            </div>
          </materials-dialog>
          </div>
          <code slot="code">
            {`<materials-button raised>Open dialog</materials-button>
<materials-dialog dialogTitle="Awesome dialog" acceptButton="yes" cancelButton="No">
  <div slot="body">
    Is that dialog ok to you ?
  </div>
</materials-dialog>
<script>
  const button = document.querySelector('materials-button');
  const dialog = document.querySelector('materials-dialog');
  button.addEventListener('click',()=>dialog.open());
</script>`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
