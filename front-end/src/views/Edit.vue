<template>
<div>
  <div class="header">
    <h2>My Wish List</h2>
  </div>
  <section class="edit-wish">
    <div class="wishes" v-for="wish in wishes" :key="wish.id">
      <div class="wish" v-if="edit">
        <input v-model="wish.wish" @click.prevent="selectWish(wish)">
      </div>
      <div class="wish" v-else>
        <p> - {{wish.wish}}</p>
      </div>
    </div>
    <div class="buttons" v-if="edit">
      <button type="submit" class="button" @click.prevent="submitChange(findWish)">Submit</button>
    </div>
    <div class="buttons" v-else>
      <button type="submit" class="button" @click.prevent="toggleEdit">Edit</button>
    </div>
  </section>
  <div class="add">
    <textarea class="input" placeholder="Wish" v-model="newWish"></textarea>
    <button type="submit" class="button" @click="addWish">Add</button>
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
      wish: '',
      error: '',
      newWish: '',
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
      try {
        this.response = await axios.put("api/wishes/" + wish._id, {
          wish: wish.wish,
        });
        this.findWish = null;
        this.edit = false;
        this.getWishes();
      } catch (error) {
        this.error = error.response.data.message;
      }
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
    selectWish(wish) {
      this.findWish = wish;
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
