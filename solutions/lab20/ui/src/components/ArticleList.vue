<template>
  <div>
    <input
      class="form-control"
      v-model.number = "searchDetails"
      placeholder="filter articles"
    >   
    <div v-if="isLoading" class="article-preview">Loading articles...</div>
    <div v-else>
    <div v-if="articles.length === 0" class="article-preview">
      No articles are here ..yet.
    </div>    
    <ArticlePreview
      v-for="(article, index) in filterIt"
      :article="article"
      :key="article.title + index"
      :style="{ fontSize: articleFontSize + 'em' }"
    />
  </div>
  </div>
</template>

<script>
import ArticlePreview from './ArticlePreview.vue'
// import ApiService from "../common/api.service.js"
import {filter} from "../mixins/filter";
import {mapGetters} from "vuex";
import {FETCH_ARTICLES} from "../store/actions.type"

export default {
    name: "ArticleList",
    mixins: [filter],
    components: {
        ArticlePreview
    },
    data() {
        return {
            // articles: articles,
            // articles: [],
            articleFontSize:1,
            searchDetails: ''
        }
    },
    async mounted() {
          //let results = await this.fetchArticles();
          //this.articles = results.data.articles;
          //console.log(this.articles);
          this.fetchArticles();
    },      
    methods: {
    fetchArticles() {
      console.log("fetching articles");
      //return ApiService.query("articles").catch(error => {
      //  throw new Error(`[RWV] ApiService ${error}`);
      //});
      this.$store.dispatch(FETCH_ARTICLES, this.listConfig);
    }
  },
  computed: {
    listConfig() {
      const {type} = this;
      return {
        type,
      };
    },
    ...mapGetters(["articlesCount", "isLoading", "articles"])
  }
}
</script>
<style>
</style>