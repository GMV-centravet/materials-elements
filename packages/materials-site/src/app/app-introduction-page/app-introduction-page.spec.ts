import { TestWindow } from '@stencil/core/testing';
import { AppIntroductionPage } from './app-introduction-page';

describe('app-introduction-page', () => {
  it('should build', () => {
    expect(new AppIntroductionPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppIntroductionPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppIntroductionPage],
        html: '<app-introduction-page></app-introduction-page>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
