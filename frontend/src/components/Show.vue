<template>
  <div>
    <h1>
      {{show.show_name}}
    </h1>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'

export default {
  name: 'Show',

  data () {
    return {
      show: {}
    }
  },
  mounted () {
    Tunefind.$on('changed', (show) => {
      console.log(show)
      this.show = show
    })
  }
}
</script>

<style lang="css" scoped>
</style>
