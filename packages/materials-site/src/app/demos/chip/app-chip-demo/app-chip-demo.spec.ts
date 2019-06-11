import { TestWindow } from '@stencil/core/testing';
import { AppChipsDemo } from './app-chips-demo';

describe('app-chips-demo', () => {
  it('should build', () => {
    expect(new AppChipsDemo()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppChipsDemoElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppChipsDemo],
        html: '<app-chips-demo></app-chips-demo>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
