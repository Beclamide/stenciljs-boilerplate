import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  render() {
    return (
      <div>
        <global-header></global-header>

        <stencil-router>
          <stencil-route url="/" component="landing-page" exact={true}/>
        </stencil-router>

        <global-footer></global-footer>
      </div>
    );
  }
}
