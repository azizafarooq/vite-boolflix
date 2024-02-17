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
    <div class=" header">
        <h1>BOOLFLIX</h1>
        <div class="searchbar">
            <input type="text" v-model="searchedTerm" @keyup.enter="$emit('search', this.searchedTerm)" autofocus
                placeholder="Inserisci un titolo">
            <button class="btn-header" @click="$emit('search', this.searchedTerm)">Ricerca</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.header {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 4rem;

    h1 {
        color: red;
    }

    .searchbar {
        display: flex;
        gap: 0.5rem;

        .btn-header {
            background-color: red;
            padding: 0.3rem;
            color: black;
            border: 1px solid red;
        }
    }


}
</style>