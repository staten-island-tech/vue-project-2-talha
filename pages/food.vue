<template>
  <div>
    <NavBar />
    <h1 class="header">food</h1>
  </div>
  <!-- <div class="container">
    <h1 class="title">Food</h1>
  </div> -->
</template>

<script>
// import NavBar from "../components/NavBar.vue";
export default {
  // name: "NavBar",
  // components: {
  //   NavBar,
  // },
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-top: 10rem;
}

.title {
  position: relative;
  top: 30%;
  left: 40%;
  color: white;
  font-size: 10rem;
  -webkit-text-stroke: 3px rgb(158, 60, 60);
}
</style>