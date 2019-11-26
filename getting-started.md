# Getting Started with Materials-UI

There are several ways to use Materials-UI components in your projects. One of the strengths of Web Components is that they are framework agnostic, it means that you can use them whatever if you're using a Framework or not.

For now, we provide two distributions of Materials-UI components :
- @materials-ui/core : contains all components and can be use in any context.
- @materials-ui/angular : angular components library based on the core package.


## Common advices

Materials-UI helps you to easily use [Material icons](https://material.io/resources/icons). Don't forget to add them in the head section of your page: 
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

Materials-UI follow Material Design specifications, so the default font is [Roboto](https://fonts.google.com/specimen/Roboto). You always have the possibility to change it via CSS Variable, but we recommend you to include the Roboto font in the head section of your page:
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
```

## Add Materials-UI Components to your project

To start using Materials-UI, you can proceed in different ways :

### Angular Application :

Even if you can use the @materials/core package in Angular apps, we recommend using the @materials/angular package which offers you fully integrated Angular Components with Form binding and all you need.

Take a look at the [Angular Getting Started](./packages/angular) to learn how to start.

### React Application

// TODO

### Vue Application

// TODO

### Stencil PWA

Add @materials-ui/core package to your project:

```shell 
npm install @materials-ui/core@latest
```

Import components in app.ts:

```ts
import '@gmvdev/materials';
```

Start using in any component:

```tsx
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-page',
  styleUrl: 'app-page.scss'
})
export class AppPage {

  private button:HTMLMaterialsButtonElement;

  handleClick(){
      console.log('Button was clicked');
  }

  render() {
    return (
      <Host>
        <h1>Welcome to Materials-UI</h1>
        <p>This is a Materials Button:</p>
        <materials-button ref={el=>this.button = el} onClick={()=>this.handleClick()}>Click Me</materials-button>
      </Host>
    );
  }
}
```
### Others frameworks, or no framework: 

You can use Materials-UI in any Webapp, just add materials-ui in the head section of your page:
```html
<html lang="en">
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

  <script type="module" src="https://cdn.jsdelivr.net/npm/@materials-ui/core@latest/dist/materials/materials.esm.js"></script>

  <script nomodule src="https://cdn.jsdelivr.net/npm/@materials-ui/core@latest/dist/materials/materials.js"></script>
</head>
<body>
  <materials-button>Click Me</materials-button>
</body>
</html>
```
> :warning: Don't import @latest in production !