import { newE2EPage } from '@stencil/core/testing';

describe('app-button-demo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-button-demo></app-button-demo>');

    const element = await page.find('app-button-demo');
    expect(element).toHaveClass('hydrated');
  });

});
