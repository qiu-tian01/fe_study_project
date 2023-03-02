<template>
  <div>
    home page {{ store.$state.count }}
    <button @click="changeCounter">点击</button>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import { useStore } from '@/store/store'
  const todoList = ref([])
  const store = useStore()
  
  const changeCounter =()=>{
    store.updateCounter()
  }
</script>

<style lang="scss" scoped>
  
</style>