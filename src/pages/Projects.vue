<template>
  <Layout>
    <list :items="$page.repositories.edges">
      <template v-slot:item="{ item: { node } }">
        <a :href="node.link" target="_blank" rel="noopener">
          <p class="text-xs text-twilight font-bold uppercase">
            {{ node.language }}
          </p>
          <h2
            class="text-2xl text-twilight capitalize font-semibold mt-4"
            itemprop="name"
          >
            {{ node.title }}
          </h2>
          <p class="mt-2">{{ node.description }}</p>
          <p>{{ formattedCount(node.stars) }} stars</p>
        </a>
      </template>
    </list>
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
import List from "@/components/List.vue";
import { formattedCount } from "@/utils/count";

export default Vue.extend({
  metaInfo: {
    title: "Projects"
  },
  components: {
    List
  },
  methods: {
    formattedCount
  }
});
</script>
