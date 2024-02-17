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
            <li>Voto: {{ movie.vote }}<br />
                Stars:
                <font-awesome-icon v-for="star in 5"
                    :icon="star <= movie.vote ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
            </li>
            <li><img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt=""></li>
        </ul>

        <hr>

        <h2>Serie Tv</h2>
        <ul v-for="series in store.tvSeries">
            <li>Titolo: {{ series.name }}</li>
            <li>Titolo Originale: {{ series.original_title }}</li>
            <li>Lingua:
                <img :src="getFlag(series.language)" alt="">
            </li>
            <li>Voto: {{ series.vote }} <br />
                <font-awesome-icon v-for="star in 5"
                    :icon="star <= series.vote_average ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
            </li>

            <li><img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" alt=""></li>
        </ul>

    </div>
</template>
<style lang="scss" scoped></style>