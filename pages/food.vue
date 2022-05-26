<template>
  <div>
      <FoodBackground />
      <NavBar />
    <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <nuxt-content :document="article" />
  </article>
    </div>
    
</template>

<script>
export default {
  name: 'FoodPage',
  data() {
    return {
      articles: [],
    }
  },
  head() {
    return {
      title: 'Food Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'blog content here',
        }
      ]
    }
  },
  async fetch() {
    this.articles = await this.$content('articles').fetch()
  }
};
// export default {
//   async asyncData({ $content, params }) {
//     const article = await $content("articles", params.slug).fetch();

//     return { article };
//   }
// }
</script>

<style scoped>
.title {
  position: relative;
  top: 3rem;
  left: 3rem;
  color: white;
  font-size: 7rem;
  -webkit-text-stroke: 3px rgb(158, 60, 60);
  };

    .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  };
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  };
  .nuxt-content p {
    margin-bottom: 20px;
  }



</style>
