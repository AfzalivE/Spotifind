<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
        <div class="card card-signup">
          <form class="form">
            <div class="header header-primary text-center">
              <h4>Search</h4>
            </div>
            <div class="content">
              <div class="input-group">
                <div class="form-group is-empty">
                  <input type="text" class="form-control" placeholder="Search">
                  <span class="material-input"></span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.card-signup {
  margin: 160px 0 40px;
}
</style>
