<template>
  <div id="app">
    <header id="header">
      <h1>The Wish List</h1>
      <nav>
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/login"><i class="fas fa-user"></i></router-link>
        <div class="animation start-home"></div>
      </nav>
    </header>
    <router-view />
    <footer id="footer" v-if="user">
      <div class="buttons">
        <button type="submit" class="button-log" @click.prevent="logout">Logout</button>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  computed: {
    user() {
      return this.$root.$data.user;
    }
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
  },
}
</script>

<style>
h2 {
  margin-top: 45px;
  text-align: center;
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

nav {
	margin: 27px auto 0;
	position: relative;
	width: 210px;
	height: 50px;
	background-color: #022140;
	border-radius: 8px;
	font-size: 0;
}

nav a {
	line-height: 50px;
	height: 100%;
	font-size: 15px;
	display: inline-block;
	position: relative;
	z-index: 1;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	color: white;
	cursor: pointer;
}

nav .animation {
	position: absolute;
	height: 100%;
	top: 0;
	z-index: 0;
	transition: all .5s ease 0s;
	border-radius: 8px;
}

a:nth-child(1) {
	width: 100px;
}

a:nth-child(2) {
	width: 110px;
}

nav .start-home, a:nth-child(1):hover~.animation {
	width: 100px;
	left: 0;
	background-color: #2D5F5D;
}

nav .start-about, a:nth-child(2):hover~.animation {
	width: 110px;
	left: 100px;
	background-color: #494B68;
}

body {
	font-size: 12px;
	font-family: sans-serif;
	background: url(https://www.teahub.io/photos/full/125-1253801_website-background.png) no-repeat center;
}

h1 {
	text-align: center;
	margin: 40px 0 40px;
	text-align: center;
	font-size: 30px;
	color: #ecf0f1;
	text-shadow: 2px 2px 4px #000000;
	font-family: 'Cherry Swash', cursive;
}

span {
    color: #2BD6B4;
}

/*Responsive Design*/

@media only screen and (max-width: 767px) {
  .button-log {
    padding-right: 65px;
  }
  body {
    background-color: #265077;
  }
}
</style>
