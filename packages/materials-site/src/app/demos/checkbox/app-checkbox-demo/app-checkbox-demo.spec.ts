import { TestWindow } from '@stencil/core/testing';
import { AppCheckboxDemo } from './app-checkbox-demo';

describe('app-checkbox-demo', () => {
  it('should build', () => {
    expect(new AppCheckboxDemo()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppCheckboxDemoElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppCheckboxDemo],
        html: '<app-checkbox-demo></app-checkbox-demo>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
