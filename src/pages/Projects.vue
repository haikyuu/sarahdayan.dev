<template>
  <Layout>
    <h1>Projects</h1>
    <p>
      I'm often working on new things. Here are a few of my favorite projects
      I've built.
    </p>
    <p>
      You can find more on
      <a href="https://github.com/sarahdayan/" rel="noopener" target="_blank"
        >GitHub</a
      >.
    </p>
    <div v-for="{ node } in $page.repositories.edges" :key="node.id">
      <article itemscope itemtype="http://schema.org/CreativeWork">
        <h2 itemprop="name">
          <a :href="node.link" target="_blank" rel="noopener">{{
            node.title
          }}</a>
        </h2>
        <p>{{ node.description }}</p>
        <ul>
          <li>Language: {{ node.language }}</li>
          <li>Stars: {{ formattedCount(node.stars) }}</li>
        </ul>
      </article>
    </div>
  </Layout>
</template>

<page-query>
query {
  repositories: allRepositories {
    edges {
      node {
        id
        title: name
        description
        link: html_url
        language
        stars: stargazers_count
      }
    }
  }
}
</page-query>

<script>
import Vue from "vue";

export default Vue.extend({
  metaInfo: {
    title: "Projects"
  },
  methods: {
    formattedCount(count) {
      const formatter = new Intl.NumberFormat("en-US");

      return formatter.format(count);
    }
  }
});
</script>
