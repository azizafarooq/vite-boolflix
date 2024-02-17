<script >
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
      store,
    }
  },

  methods: {
    fetchMovies(searchedTerm) {
      axios
        .get(this.store.api.uri + 'search/movie', {
          params: {
            api_key: store.api.key,
            query: searchedTerm,
          }
        })
        .then((response) => {
          store.movies = response.data.results.map((movie) => {
            return {
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average
            }
          });
        })
    },

    fetchTvSeries(searchedTerm) {
      axios
        .get(this.store.api.uri + 'search/tv', {
          params: {
            api_key: store.api.key,
            query: searchedTerm,
          }
        })
        .then((response) => {
          store.tvSeries = response.data.results.map((series) => {
            return {
              name: series.name,
              original_title: series.original_name,
              language: series.original_language,
              vote: series.vote_average
            }
          });
        })
    },

    performSearch(searchedTerm) {
      this.fetchMovies(searchedTerm);
      this.fetchTvSeries(searchedTerm);
    }
  },

  components: { AppHeader, AppMain }
}
</script>

<template>
  <AppHeader @search="performSearch"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss">
@use './assets/style/general.scss' as *;
</style>
