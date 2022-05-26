<template>
  <article class="container">
    <nav>
      <div class="con">
        <h2>Table of Contents</h2>
      <ul >
        <li v-for="link of article.toc" :key="link.id" class="links">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
      </div>
    </nav>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ article.updatedAt }}</p>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
};
</script>

<style>
.con {
  color: white;
}

.container {
  color: rgb(255, 255, 255);
  background-color: rgb(107, 36, 36);
}

.nuxt-content h1 {
  font-weight: bold;
  font-size: 28px;
  color: rgb(255, 255, 255);
  background-color: rgb(107, 36, 36);
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
  color: rgb(255, 255, 255);
  background-color: rgb(107, 36, 36);
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
   color: rgb(255, 255, 255);
  background-color: rgb(107, 36, 36);
}
.nuxt-content p {
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  background-color: rgb(107, 36, 36);
}


</style>
