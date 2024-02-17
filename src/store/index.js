import { reactive } from 'vue';
export const store = reactive({
    api: {
        key: '08d0c644d8c6f8b417ef65919608b54c',
        uri: 'https://api.themoviedb.org/3/',
    },

    movies: [],
    tvSeries: [],

});