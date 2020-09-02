<template>
  <div class="tabarea">
    <header class="header">
      <nav class="nav">
        <div @click="change(1)" :class="[activeTab == 1 ? 'active' : '', 'item']">
          <slot name="postTab" />
        </div>
        <div @click="change(2)" :class="[activeTab == 2 ? 'active' : '', 'item']">
          <slot name="subTab" />
        </div>
      </nav>
    </header>
    <div class="body">
      <div v-show="activeTab === 1">
        <slot name="postTabContent" />
      </div>
      <div v-show="activeTab === 2">
        <slot name="subTabContent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1
    }
  },

  methods: {
    change: function (id) {
      if (this.activeTab === id) { return; }

      this.activeTab = id
    }
  },
}
</script>

<style scoped lang="scss">
  .body {
    margin-top: 20px;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 48%;
      border-bottom: 2px solid #ddd;
      cursor: pointer;

      &.active {
        border-bottom-color: #252525;
      }
    }
    
    .item + .item {
      margin-left: 4%;
    }
  }
</style>
