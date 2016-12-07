<template>
  <div>
    <ul>
      <li v-for="episode in season.episodes">
        Episode {{episode.number}}
      </li>
    </ul>
  </div>
</template>

<script>
// import Tunefind from '../data/tunefind/TunefindRepository'

export default {
  name: 'Show',

  data () {
    return {
      season: {}
    }
  },
  mounted () {

  }
}
</script>

<style lang="css" scoped>
  li {
    list-style: none;
  }
</style>
