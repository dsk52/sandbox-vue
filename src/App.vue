<template>
  <div>
    <Container>
      <div class="wrapper">
        <main class="main">
          aaa
        </main>
        <aside class="sidebar">
          bbb
        </aside>
      </div>
    </Container>
  </div>
</template>

<script>
  import Container from './layouts/Container'

  export default {
    components: {
      Container
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
