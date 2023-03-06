<script>
export default {
  data() {
    return {
      imageData: null,
      showErrMsg: false,
      errorMsg: null,
      imageMDLocation: null,
      imageMetaData: null,
    };
  },
  methods: {
    fetchData() {
      const id = this.$route.params.id;
      /* Call API to get image */
      this.axios
        .get("https://images-api.nasa.gov/asset/" + id)
        .then((res) => {
          this.imageData = res.data.collection;
          this.showErrMsg = false;
        })
        .catch((err) => {
          this.showErrMsg = true;
          this.errorMsg = err.message;
        });

      /* Call API to get image's metadata location */
      this.axios
        .get("https://images-api.nasa.gov/metadata/" + id)
        .then((res) => {
          this.imageMDLocation = res.data.location;
          this.showErrMsg = false;
        })
        .catch((err) => {
          this.showErrMsg = true;
          this.errorMsg = err.message;
        });
    },
    fetchMetaData() {
      /* Call API to get image's metadata */
      this.axios
        .get(this.imageMDLocation)
        .then((res) => {
          this.imageMetaData = res.data;
          this.showErrMsg = false;
        })
        .catch((err) => {
          this.showErrMsg = true;
          this.errorMsg = err.message;
        });
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    imageMDLocation() {
      this.fetchMetaData();
    },
  },
};
</script>

<template>
  <div id="detail">
    <div v-show="showErrMsg" class="errMsg">{{ errorMsg }}</div>
    <p v-if="!imageData" v-show="!showErrMsg">Loading...</p>
    <div v-else>
      <img :src="imageData.items[0].href" id="detail_img" />
      <p v-if="!imageMetaData" v-show="!showErrMsg">Loading...</p>
      <div v-else>
        <p id="detail_img_title">Title: {{ imageMetaData["AVAIL:Title"] }}</p>
        <p id="detail_img_title">
          Date captured: {{ imageMetaData["AVAIL:DateCreated"] }}
        </p>
        <span id="detail_img_exp"
          >Description: {{ imageMetaData["AVAIL:Description"] }}</span
        >
      </div>
    </div>
  </div>
</template>

<style>
#detail {
  width: 100%;
}

#detail_img {
  width: 60%;
}

#detail_img_title {
  font-style: italic;
}

#detail_img_exp {
  width: 80%;
  display: inline-block;
}

@media only screen and (max-width: 1000px) {
  #detail_img {
    width: 70%;
  }
}
</style>
