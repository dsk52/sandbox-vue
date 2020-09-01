<template>
  <div>
    <Container>
      <div class="wrapper">
        <main class="main">
          <PostList :posts="posts" />
        </main>
        <aside class="sidebar">
          <TimeLine />
        </aside>
      </div>
    </Container>
  </div>
</template>

<script>
  import Container from './layouts/Container'
  import TimeLine from './components/TimeLine'
  import PostList from './components/PostList'

  export default {
    components: {
      Container,
      TimeLine,
      PostList
    },

    data() {
      return {
        posts: []
      }
    },

    created() {
      this.fetchData()
    },

    methods: {
      fetchData: function () {
        let posts = [
        {
          title: 'hogehoge',
          pubDate: '2020-09-01 00:00',
          category: 1,
          body: 'hogehogehogehogehogehoge'
        },
        {
          title: 'fugafuga',
          pubDate: '2020-08-30 00:00',
          category: 2,
          body: 'fugafugafuga'
        }
      ];
      this.posts = posts
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .main {
    width: 70%;
  }

  .sidebar {
    width: 30%;
  }
</style>
