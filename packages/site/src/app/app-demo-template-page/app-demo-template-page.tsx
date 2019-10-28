import { Component, h, Host, State } from '@stencil/core';


@Component({
  tag: 'app-demo-template-page',
  styleUrl: 'app-demo-template-page.scss'
})
export class AppDemoTemplatePage {

  @State() activeTab: 'api' | 'demo';

  componentWillLoad() {
    if (window.location.href.endsWith('/demo')) {
      this.activeTab = 'demo';
    }
  }

  toggleTab(e: CustomEvent) {
    let state = window.location.href;
    if (e.detail === 0 && !state.endsWith('/api')) {
      if (state.endsWith('/demo')) {
        state = state.replace('/demo', '');
      }
      history.pushState({}, "", state + '/api')
      this.activeTab = 'api';
    } else if (e.detail === 1 && !state.endsWith('/demo')) {
      if (state.endsWith('/api')) {
        state = state.replace('/api', '');
      }
      history.pushState({}, "", state + '/demo')
      this.activeTab = 'demo';
    }
  }

  render() {
    return (
      <Host>
        <materials-tabs onTabChange={(e) => this.toggleTab(e)} activeTab={this.activeTab === 'demo' ? 1 : 0}>
          <materials-tab label="Api"></materials-tab>
          <materials-tab label="Démos"></materials-tab>
        </materials-tabs>
        <div class="tab-content">
          <div style={{ 'display': this.activeTab === 'api' ? 'block' : 'none' }}><slot name="api-page" /></div>
          <div style={{ 'display': this.activeTab === 'demo' ? 'block' : 'none' }}><slot name="demo-page" /></div>
        </div>
      </Host>
    );
  }
}
