<template>
  <div>
    <h1>
      {{show.show_name}}
    </h1>
    <ul>
      <li v-for="season in show.seasons">
        <a class="seasonName" @click="showSeasonData(season)">
          Season {{season.number}}
        </a>
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
      var showName = this.$route.params.show_id.trim()
      console.log(showName)
      if (showName) {
        Tunefind.showCallback(showName, (show) => {
          console.log(show)
          this.show = show
        })
      }
    },
    showSeasonData (season) {
      this.$router.push({
        path: '/show/' + this.show.show_name + '/' + 'season' + season.number
      })
    }
  }
}
</script>

<style lang="css" scoped>
  li {
    list-style: none;
  }
  a.seasonName {
    cursor: pointer;
    color: blue;
  }
  a.seasonName:hover {
    text-decoration: underline;
  }
</style>
