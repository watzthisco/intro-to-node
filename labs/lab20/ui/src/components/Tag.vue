<template>
    <li class="tag-default tag-pill tag-outline">{{tag}}</li>
</template>

<script>
export default {
    name: 'Tag',
    
    props: {
      tag: { type: String, required: true }
    },
    
    
}
</script>