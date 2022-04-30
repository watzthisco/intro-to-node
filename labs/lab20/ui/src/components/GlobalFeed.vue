<template>
    <div class="home-global"><ArticleList type="all" /></div>
</template>
<script>
import ArticleList from './ArticleList.vue'
export default {
    name: "GlobalFeed",
    components: {
        ArticleList
    }
}
</script>