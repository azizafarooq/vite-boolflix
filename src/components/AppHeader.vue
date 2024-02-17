<script>
export default {
    data() {
        return {
            searchedTerm: '',
        }
    },

    emits: ['search']
}
</script>
<template>
    <div class="container mt-5 d-flex">
        <input type="text" class="form-control" v-model="searchedTerm" @keyup.enter="$emit('search', this.searchedTerm)"
            autofocus>
        <button class="btn btn-primary ms-3" @click="$emit('search', this.searchedTerm)">Ricerca</button>
        <hr>
    </div>
</template>
<style lang="scss" scoped></style>