<template>
  <Container>
    <div class="wrapper">
      <main class="main">
        <Tab>
          <template v-slot:postTab>タブA</template>
          <template v-slot:subTab>タブB</template>

          <template v-slot:postTabContent>
            <PostArea :posts="posts"></PostArea>
          </template>
          <template v-slot:subTabContent>タブBコンテンツ</template>
        </Tab>
      </main>
      <aside class="sidebar">
        <TimeLine />
      </aside>
    </div>
  </Container>
</template>

<script>
  import Container from './layouts/Container'
  import TimeLine from './components/TimeLine'
  import PostArea from './views/PostArea'
  import Tab from './components/Tab'

  export default {
    components: {
      Container,
      TimeLine,
      PostArea,
      Tab
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
