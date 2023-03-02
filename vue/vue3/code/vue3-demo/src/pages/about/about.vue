<template>
  <div>
    about Page
    counter: {{ counter }}
  </div>
</template>

<script setup lang="ts">
  import { useStore } from '@/store/store'
  const store = useStore()
  const counter = store.doubleCount
</script>

<style scoped>

</style>