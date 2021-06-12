<template>
<div class="main">
  <div class="greeting">
    <h2>Merry Christmas, {{user.firstName}}  {{user.lastName}} </h2>
    <h2>Member of Group: {{user.groupName}} </h2>
  </div>
  <div class="buttons">
    <button type="submit" class="button" @click.prevent="logout">Logout</button>
  </div>
  <div>
    <h2>Your Wish List</h2>
    <section class="wish-list">
      <div class="list" v-for="wish in wishes" :key="wish.id">
        <div class="wish">
          <p> - {{wish.wish}}</p>
        </div>
      </div>
    </section>
  </div>
  <router-link to="/edit"><i class="fas fa-edit"></i></router-link>
  <p v-if="error">{{error}}</p>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MyList',
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
  created() {
    this.getWishes();
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
    async getWishes() {
      try {
        this.response = await axios.get("/api/wishes");
        this.wishes = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  color: white;
}

.buttons {
  display: flex;
  justify-content: center;
}

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
  display: flex;
  justify-content: center;
  color: white;
  font-size: 28px;
}

.wish {
  display: flex;
  justify-content: center;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: #ecf0f1;
  font-family: 'Cherry Swash',cursive;
  font-size: 16px;
}

</style>
