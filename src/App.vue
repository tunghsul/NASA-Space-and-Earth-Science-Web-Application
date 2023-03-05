<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/gallery">Gallery</router-link> | 
    <router-link to="/about">About NASA</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  setup() {
    console.log("hello world");
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  width: 90%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
