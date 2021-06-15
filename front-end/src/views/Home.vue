<template>
  <div class="tutorial">
    <h1>Welcome to The Wish List!</h1>
    <div class="intro">
      <h3>This page will show you how to use this app</h3>
    </div>
    <div class="what">
      <h2>What is The Wish List</h2>
      <p><strong>The Wish List</strong> is an app that keeps all of your wishes in one place.</p>
      <p>You can add your wishes and a link for each wish in a secure personal account</p>
    </div>
    <h2>How does it work?</h2>
    <div class="step">
      <div class="frame">
        <img src="../images/your-wish-list.jpg" width='250'/>
        <div class="explain">
          <p>After logging in or creating an account you will see the <em>Your Wish List</em> page</p>
          <p>From here you can click on the red edit icon at the bottom of the list <br>to add things to your list or edit already existing items</p>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="frame">
        <img src="../images/edit-list.jpg" width='250'/>
        <div class="explain">
          <p>From the edit page, you can enter a new wish and link and click add to add things to your list</p>
          <p>You can also click the edit button to change an item, link, or delete an item</p>
          <p>Clicking the red arrow button at the bottom will take you back to the my list page</p>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="frame">
        <img src="../images/complete-edits.jpg" width='250'/>
        <div class="explain">
          <p>After clicking the edit button, each item and link in the list will become editable.</p>
          <p>After each change, click the submit button to save your changes.<br> Be sure to only edit one item at a time.</p>
          <p>Also, be sure to click on the field you want to edit before highlighting or changing it</p>
        </div>
      </div>
    </div>
    <p class="get-started">
      <strong>
        Get started
        <router-link to="/login">here</router-link>
      </strong>
    </p>
    <a href="https://github.com/jharwood-63/the-wish-list" target="_blank">GitHub -- 17 Hours</a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style scoped>
.tutorial {
  text-align: center;
}

h2 {
  font-size: 23px;
}

p {
  font-size: 15px;
}

.step {
  display: inline-block;
  margin: 20px;
}

.frame {
  width: 250px;
  height: 200px;
  vertical-align: middle;
  text-align: center;
  display: table-cell;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}

.get-started {
  font-size: 18px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: red;
}
</style>
