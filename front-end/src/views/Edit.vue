<template>
<div>
  <div class="header">
    <h1>Edit Your List</h1>
  </div>
  <section class="edit-wish">
    <div class="wishes" v-for="wish in wishes" :key="wish.id">
      <div class="wish-edit" v-if="edit">
        <div class="lines-edit"></div>
        <div class="edit-input">
          <input v-model="wish.wish" @click.prevent="selectWish(wish)">
          <input class="url" v-model="wish.link" @click.prevent="selectWish(wish)">
        </div>
        <button v-on:click="deleteWish(wish)" class="delete">X</button>
      </div>
      <div class="wish" v-else>
        <div class="lines"></div>
        <a :href=wish.link target="_blank">{{wish.wish}}</a>
      </div>
    </div>
  </section>
  <div class="buttons" v-if="edit">
    <button type="submit" class="button" @click.prevent="submitChange(findWish)">Submit</button>
  </div>
  <div class="buttons" v-else>
    <button type="submit" class="button" @click.prevent="toggleEdit">Edit</button>
  </div>
  <div class="add">
    <input placeholder="Wish" onfocus="this.value=''" v-model="newWish">
    <input placeholder="Link" onfocus="this.value=''" v-model="newLink">
    <button type="submit" class="button" @click="addWish">Add</button>
  </div>
  <div class="buttons">
    <router-link to="/login"><i class="fas fa-caret-square-left"></i></router-link>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Edit',
  data() {
    return {
      wishes: [],
      edit: false,
      error: '',
      newWish: '',
      newLink: '',
      findWish: null,
    }
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
    toggleEdit() {
      if (this.edit === null || this.edit === false) {
        this.edit = true;
      }
      else {
        this.edit = true;
      }
    },
    async submitChange(wish) {
      if (wish === null) {
        this.edit = false;
      }
      try {
        this.response = await axios.put("api/wishes/" + wish._id, {
          wish: wish.wish,
          link: wish.link,
        });
        this.findWish = null;
        this.edit = false;
        this.getWishes();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async addWish() {
      if (!this.newWish || !this.newLink)
        return;
      try {
        this.response = await axios.post("/api/wishes", {
          wish: this.newWish,
          link: this.newLink,
        });
        this.getWishes();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    selectWish(wish) {
      this.findWish = wish;
    },
    async deleteWish(wish) {
      try {
        this.response = await axios.delete("/api/wishes/" + wish._id);
        this.getWishes();
      } catch (error) {
        this.error = error.response.data.message;
      }
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 30px;
  color: white;
}

.url {
  margin-left: 25px;
}

.delete {
  height: 50%;
}

.wish-edit {
  display: flex;
  color: #555;
  font-size: 22px;
  padding: 0 !important;
  width: 450px;
  font-family: courier, monospace;
  border: 1px solid #dedede;
}

.edit-input {
  float: left;
}

.edit-wish {
  background-color: #f5f5f5;
  width: 460px;
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
  width: 460px;
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

.lines-edit {
  border-left: 1px solid #ffaa9f;
  border-right: 1px solid #ffaa9f;
  width: 2px;
  float: left;
  height: 87px;
  margin-left: 40px;
}

.add {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

button {
  text-transform: uppercase;
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: #1161ee;
}

.buttons {
  display: flex;
  justify-content: center;
}

i.fas {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  color: red;
  font-size: 28px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: red;
}
</style>
