<template>
<div class="main">
  <div>
    <h1>{{user.firstName}} {{user.lastName}}'s Wish List</h1>
    <section class="wish-list">
      <div class="list" v-for="wish in wishes" :key="wish.id">
        <div class="wish">
          <div class="lines"></div>
          <a :href=wish.link target="_blank">{{wish.wish}}</a>
        </div>
      </div>
    </section>
  </div>
  <router-link to="/edit"><i class="fas fa-edit"></i></router-link>
  <h2>
    If you are new to <strong>The Wish List</strong>, take a look at our tutorial
    <router-link to="/">here</router-link>
  </h2>
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
  color: red;
  font-size: 28px;
}

.list {
  background-color: #f5f5f5;
  width: 500px;
  margin: 0 auto;
  padding: 0;
  border-bottom: 1px dotted #ccc;
  text-indent: 25px;
  height: auto;
  padding: 10px;
  text-transform: capitalize;
}
.wish {
  color: #555;
  font-size: 22px;
  padding: 0 !important;
  width: 500px;
  font-family: courier, monospace;
  border: 1px solid #dedede;
}

.lines {
  border-left: 1px solid #ffaa9f;
  border-right: 1px solid #ffaa9f;
  width: 2px;
  float: left;
  height: 26px;
  margin-left: 40px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: red;
}

/*Responsive Design*/

@media only screen and (max-width: 767px) {
  .list {
    width: 300px;
  }
  .wish {
    width: 300px;
  }
}
</style>
