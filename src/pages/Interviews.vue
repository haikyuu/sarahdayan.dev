<template>
  <Layout>
    <div v-for="{ node } in $page.interviews.edges" :key="node.id">
      <article class="p-4" itemscope itemtype="http://schema.org/Article">
        <h3 class="text-xs font-bold uppercase" itemprop="publisher">
          {{ node.platform }}
        </h3>
        <h2 class="text-3xl font-semibold mt-4" itemprop="name">
          <a :href="node.link" target="_blank" rel="noopener">{{
            node.title
          }}</a>
        </h2>
        <p>
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
      </article>
    </div>
  </Layout>
</template>

<page-query>
query {
  interviews: allInterviews {
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
import { formattedDate } from "@/utils/date";
import mergeArrays from "@/utils/mergeArrays";

export default Vue.extend({
  metaInfo: {
    title: "Interviews"
  },
  methods: {
    formattedDate,
    merge: mergeArrays
  }
});
</script>
