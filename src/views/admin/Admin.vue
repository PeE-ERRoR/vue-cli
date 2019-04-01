<template>
  <div class="admin">

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Admin from '@/components/Admin.vue'; // @ is an alias to /src

export default Vue.extend({
  data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false
  }),
  props: {
    source: String
  },
  name: 'admin',
  components: {
    Admin,
  },
});
</script>
