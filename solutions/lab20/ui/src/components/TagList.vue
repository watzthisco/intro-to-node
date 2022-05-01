<template>

  <div class="tag-list">
    <div v-if="tags.length === 0">
        No Tags are here... yet.
    </div>
    <ul class="tag-list">
    <Tag
        v-for="(tag, index) in tags"
        :tag="tag"
        :key="`${tag.name}-${index}-01`"
      />
    </ul>
  </div>
</template>

<script>
import Tag from './Tag.vue';
import ApiService from "../common/api.service";

export default {
    name: 'TagList',
    components: {
    Tag
  },
  data(){
        return{
            tags: []
        }
  },
  async mounted() {
    let results = await this.fetchTags();
    this.tags = results.data.tags;
    console.log(this.tags);
  },
  computed: {
    
  },
  methods: {
    fetchTags() {
      console.log("fetching tags");
      return ApiService.query("tags").catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    }
  }
}
</script>