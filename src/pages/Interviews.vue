<template>
  <Layout>
    <template v-slot:intro>
      <p class="mt-4">
        I've been invited to participate a handful of podcasts and give a few
        interviews.
      </p>
    </template>
    <list :items="$page.interviews.edges">
      <template v-slot:item="{ item: { node } }">
        <a :href="node.link" target="_blank" rel="noopener">
          <h3
            class="text-xs font-bold uppercase text-twilight"
            itemprop="publisher"
          >
            {{ node.platform }}
          </h3>
          <h2 class="mt-4 text-2xl font-semibold text-twilight" itemprop="name">
            {{ node.title }}
          </h2>
          <p class="mt-2">
            With
            <span itemprop="author">
              {{ merge(node.hosts, node.guests).join(", ") }}
            </span>
          </p>
          <time
            itemprop="datePublished"
            :datetime="node.time"
            :content="node.time"
            >{{ formattedDate(node.date) }}
          </time>
        </a>
      </template>
    </list>
  </Layout>
</template>

<page-query>
query {
  interviews: allInterview {
    edges {
      node {
        id
        title
        link
        platform
        hosts
        guests
        date
      }
    }
  }
}
</page-query>

<script>
import Vue from "vue";
import List from "@/components/List.vue";
import { formattedDate } from "@/utils/date";
import mergeArrays from "@/utils/mergeArrays";

export default Vue.extend({
  components: {
    List
  },
  metaInfo: {
    title: "Interviews"
  },
  methods: {
    formattedDate,
    merge: mergeArrays
  }
});
</script>
