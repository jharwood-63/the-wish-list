<template>
<div>
  <h2>Your Wish List</h2>
  <section class="wish-list">
    <div class="wishes" v-for="wish in wishes" :key="wish.id">
      <div class="wish">
        <p> - {{wish.wish}}</p>
      </div>
    </div>
  </section>
</div>
</template>


<script>
export default {
  name: 'WishList',
  props: {
    wishes: Array
  },
}
</script>
