<template>
  <div>
    <div>
      <button>全部</button>
      <button>開発</button>
      <button>雑記</button>
    </div>
    <PostList :posts="posts" />    
  </div>
</template>

<script>
import PostList from '../components/PostList'
export default {
  components: {
    PostList
  },

  props: {
    posts: Array
  },

  data() {
    return {
      
    }
  },

  methods: {
    fetch: function () {
      
      // TODO App を特定してfetchなメソッド使う(仮)
    }
  },
}
</script>

<style>
  
</style>
