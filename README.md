```bash
yarn add async-arrow-loader --dev
```

We recommend using yarn, but you can also still use npm:

```bash
npm install --save-dev async-arrow-loader
```
Within your webpack configuration object, you'll need to add the async-arrow-loader to the list of modules, like so:

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      loader: 'async-arrow-loader',
      exclude: /(node_modules|bower_components)/
    }
  ]
}
```

In the ES6, if you want to use the Arrow function and async and await together, just like this:

---Old way:---

```javascript
handleSubmit = () => {
    this.props.onSubmit()
        .then(() => {
            //do something here ...., after the promise resolve
        })
}
```

---New way:---

```javascript
handleSubmit = async () => {
    await this.props.onSubmit()
    //do something here ...., after the promise resolve
}
```