import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-autocomplete-demo',
  styleUrl: 'app-autocomplete-demo.scss'
})
export class AppAutocompleteDemo {
  
  render() {
    
    const autocompleteCb = (search: string): Promise<Map<string, string>> => 
    new Promise((resolve, _) => {
      const start = new Map().set('1', 'Soufiane').set('2', 'Hervé')
      .set('3', 'Joackim').set('4', 'Amandine').set('5', 'Aline');
      const result = new Map();
      start.forEach((val: string) => {
        if (val.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          result.set(getByValue(start, val), val);
        }
      });
      resolve(result);
    })
    
    const getByValue = (map: Map<string,string>, search: string) => {
      for (let [key, value] of map.entries()) {
        if (search === value) {
          return key;
        }
      }
    }
    
    return (
      <Host>
      <app-demo-code-block blockTitle="Autocomplete">
      <materials-autocomplete slot="demo" autocomplete={autocompleteCb}></materials-autocomplete>
      <code slot="code">
      {
        `<script>
          const autocompleteCb = (search) => 
          new Promise((resolve, _) => {
            const start = new Map().set('1', 'Soufiane').set('2', 'Hervé')
            .set('3', 'Joackim').set('4', 'Amandine').set('5', 'Aline');
            const result = new Map();
            start.forEach((val) => {
              if (val.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                result.set(getByValue(start, val), val);
              }
            });
            resolve(result);
          })
        const getByValue = (map, search) => {
          for (let [key, value] of map.entries()) {
            if (search === value) {
              return key;
            }
          }
        }
        document.querySelector('materials-autocomplete').autocomplete = autocompleteCb;
      </script>
      <materials-autocomplete autocomplete={autocompleteCb}></materials-autocomplete>`
      }
      </code>
      </app-demo-code-block>
      </Host>
      );
    }
  }
