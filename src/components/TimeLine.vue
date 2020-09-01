<template>
  <div>
    <Timeline id="skd_nw" sourceType="profile" :options="{ height: 400 }" />
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
  name: 'TimeLine',
  components:{
    Timeline,
  },
}
</script>
