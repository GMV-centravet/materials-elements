const retrieveController = (): HTMLMaterialsSnackbarControllerElement => {
  let ctrl = document.querySelector('materials-snackbar-controller');
  if (!ctrl) {
    ctrl = document.createElement('materials-snackbar-controller');
    document.body.appendChild(ctrl);
  }
  return ctrl;
}

export default retrieveController();
