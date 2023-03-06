<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/about">About NASA</router-link>
  </div>
  <div id="nav_drop" @click="expandMenu">
    <img src="./assets/menuIcon.png" />
    <div id="nav_drop_options">
      <router-link to="/">Home</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/about">About NASA</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    expandMenu() {
      const ele = document.getElementById("nav_drop_options");
      if (ele.style.display === "none") {
        ele.style.display = "block";
      } else {
        ele.style.display = "none";
      }
    },
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

#nav_drop,
#nav_drop_options {
  display: none;
}

.errMsg {
  color: red;
}

@media only screen and (max-width: 1000px) {
  #nav {
    display: none;
  }

  #nav_drop a {
    font-weight: 500;
    color: #2c3e50;
  }

  #nav_drop {
    padding-bottom: 5px;
    display: block;
    margin: 10px;
    border-bottom: 1px solid rgb(179, 176, 176);
  }

  #nav_drop > img {
    width: 5%;
  }

  #nav_drop_options {
    display: block;
  }

  #nav_drop_options > a {
    display: block;
    border-top: 1px solid rgb(176, 174, 174);
    text-decoration: none;
    padding: 5px 0px;
  }

   #nav_drop_options a:hover {
    background-color: #d1d6d4;
  }

  #nav_drop a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
