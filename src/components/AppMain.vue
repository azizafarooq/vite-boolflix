<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },

    methods: {
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
<style lang="scss" scoped></style>