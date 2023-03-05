<script>
export default {
  data() {
    return {
      imageData: null,
      errorMsg: null,
      showErrMsg: false,
    };
  },
  methods: {
    fetchData() {
      const apiKey = process.env.VUE_APP_API_KEY;
      this.axios
        .get("https://api.nasa.gov/planetary/apod?api_key=" + apiKey)
        .then((res) => {
          this.imageData = res.data;
          this.showErrMsg = false;
        }).catch((err) => {
            this.showErrMsg = true;
            this.errorMsg = err.message;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <div id="home">
    <div v-show="showErrMsg" id="errMsg">{{ errorMsg }}</div>
    <p v-if="!imageData" v-show="!showErrMsg">Loading...</p>
    <div v-else>
      <img :src="imageData.hdurl" id="home_img"  />
      <p id="home_img_title">{{ imageData.title }}</p>
      <span id="home_img_exp">{{ imageData.explanation }}</span>
    </div>
  </div>
</template>

<style>
#home {
  width: 100%;
}

#home_img {
  width: 50%;
}

#home_img_title {
    font-style: italic;
}

#home_img_exp{
    width: 80%;
    display: inline-block;
}

#errMsg {
    color: red;
}
</style>
