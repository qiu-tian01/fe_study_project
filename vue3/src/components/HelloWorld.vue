//dom 里的东西基本上都是没有变的
<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">
    count: {{ state.count }}, double: {{ state.double }},three：{{ three }},refnum：{{refnum}}
  </button>
</template>

<script set>
//这里就是Vue3的组合Api了，这里跟react的 import { useState ,useEffect } from 'react' 有些类似，需要用啥引啥
import {ref, reactive, computed ,watchEffect,watch} from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  //上面对比的时候说过，setup相当于beforeCreate 和created，简单理解就是初始化
  setup(props) {
    console.log(`props`,props.msg) 
  	//这里通过reactive使state成为相应状态（后面会详细介绍）
    const state = reactive({
      count: 0,
      //计算属性computed的使用更灵活了
      double: computed(() => state.count * 2),
    });
    //computed也可以单独拿出来使用
    const three = computed(() => state.count * 3)
    //ref跟reactive作用一样都是用来数据相应的，ref的颗粒度更小（后面详细对比）
	const refnum = ref()
   //这里的watchEffect只要里面的变量发生了改变就会执行,并且第一次渲染会立即执行,没有变化前后返回参数，无法监听整个reactive
    watchEffect(() => {
      refnum.value = state.count;
      console.log(state, "watchEffect");
    });
    //watch里第一个参数是监听需要的变量，第二个是执行的回调函数，
    watch(refnum,(a,b)=>{
      console.log(a,b,'watch,a,b')
    })
    //所有的方法里再也不需要用this了，这是很爽的
    function increment() {
      state.count++;
    }
   	//组中模板中需要的变量，都要通过return给暴露出去，就像当初data({return { } }) 是一样的
    return {
      state,
      increment,
      three,
      refnum
    };
  },
  mounted(){
    console.log(`three`,this.state)
  }
};
</script>