import { render } from '@stencil/core/testing';
import { LandingPage } from './landing-page';

describe('landing-page', () => {
  it('should build', () => {
    expect(new LandingPage()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [LandingPage],
        html: '<landing-page></landing-page>'
      });
    });
  });
});