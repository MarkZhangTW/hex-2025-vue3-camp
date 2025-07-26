<script setup lang="ts">
import { ref } from 'vue'

const text = 'Hello, World!'
const num = ref(0)
const htmlTemplate = `<h1>HTML Template</h1>`

setInterval(() => num.value++, 1000)
</script>

<template>
  <div>
    <h1>{{ text }}</h1>
    <p>Counter: {{ num }}</p>
    <div v-text="num"></div>
    {{ htmlTemplate }}
    <div v-text="htmlTemplate"></div>
    <div v-html="htmlTemplate"></div>
  </div>
</template>
