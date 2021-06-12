<template>
<div class="main">
  <div class="greeting">
    <h2>Merry Christmas, {{user.firstName}}  {{user.lastName}} </h2>
    <h2>Member of Group: {{user.groupName}} </h2>
    <button type="submit" class="button" @click.prevent="logout">Logout</button>
  </div>
  <wish-list :wishes="wishes" />
  <router-link to="/edit"><i class="fas fa-edit"></i></router-link>
  <p v-if="error">{{error}}</p>
</div>
</template>

<script>
import axios from 'axios';
import WishList from '@/components/WishList.vue';
export default {
  name: 'MyList',
  components: {
    WishList,
  },
  data() {
    return {
      show: false,
      wishes: [],
      error: '',
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style scoped>
button {
  text-transform: uppercase;
  width: 10%;
  color: #fff;
  display: block;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255,255,255,.1);
  background: #1161ee;
}

i.fas{
  color: white;
  font-size: 28px;
}
</style>
