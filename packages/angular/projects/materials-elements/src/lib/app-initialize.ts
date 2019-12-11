import { NgZone } from '@angular/core';
import { applyPolyfills, defineCustomElements } from '@materials-elements/core/loader';

let didInitialize = false;

export const appInitialize = (doc: Document) => {
  return (): any => {
    const win = doc.defaultView as any;
    if (win) {
      if (didInitialize) {
        console.warn('MaterialsElements was already initialized. Make sure MaterialsElementsModule.forRoot() is just called once.');
      }
      didInitialize = true;

      return applyPolyfills().then(() => {
        return defineCustomElements(win);
      });
    }
  };
};
