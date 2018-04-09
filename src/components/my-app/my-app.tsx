import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  render() {
    return (
      <div>
        <header>
          <div class="logo">
            <h1>Company Name Here</h1>
          </div>
        </header>

        <main>
          Hello World!
        </main>

        <footer>
          <p class="copyright">Copyright © {(new Date).getFullYear()} <a href="http://www.company.co.uk" target="_blank">Company Ltd</a>. Designed by <a href="http://www.industrialassets.co.uk" target="_blank">Industrial Assets</a>.</p>
        </footer>
      </div>
    );
  }
}
