import { MDCTabBar, MDCTabBarActivatedEvent } from '@material/tab-bar';
import { Component, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'materials-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs {

  private navBar: HTMLElement;
  private mdcTabs: MDCTabBar;

  @Element() host: HTMLMaterialsTabsElement;

  /** Liste des tabs */
  @State() tabElements: HTMLMaterialsTabElement[];


  /** Index de la tab sélectionner */
  @Prop() activeTab = 0;

  /** Couleur de fond de la tabs */
  @Prop() color: 'background' | 'primary' | 'secondary' | 'surface' = 'background';

  /** type d'indicateur */
  @Prop() indicatorType: 'underline' | 'icon' = 'underline';

  /** Tabs de taille minimum */
  @Prop() shrinkTabs = false;


  @Watch('activeTab') watchActiveTab(newVal: number) {
    if (this.mdcTabs) {
      this.mdcTabs.activateTab(newVal);
    }
  }

  /** Envoie l'index de la tab sélectionner */
  @Event() tabChange: EventEmitter<number>;


  componentWillLoad() {
    const tabElements = Array.from(this.host.querySelectorAll('materials-tab'));
    this.tabElements = [...tabElements];
    this.tabObserver();
  }

  componentDidLoad() {
    this.initTabBar();
    this.mdcTabs.activateTab(this.activeTab);
  }

  componentDidUpdate() {
    this.mdcTabs.initialize();
  }

  private tabObserver() {
    new MutationObserver((mutations, _observer) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          const tabElements = Array.from(this.host.querySelectorAll('materials-tab'));
          this.tabElements = [...tabElements];
        }
      }
    }).observe(this.host, {childList: true});
  }

  private initTabBar() {
    this.mdcTabs = MDCTabBar.attachTo(this.navBar);
    this.mdcTabs.listen('MDCTabBar:activated', (tab: MDCTabBarActivatedEvent) => {
      const { index } = tab.detail;
      this.activeTab = index;
      this.tabChange.emit(index);
    });
  }

  private getHostClasses() {
    const { color } = this;
    return {
      'materials-tab-background': color === 'background',
      'materials-tab-primary': color === 'primary',
      'materials-tab-secondary': color === 'secondary',
      'materials-tab-surface': color === 'surface'
    }
  }

  private getTabClasses(tab: HTMLMaterialsTabElement) {
    return {
      'mdc-tab': true,
      'mdc-tab--active': tab.active,
      'mdc-tab--min-width': this.shrinkTabs
    }
  }

  private getIndicatorClasses() {
    return {
      'mdc-tab-indicator__content': true,
      'mdc-tab-indicator__content--icon': this.indicatorType === 'icon',
      'mdc-tab-indicator__content--underline': this.indicatorType === 'underline',
      'material-icons': this.indicatorType === 'icon'
    }
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        <nav ref={e => this.navBar = e} class="mdc-tab-bar" role="tablist" >
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
