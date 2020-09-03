# rodrigopecci/vue-components

**Component for testing**

## Installation

```
npm install rodrigopecci/vue-components
```

## Usage

### Bundler (Webpack, Rollup)

```js
<script>
import { VueComponentTest, VueComponentAnotherTest } from "vue-components";

export default {
    components: {
        VueComponentTest,
        VueComponentAnotherTest
    }    
}
</script>

<template>
    <div>
      <VueComponentTest param="param value" />
      <VueComponentAnotherTest param="param value" />
    </div>
</template>
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="rodrigopecci/vue-component-test/dist/vue-components.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/rodrigopecci/vue-components"></script>
```

