<script >
import axios from 'axios';
import { store } from './store';
export default {
  data() {
    return {
      store,
      searchedTerm: '',
    }
  },

  methods: {
    performSearch() {
      axios.get().then((res) => {
        console.log(res.data);
      })
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <input type="text" class="form-control" v-model="searchedTerm" @keyup.enter="performSearch()">
    <button class="btn btn-primary" @click="performSearch()">Ricerca</button>
  </div>
</template>

<style lang="scss">
@use './assets/style/general.scss' as *;
</style>
