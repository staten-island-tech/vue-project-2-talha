<template>
  <div>
      <FoodBackground />
      <NavBar />
    </div>
</template>

<script>
export default {
  // name: 'FoodPage',
  // data() {
  //   return {
  //     articles: [],
  //   }
  // },
  // head() {
  //   return {
  //     title: 'Food Blog',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'blog content here',
  //       }
  //     ]
  //   }
  // },
  // async fetch() {
  //   this.articles = await this.$content('articles').fetch()
  // }
};
</script>

<style scoped>
.title {
  position: relative;
  top: 3rem;
  left: 3rem;
  color: white;
  font-size: 7rem;
  -webkit-text-stroke: 3px rgb(158, 60, 60);
}



</style>
