<script >
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
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
    },

    getFlag(langCode) {
      if (langCode == 'it') {
        return '/images/square.png'
      }

      if (langCode == 'en') {
        return '/images/united-kingdom.png'
      }
    }
  },

  components: { AppHeader }
}
</script>

<template>
  <AppHeader @search="performSearch"></AppHeader>

  <div class="mt-5 container">
    <h2>Film</h2>
    <ul v-for="movie in store.movies">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo Originale: {{ movie.original_title }}</li>
      <li>Lingua:
        <img :src="getFlag(movie.language)" alt="">
      </li>
      <li>Voto: {{ movie.vote }}</li>
    </ul>
    <hr>
    <h2>Serie Tv</h2>
    <!--<ul v-for="series in store.tvSeries">
      <li>Titolo: {{ series.name }}</li>
      <li>Titolo Originale: {{ series.original_title }}</li>
      <li>Lingua:
        <img :src="getFlag(series.language)" alt="">
      </li>
      <li>Voto: {{ series.vote }}</li>
    </ul>-->

  </div>
</template>

<style lang="scss">
@use './assets/style/general.scss' as *;
</style>
