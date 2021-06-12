<template>
<div>
  <div class="header">
    <h2>My Wish List</h2>
  </div>
  <section class="edit-wish">
    <div class="wishes" v-for="wish in wishes" :key="wish.id">
      <div class="wish" v-if="edit">
        <input v-model="wish.wish">
      </div>
      <div class="wish" v-else>
        <p> - {{wish.wish}}</p>
      </div>
    </div>
    <div class="buttons" v-if="edit">
      <button type="submit" class="button" @click.prevent="submitChange">Submit</button>
    </div>
    <div class="buttons" v-else>
      <button type="submit" class="button" @click.prevent="toggleEdit">Edit</button>
    </div>
  </section>
  <div class="add">
    <input class="input" placeholder="Wish" v-model="newWish">
    <button type="submit" class="button" @click.prevent="addWish">Add</button>
  </div>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'WishList',
  props: {
    wishes: Array
  },
  data() {
    return {
      edit: false,
      newWish: '',
    }
  },
  methods: {
    toggleEdit() {
      if (this.edit === null || this.edit === false) {
        this.edit = true;
      }
      else {
        this.edit = true;
      }
    },
    submitChange() {
      try {
        await axios.put("api/items/" + this.$route.params.id, {
          wish: this.wish.wish;
        });
      }
      this.edit = false;
    },
    async addWish() {
      if (!this.newWish)
        return;
      try {
        this.response = await axios.post("/api/wishes", {
          wish: this.newWish,
        });
        this.getWishes();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
}
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 30px;
  color: white;
}

.wishes {
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: #ecf0f1;
  font-family: 'Cherry Swash',cursive;
  font-size: 16px;
}

.wish {
  display: flex;
  justify-content: center;
}

p {
  margin-right: 20px;
}

.add {
  margin-top: 20px;
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

.buttons {
  display: flex;
  justify-content: center;
}
</style>
