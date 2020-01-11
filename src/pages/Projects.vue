<template>
  <Layout>
    <div v-for="{ node } in $page.repositories.edges" :key="node.id">
      <item>
        <a :href="node.link" target="_blank" rel="noopener">
          <p class="text-xs font-bold uppercase">{{ node.language }}</p>
          <h2 class="text-2xl font-semibold mt-4" itemprop="name">
            {{ node.title }}
          </h2>
          <p class="mt-2">{{ node.description }}</p>
          <p>{{ formattedCount(node.stars) }} stars</p>
        </a>
      </item>
    </div>
  </Layout>
</template>

<page-query>
query {
  repositories: allRepository {
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
import Item from "@/components/Item.vue";
import { formattedCount } from "@/utils/count";

export default Vue.extend({
  metaInfo: {
    title: "Projects"
  },
  components: {
    Item
  },
  methods: {
    formattedCount
  }
});
</script>
