<template>
  <Layout>
    <h1>Interviews</h1>
    <p>
      I've been invited to participate a handful of podcasts and give a few
      interviews.
    </p>
    <div v-for="{ node } in $page.interviews.edges" :key="node.id">
      <article itemscope itemtype="http://schema.org/Article">
        <h2 itemprop="name">
          <a :href="node.link" target="_blank" rel="noopener">{{
            node.title
          }}</a>
        </h2>
        <h3 itemprop="publisher">{{ node.platform }}</h3>
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
  },
});
</script>
