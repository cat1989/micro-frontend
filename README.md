# micro-frontend
## AppShell
### 1. register
```js
const container = document.createElement("div");
document.body.appendChild(container);

AppShell.register({
  name: "example",
  entry: "http://example.com",
  container,
  activeRule: "/example"
  mode: "default"
});
```
#### mode
1. default
2. shadow
3. strict
### 2. load
```js
AppShell.load("example");
```
## micro-app
```html
<micro-app
  name="example"
  entry="http://example.com"
  active-rule="/example"
  mode="default"
></micro-app>
```























