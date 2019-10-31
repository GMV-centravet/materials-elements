import { NgZone } from '@angular/core';
import { applyPolyfills, defineCustomElements } from '@materials-ui/core/loader';

let didInitialize = false;

export const appInitialize = (doc: Document) => {
  return (): any => {
    const win = doc.defaultView as any;
    if (win) {
      if (didInitialize) {
        console.warn('MaterialsUI was already initialized. Make sure MaterialsUiModule.forRoot() is just called once.');
      }
      didInitialize = true;

      return applyPolyfills().then(() => {
        return defineCustomElements(win);
      });
    }
  };
};
