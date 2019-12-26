---
title: Vue.js
category: JavaScript
layout: 2017/sheet
updated: 2019-11-22
weight: -10
intro: |
  [Vue.js (v1.0.28)](https://v1.vuejs.org/) is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.
---

{% raw %}

### Lists

```html
<li v-for="todo in todos">
  {{ todo.text }}
  {{ $index }}
</li>
```

### Events

```html
<button v-on:click='submit'>Go</button>
```

### Components

```js
new Vue({
  components: { app: App }
})
```

## API

```js
Vue.extend({ ... })        // creating components
Vue.nextTick(() => {...})

Vue.set(object, key, val)  // reactive
Vue.delete(object, key)

Vue.directive('my-dir', { bind, update, unbind })
// <div v-my-dir='...'></div>

Vue.elementDirective('my-dir', { bind, update, unbind })
// <my-dir>...</my-dir>

Vue.component('my-component', Vue.extend({ .. }))

Vue.partial('my-partial', '<div>hi {{msg}}</div>')
// <partial name='my-partial'></partial>
```

```js
new Vue({
  data: { ... }
  props: ['size'],
  props: { size: Number },
  computed: { fullname() { return this.name + ' ' + this.lastName } },
  methods: { go() { ... } },
  watch: { a (val, oldVal) { ... } },
  el: '#foo',
  template: '...',
  replace: true, // replace element (default true)

  // lifecycle
  created () {},
  beforeCompile () {},
  compiled () {},
  ready () {}, // $el is inserted for the first time
  attached () {},
  detached () {},
  beforeDestroy () {},
  destroyed () {},

  // options
  directives: {},
  elementDirectives: {},
  filters: {},
  components: {},
  transitions: {},
  partials: {}
})
```

## Vue templates
Via [vueify](https://www.npmjs.com/package/vueify)

```js
// app.vue
<template>
  <h1 class="red">{{msg}}</h1>
</template>
 
<script>
  module.exports = {
    data () {
      return {
        msg: 'Hello world!'
      }
    }
  }
</script> 
```

Also

```html
<template lang='jade'>
h1(class='red') {{msg}}
</template>
```

{% endraw %}
