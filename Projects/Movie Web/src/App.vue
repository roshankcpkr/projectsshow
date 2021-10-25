<template>
  <div class="app">
    <router-view>

    </router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components:{
    Footer
  }
}
</script>

<style>

</style>