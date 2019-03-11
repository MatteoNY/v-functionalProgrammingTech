<template>
  <div class="about">
    <h1>This is an about page with a basket</h1>
    <Basket/>
    <Comp/>
  </div>
</template>

<script>
import Basket from '@/components/Basket.vue'
import Comp from '@/components/Composure.vue'

export default {
  name: 'about',
  components: {
    Basket,
    Comp
  }
}
</script>

