import { TestWindow } from '@stencil/core/testing';
import { AppDemoCodeBlock } from './app-demo-code-block';

describe('app-demo-code-block', () => {
  it('should build', () => {
    expect(new AppDemoCodeBlock()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppDemoCodeBlockElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppDemoCodeBlock],
        html: '<app-demo-code-block></app-demo-code-block>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
