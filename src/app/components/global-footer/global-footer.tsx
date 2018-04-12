import { Component } from '@stencil/core';

@Component({
  tag: 'global-footer',
  styleUrl: 'global-footer.scss'
})
export class GlobalFooter {
  render() {
    return (
      <div class="global-footer">
          <p class="copyright">Copyright © {(new Date).getFullYear()} <a href="http://www.company.co.uk" target="_blank">Company Ltd</a>. Designed by <a href="http://www.industrialassets.co.uk" target="_blank">Industrial Assets</a>.</p>
      </div>
    );
  }
}