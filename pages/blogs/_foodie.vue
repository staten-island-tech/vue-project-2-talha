<template>
    <div class="post">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
  export default {
async asyncData({ $content, params, error }) {
  try {
    const [article] = await $content({ deep: true })
      .where({ dir: `/${params.foodie}` })
      .fetch()
    const moreStories = await $content({ deep: true })
      .only(['title', 'image', 'path'])
      .where({ title: { $ne: article.title } })
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    return { article, moreStories }
  } catch (err) {
    error({
      statusCode: 404,
      message: 'Page could not be found',
    })
  }
},
  }
</script>

<style scoped>
.post {
  position: relative;
  top: 3rem;
  left: 3rem;
  color: white;
  font-size: 7rem;
  -webkit-text-stroke: 3px rgb(158, 60, 60);
}
</style>
