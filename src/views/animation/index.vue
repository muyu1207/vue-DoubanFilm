<template>
    <div>
        <FirstAn></FirstAn>
        <SecondAn></SecondAn>
        <ThirdAn></ThirdAn>
    </div>  
</template>

<script>
    import FirstAn from './first_an.vue'
    import SecondAn from './second_an.vue'
    import ThirdAn from './third_an.vue'
    export default {
    name:'AnIndex',
    data () {
      
    },
    components:
    {
        FirstAn,
        SecondAn,
        ThirdAn
    }, 

  }
</script>

