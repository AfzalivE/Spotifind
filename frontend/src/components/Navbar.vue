<template>
  <div class="navbar navbar-fixed-top navbar-color-on-scroll navbar-transparent">
    <div class="container">
      <a class="navbar-brand" href="#">SpotiFind</a>
      <div class="row">
        <div class="navbar-right">
          <div class="search">
            <form class="navbar-form navbar-right" v-on:submit.prevent="">
              <div class="input-group">
                <div class="form-group is-empty">
                  <input class="form-control" type="text" name="search" v-model="search" placeholder="Search"/>
                  <span class="material-input"></span>
                </div>
              </div>
              <button class="btn btn-simple btn-primary" @click="doSearch()">Search</button>
           </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Tunefind from '../data/tunefind/TunefindRepository.js'

export default {
  data () {
    return {

    }
  },
  methods: {
    doSearch () {
      console.log('Searching...')
      if (this.search === undefined) {
        console.log('show error for empty search')
        return
      }
      this.$router.push({
        path: '/show/' + this.search.toLowerCase()
      })
    }
  }
}
</script>

<style lang="css" scoped>
a.router-link, a.router-link-active {
  text-decoration: none;
}
.search {
    display: inline-block;
    position: relative;
    width: 100%;
    border-radius: 3px;
    color: rgba(0,0,0, 0.87);
    background: #fff;
    padding: 0px 0px 0px 10px;
}
.input-group {
  /* margin: 0 auto; */
}
</style>
