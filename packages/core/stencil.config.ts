import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';



const EVENTS = {
  "Select": "select",
  "Change": "change"
};
const ATTRS = {
  "Checked": "checked",
  "Value": "value"
};
const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ["materials-checkbox", "materials-switch", "materials-list-item-checkbox"],
    event: EVENTS.Change,
    targetAttr: ATTRS.Checked,
    type: "boolean"
  },
  {
    elementSelectors: ["materials-autocomplete", "materials-date-field", "materials-time-field", "materials-text-field:not([type=number])", "materials-textarea"],
    event: EVENTS.Change,
    targetAttr: ATTRS.Value,
    type: "text"
  },
  {
    elementSelectors: ["materials-multiple-select", "materials-select", "materials-radio-group"],
    event: EVENTS.Change,
    targetAttr: ATTRS.Value,
    type: "select"
  },
  {
    elementSelectors: ["materials-radio"],
    event: EVENTS.Change,
    targetAttr: ATTRS.Checked,
    type: "radio"
  },
  {
    elementSelectors: ["materials-text-field:[type=number]"],
    event: EVENTS.Change,
    targetAttr: ATTRS.Value,
    type: "number"
  }
];

export const config: Config = {
  namespace: 'materials',
  plugins: [
    sass({ includePaths: ['./node_modules'] })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    angularOutputTarget({
      componentCorePackage: '@materials-ui/core',
      directivesProxyFile: '../angular/projects/materials-ui/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
