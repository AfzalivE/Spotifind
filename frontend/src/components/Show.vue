<template>
  <div>
    <h1>
      {{show.show_name}}
    </h1>
    <ul>
      <li v-for="season in show.seasons">
        <router-link to="/show/season">
          Season {{season.number}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Tunefind from '../data/tunefind/TunefindRepository'
import Season from '../components/Season'

export default {
  name: 'Show',
  components: {
    Season
  },
  data () {
    return {
      show: {}
    }
  },
  created () {
    this.doSearch()
    // Tunefind.$on('changed', (show) => {
    //   console.log(show)
    //   this.show = show
    // })
  },
  watch: {
    '$route': 'doSearch'
  },
  methods: {
    doSearch () {
      var showName = this.$route.params.id.trim()
      console.log(showName)
      if (showName) {
        Tunefind.showCallback(showName, (show) => {
          console.log(show)
          this.show = show
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
  li {
    list-style: none;
  }
</style>
