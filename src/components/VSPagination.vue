<template>
    <div>
        <div class="pagination-row">
            <button class="pagination-button">&lt;-</button>
            <span v-for="(item, index) in new Array(10)" :key="index">
                <button class="pagination-button">{{index + 1}}</button>
            </span>
            <button class="pagination-button">-&gt;</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VSPagination'
        
    }
</script>

<style lang="css" scoped>
.pagination-row {
    padding: 5px 0;
}
.pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
}
</style>