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
    fetchMovies() {
      axios
        .get(this.store.api.uri + 'search/movie', {
          params: {
            api_key: store.api.key,
            query: this.searchedTerm,
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

    fetchTvSeries() {
      axios
        .get(this.store.api.uri + 'search/tv', {
          params: {
            api_key: store.api.key,
            query: this.searchedTerm,
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

    performSearch() {
      this.fetchMovies();
      this.fetchTvSeries();
    },

    getFlag(langCode) {
      if (langCode == 'it') {
        return '/images/square.png'
      }

      if (langCode == 'en') {
        return '/images/united-kingdom.png'
      }
    }
  }
}
</script>

<template>
  <div class="container mt-5 d-flex">
    <input type="text" class="form-control" v-model="searchedTerm" @keyup.enter="performSearch()">
    <button class="btn btn-primary ms-3" @click="performSearch()">Ricerca</button>
    <hr>
  </div>

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
    <ul v-for="series in store.tvSeries">
      <li>Titolo: {{ series.name }}</li>
      <li>Titolo Originale: {{ series.original_title }}</li>
      <li>Lingua:
        <img :src="getFlag(series.language)" alt="">
      </li>
      <li>Voto: {{ series.vote }}</li>
    </ul>

  </div>
</template>

<style lang="scss">
@use './assets/style/general.scss' as *;
</style>
