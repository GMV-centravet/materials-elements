# Materials Elements for Angular

This the home page of the Materials Elements Angular implementation. You can get more informations on Materials Elements [here](../../)

## Purpose
Materials Elements provides a set of Web Components implementing the Matierial Design Specifications. The Angular Implementation provides fully integrated Angular binding for those components.
You can use them in any Angular app as if they were pure Angular Components.

## Getting Started

Add @materials-elements/angular package to project:

`npm install @materials-elements/angular@latest`

Import MaterialsElements module in app.module.ts:
```ts
import { MaterialsElementsModule } from '@materials-elements/angular';

@NgModule({
  declarations: [...],
  imports: [
    ...
    MaterialsElementsModule.forRoot(),
    ...
  ],
  providers: [...],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Import in any submodule:

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialsElementsModule } from '@materials-elements/angular';
import { MyComponent } from './my-component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialsElementsModule],
  declarations: [MyComponent],
  exports: [MyComponent]
})
export class MyComponentModule { }

```
Use in any components:
```ts
import { Component, ViewChild } from '@angular/core';
import { MaterialsButton } from '@materials-elements/angular';

@Component({
  selector: 'app-my-component',
  template: `
    <h1>Welcome to Materials Elements</h1>
    <p>This a materials-button:</p>
    <materials-button #btn (click)="clickButton()">Click Me</materials-button>
  `
})
export class MyComponentModule {
    @ViewChild('btn', { static: false })
    private materialsButton: MaterialsButton;


    clickButton(){
        console.log('Button was clicked');
    }
}

```
