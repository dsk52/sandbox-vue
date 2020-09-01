<template>
  <div>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <span>{{ categoryConvert(post.category) }}</span>
        <span class="title">
          {{ post.title }}
        </span>
        <time class="pub-date">{{ post.pubDate }}</time>
        <span>{{ post.body }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { category2Str } from '../utilities/category'

export default {
  props: {
    posts: Array
  },

  methods: {
    categoryConvert: (num) => {
      return category2Str(num)
    } 
  },
}
</script>

<style>

</style>
