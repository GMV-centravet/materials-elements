const retrieveController = (): HTMLMaterialsDialogControllerElement => {
  let ctrl = document.querySelector('materials-dialog-controller');
  if (!ctrl) {
    ctrl = document.createElement('materials-dialog-controller');
    document.body.appendChild(ctrl);
  }
  return ctrl;
}

export default retrieveController();
