<template>
  <div>
    <v-toolbar dark color="indigo">
      <router-link to="/">
        <v-icon>check_circle</v-icon>
      </router-link>
      <v-toolbar-title class="white--text">My Todo</v-toolbar-title>
    </v-toolbar>
    <v-text-field v-model="newTodo" placeholder="Input here..."></v-text-field>
    <v-btn dark color="indigo" v-on:click="addTodo()" class="white--text">ADD</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ""
    }
  },
  methods: {
    addTodo() {
      if (this.newTdo === '') return;
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.push(this.newTdo);
      localStorage.setItem('todos', JSON.stringify(todos));
      this.newTdo = '';
      this.$router.push("/");
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>