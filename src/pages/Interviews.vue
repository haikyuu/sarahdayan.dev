<template>
  <Layout>
    <div v-for="{ node } in $page.interviews.edges" :key="node.id">
      <item>
        <a :href="node.link" target="_blank" rel="noopener">
          <h3 class="text-xs font-bold uppercase" itemprop="publisher">
            {{ node.platform }}
          </h3>
          <h2 class="text-2xl font-semibold mt-4" itemprop="name">
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
      </item>
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
import Item from "@/components/Item.vue";
import { formattedDate } from "@/utils/date";
import mergeArrays from "@/utils/mergeArrays";

export default Vue.extend({
  components: {
    Item
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
