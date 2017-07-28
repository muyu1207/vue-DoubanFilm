<template>
  <div class="demoComponent">
    <h1 style="line-height: 36px; color: #20A0FF">{{msg}}</h1>
  </div>
</template>
<script>
  export default{
    name:'DemoComm',
    props:{

    },
    data(){
      return {
          msg:'豆瓣电影排行榜'

      }},
    components: {

    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style scoped>
  .demoComponent{
    font-size:25px;
  }

</style>