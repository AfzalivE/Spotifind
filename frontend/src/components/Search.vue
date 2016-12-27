<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
      <div class="search">
        <form class="form" v-on:submit.prevent="">
          <div class="input-group">
            <div class="form-group is-empty">
              <input class="form-control" type="text" name="search" v-model="search" placeholder="Search"/>
              <span class="material-input">
            </div>
          </div>
          <button class="btn btn-simple btn-primary btn-lg" @click="doSearch()">Search</button>
        </form>
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
      this.$router.push({
        path: '/show/' + this.search
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
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 0px 30px 0px 10px;
}
.input-group {
  margin: 0 auto;
}
</style>
