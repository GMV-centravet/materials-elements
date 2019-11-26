# Materials-UI for Angular

This the home page of the Materials-UI Angular implementation. You can get more informations on Materials-UI [here](../../)

## Purpose
Materials-UI provides a set of Web Components implementing the Matierial Design Specifications. The Angular Implementation provides fully integrated Angular binding for those components.
You can use them in any Angular app as if they were pure Angular Components.

## Getting Started

Add @materials-ui/angular package to project:

`npm install @materials-ui/angular@latest`

Import MaterialsUI module in app.module.ts:
```ts
import { MaterialsUiModule } from '@materials-ui/angular';

@NgModule({
  declarations: [...],
  imports: [
    ...
    MaterialsUiModule.forRoot(),
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
import { MaterialsUiModule } from '@materials-ui/angular';
import { MyComponent } from './my-component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialsUiModule],
  declarations: [MyComponent],
  exports: [MyComponent]
})
export class MyComponentModule { }

```
Use in any components:
```ts
import { Component, ViewChild } from '@angular/core';
import { MaterialsButton } from '@materials-ui/angular';

@Component({
  selector: 'app-my-component',
  template: `
    <h1>Welcome to Materials-UI</h1>
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
