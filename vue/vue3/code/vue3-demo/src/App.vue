<template>
  <div>
  <div class="tab_box">
    <div @click="changeTab('index')" :class="tab === 'index' ? 'active' : ''">index</div>
    <div @click="changeTab('about')" :class="tab === 'about' ? 'active' : ''">about</div>
    <div @click="changeTab('user')" :class="tab === 'user' ? 'active' : ''">user</div>
  </div>
  <router-link to="/index">Index</router-link>
  <router-link to="/about">About</router-link>

  <div> 切换的tab：{{tab}} </div>
  <router-view key="1"></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store/store'

  let tab = ref('index')
  const router = useRouter()
  const store = useStore()

  const changeTab = (prop:string)=>{
    tab.value = prop
    if(prop==='user'){
      router.push(`/${tab.value}/123`)
    }else {
      router.push(`/${tab.value}`)
    }
   
  }
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.tab_box{
  display: flex;
}
.tab_box div{
  margin-right: 20px;
}
.active{
  color: red;
}
</style>
