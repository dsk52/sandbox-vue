<template>
  <div>
    <Container>
      <div class="wrapper">
        <main class="main">
          aaa
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

  export default {
    components: {
      Container,
      TimeLine
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
