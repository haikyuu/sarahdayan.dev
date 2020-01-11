<template>
  <Layout>
    <div v-for="{ node } in $page.repositories.edges" :key="node.id">
      <article class="p-4" itemscope itemtype="http://schema.org/CreativeWork">
        <p class="text-xs font-bold uppercase">{{ node.language }}</p>
        <h2 class="text-3xl font-semibold mt-4" itemprop="name">
          <a :href="node.link" target="_blank" rel="noopener">{{
            node.title
          }}</a>
        </h2>
        <p class="mt-2">{{ node.description }}</p>
        <!-- <ul>
          <li>Stars: {{ formattedCount(node.stars) }}</li>
        </ul> -->
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
