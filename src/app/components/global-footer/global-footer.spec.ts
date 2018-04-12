import { render } from '@stencil/core/testing';
import { GlobalFooter } from './global-footer';

describe('global-footer', () => {
  it('should build', () => {
    expect(new GlobalFooter()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [GlobalFooter],
        html: '<global-footer></global-footer>'
      });
    });
  });
});