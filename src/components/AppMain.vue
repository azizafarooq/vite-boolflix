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
                return '/images/italy.png'
            }

            if (langCode == 'en') {
                return '/images/uk.png'
            }
        }
    }
}
</script>

<template>
    <main>
        <ul v-for="movie in store.movies">
            <div class="card">
                <li><img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" class="poster"></li>
                <li>
                    <h4 class="mt-2">{{ movie.title }}</h4 class="mt-2">
                </li>
                <li>
                    <p>Titolo Originale:</p> {{ movie.original_title }}
                </li>
                <li>
                    <p>Lingua: </p>
                    <img :src="getFlag(movie.language)" alt="Non disponibile" class="flag">
                </li>
                <li>
                    <p>Voto:</p> {{ movie.vote }}/10<br />
                    <p>Rating: </p>
                    <font-awesome-icon v-for="star in 5"
                        :icon="star <= movie.vote ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
                </li>
            </div>
        </ul>

        <ul v-for="series in store.tvSeries">
            <div class="card">
                <li><img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" class="poster"></li>
                <li>
                    <h4 class="mt-2">{{ series.name.upperCase() }}</h4 class="mt-2">
                </li>
                <li>
                    <p>Titolo Originale:</p> {{ series.original_title }}
                </li>
                <li>
                    <p>Lingua: </p>
                    <img :src="getFlag(series.language)" alt="Non disponibile" class="flag">
                </li>
                <li>
                    <p>Voto: </p> {{ series.vote }} <br />
                    <p>Rating: </p>
                    <font-awesome-icon v-for="star in 5"
                        :icon="star <= series.vote_average ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
                </li>
            </div>
        </ul>

    </main>
</template>
<style lang="scss" scoped>
main {
    background-color: #434343;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    p {
        display: inline-block;
        font-weight: bold;
    }

    ul {

        .card {
            padding: 1rem;
            background-color: rgba(222, 7, 7, 0.66);
            color: white;
            cursor: pointer;
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            width: 300px;
            height: 700px;

            p {
                line-height: 0;
            }


            .poster {
                width: 266px;
            }

            .flag {
                width: 30px;
                margin-left: 0.5rem;
            }
        }
    }
}
</style>