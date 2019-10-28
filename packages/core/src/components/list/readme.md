# materials-list



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                 | Type                  | Default     |
| ------------ | ------------ | --------------------------------------------------------------------------- | --------------------- | ----------- |
| `dense`      | `dense`      | Optional, styles the density of the list, making it appear more compact.    | `boolean`             | `false`     |
| `multiple`   | `multiple`   | Optional, if the list is selectable it can be a multiple selection          | `boolean`             | `false`     |
| `selectable` | `selectable` | Optional, make a list selectable                                            | `boolean`             | `false`     |
| `size`       | `size`       | <span style="color:red">**[DEPRECATED]**</span> use dense instead<br/><br/> | `"medium" \| "small"` | `undefined` |


## Dependencies

### Used by

 - [materials-autocomplete](..\autocomplete)
 - [materials-multiple-select](..\multiple-select)

### Graph
```mermaid
graph TD;
  materials-autocomplete --> materials-list
  materials-multiple-select --> materials-list
  style materials-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
