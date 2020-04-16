import { MDCTab } from '@material/tab';
import { MDCTabBar } from '@material/tab-bar';
import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'materials-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs {

  @Element()
  private host: HTMLMaterialsTabsElement;

  @Event() tabChange: EventEmitter<number>;

  @Prop() color: 'background' | 'primary' | 'secondary' | 'surface' = 'background';

  @Prop() indicatorType: 'underline' | 'icon' = 'underline';

  @Prop() shrinkTabs: boolean;

  @Prop() activeTab: number = 0;

  @State() tabElements: HTMLMaterialsTabElement[];

  private mdcTabs: MDCTabBar;

  componentWillLoad() {
    this.lookupTabs();
    new MutationObserver((mutationsList, _observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          this.lookupTabs();
        }
      }
    }).observe(this.host, { attributes: false, childList: true, subtree: true });
  }

  lookupTabs() {
    this.tabElements = Array.from(this.host.querySelectorAll('materials-tab'));
    this.tabElements.forEach((tab: HTMLMaterialsTabElement) => {
      new MutationObserver((mutationsList, _observer) => {
        for (let mutation of mutationsList) {
          if (mutation.type === 'attributes' || mutation.type === 'childList') {
            this.tabElements = [...this.tabElements];
          }
        }
      }).observe(tab, { attributes: true, childList: true, subtree: true });
    });
  }

  componentDidLoad() {
    this.mdcTabs = new MDCTabBar(this.host.shadowRoot.querySelector('.mdc-tab-bar'));
    this.mdcTabs.listen('MDCTabBar:activated', (tabs: CustomEvent) => {
      const selectedIndex = tabs.detail.index;
      this.tabChange.emit(selectedIndex);
    });
    this.mdcTabs.activateTab(this.activeTab);
    Array.from(this.host.shadowRoot.querySelectorAll('.mdc-tab')).forEach(tab => MDCTab.attachTo(tab));
  }

  componentDidUpdate() {
    this.mdcTabs = new MDCTabBar(this.host.shadowRoot.querySelector('.mdc-tab-bar'));
    this.mdcTabs.listen('MDCTabBar:activated', (tabs: CustomEvent) => {
      const selectedIndex = tabs.detail.index;
      this.tabChange.emit(selectedIndex);
    });
    Array.from(this.host.shadowRoot.querySelectorAll('.mdc-tab')).forEach(tab => MDCTab.attachTo(tab));
  }

  getIndicatorClasses() {
    return {
      'mdc-tab-indicator__content': true,
      'mdc-tab-indicator__content--icon': this.indicatorType === 'icon',
      'mdc-tab-indicator__content--underline': this.indicatorType === 'underline',
      'material-icons': this.indicatorType === 'icon'
    }
  }

  getTabClasses(tab: HTMLMaterialsTabElement) {
    return {
      'mdc-tab': true,
      'mdc-tab--active': tab.active,
      'mdc-tab--min-width': this.shrinkTabs
    }
  }

  render() {
    return (
      <Host class={{
        'materials-tab-background': this.color === 'background',
        'materials-tab-primary': this.color === 'primary',
        'materials-tab-secondary': this.color === 'secondary',
        'materials-tab-surface': this.color === 'surface'
      }}>
        <nav class="mdc-tab-bar" role="tablist">
          <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
              <div class="mdc-tab-scroller__scroll-content">
                {this.tabElements.map(tab => {
                  const badge = tab.querySelector('materials-badge');
                  const label = tab.getAttribute('label') || tab.label;
                  return (
                    <button class={this.getTabClasses(tab)} role="tab" aria-selected="true" tabindex={tab.active ? '0' : '-1'}>
                      <span class="mdc-tab__content">
                        {tab.icon && <span class="mdc-tab__icon material-icons" aria-hidden="true">{tab.icon}</span>}
                        <span class="mdc-tab__text-label">
                          {label ? label : <slot />}
                        </span>
                      </span>
                      <span class={{ 'mdc-tab-indicator': true, 'mdc-tab-indicator--active': tab.active }}>
                        <span class={this.getIndicatorClasses()}>
                          {this.indicatorType === 'icon' && 'star'}
                        </span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                      {badge && <materials-badge>{badge.innerText}</materials-badge>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </Host>
    );
  }
}
