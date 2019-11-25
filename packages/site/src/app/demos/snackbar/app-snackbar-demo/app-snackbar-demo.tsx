import { Component, h, Host } from '@stencil/core';
import controllers from '../../../../controllers';

@Component({
  tag: 'app-snackbar-demo',
  styleUrl: 'app-snackbar-demo.scss'
})
export class AppSnackbarDemo {

  render() {
    return (
      <Host>
        <app-demo-code-block blockTitle="Simple message">
          <materials-button slot="demo" onClick={() => controllers.snackbar.create({label:'Hello World !'})}>Show snackbar</materials-button>
          <code slot="code">
            {`<materials-button>Show snackbar</materials-button>
<script>
  const snackbarController = document.createElement('materials-snackbar-controller');
  document.body.appendChild(snackbarController);
  const button = document.querySelector('materials-button');
  button.addEventListener('click',()=>snackbarController.create({label:'Hello World !'}));
</script>`}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Dismissable message">
          <materials-button slot="demo" onClick={() => controllers.snackbar.create({label:'Hello World !', timeout: 10000, dismissButton: true})}>Show snackbar</materials-button>
          <code slot="code">
            {`<materials-button>Show snackbar</materials-button>
<script>
  const snackbarController = document.createElement('materials-snackbar-controller');
  document.body.appendChild(snackbarController);
  const button = document.querySelector('materials-button');
  button.addEventListener('click',()=>snackbarController.create({label:'Hello World !', timeout: 10000, dismissButton: true}));
</script>`}
          </code>
        </app-demo-code-block>
        <app-demo-code-block blockTitle="Stackable message">
          <materials-button slot="demo" onClick={() => controllers.snackbar.create({label:'Hello World !', stacked: true, actionText:'actionButton', actionHandler:()=>alert('Action Done !')})}>Show snackbar</materials-button>
          <code slot="code">
            {`<materials-button>Show snackbar</materials-button>
<script>
  const snackbarController = document.createElement('materials-snackbar-controller');
  document.body.appendChild(snackbarController);
  const button = document.querySelector('materials-button');
  const snackbarOptions = {
    label:'Hello World !',
    stacked: true,
    actionText:'actionButton',
    actionHandler:()=>alert('Action Done !')
  };
  button.addEventListener('click',()=>snackbarController.create(snackbarOptions));
</script>`}
          </code>
        </app-demo-code-block>
      </Host>
    );
  }
}
