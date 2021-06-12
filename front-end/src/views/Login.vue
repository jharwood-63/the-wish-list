<template>
<div class="login">
  <MyList v-if="user" />
  <Register v-else />
</div>
</template>

<script>
import axios from 'axios';
import MyList from '@/components/MyList.vue';
import Register from '@/components/Register.vue';
export default {
  name: 'login',
  components: {
    MyList,
    Register,
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>
