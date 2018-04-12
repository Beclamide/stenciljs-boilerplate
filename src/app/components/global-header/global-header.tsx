import { Component } from '@stencil/core';

@Component({
  tag: 'global-header',
  styleUrl: 'global-header.scss'
})
export class GlobalHeader {
  render() {
    return (
      <div class="global-header">
          <div class="logo">
            <h1>Company Name</h1>
          </div>
      </div>
    );
  }
}