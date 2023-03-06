<script>
export default {
  data() {
    return {
      imagesData: null,
      imagesThumbs: null,
      showErrMsg: false,
      errorMsg: null,
      keyword: "",
    };
  },
  methods: {
    fetchData() {
      const query = this.$route.query.q1;
      /* Call API to get a list of images */
      const endpoint =
        "https://images-api.nasa.gov/search?q=" +
        (query !== undefined ? query : "*");
      this.axios
        .get(endpoint)
        .then((res) => {
          this.imagesData = res.data.collection.items;
          this.imagesThumbs = res.links;
          this.showErrMsg = false;
        })
        .catch((err) => {
          this.showErrMsg = true;
          this.errorMsg = err.message;
        });
    },
    search() {
      if (this.keyword === "") {
        return;
      }

      /* Call API to get a list of images by keyword */
      this.axios
        .get("https://images-api.nasa.gov/search?q=" + this.keyword)
        .then((res) => {
          this.imagesData = res.data.collection.items;
          this.imagesThumbs = res.links;
          this.$router.push({ path: "gallery", query: { q1: this.keyword } });
          this.showErrMsg = false;
        })
        .catch((err) => {
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
  <div id="gallery">
    <div v-show="showErrMsg" class="errMsg">{{ errorMsg }}</div>
    <div class="gallery_search_div">
      <input v-model="keyword" type="text" />
      <button @click="search">Search</button>
    </div>
    <br />
    <p v-if="imagesData?.length === 0">There is no result</p>
    <p v-if="!imagesData" v-show="!showErrMsg">Loading...</p>
    <div v-else id="gallery_imgs">
      <router-link
        :to="`/detail/${image.data[0].nasa_id}`"
        v-for="image in imagesData"
        :key="image.data[0].nasa_id"
      >
        <img v-if="image.links" :src="image.links[0].href" />
      </router-link>
    </div>
  </div>
</template>

<style>
#gallery {
  width: 100%;
  padding: 10px;
}

#gallery_imgs {
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

#gallery_imgs > a {
  height: 320px;
}

#gallery_imgs > a > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery_search_div > input {
  margin-right: 20px;
  width: 15%;
}

@media only screen and (max-width: 1000px) {
  #gallery {
    width: 100%;
    padding: 10px;
  }

  #gallery_imgs {
    display: grid;
    column-gap: 15px;
    grid-template-columns: 1fr;
  }

  #gallery_imgs > a > img {
    width: 70%;
    height: 100%;
    object-fit: cover;
  }

  .gallery_search_div > input {
    margin-right: 20px;
    width: 40%;
  }
}
</style>
