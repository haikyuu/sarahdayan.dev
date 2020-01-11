<template>
  <Layout>
    <div v-for="{ node } in $page.talks.edges" :key="node.id">
      <article class="p-4" itemscope itemtype="http://schema.org/Event">
        <header>
          <h3 class="text-xs font-bold uppercase" itemprop="name">
            <span>
              {{ node.event }}
            </span>
            |
            <span
              itemprop="location"
              itemscope
              itemtype="http://schema.org/Place"
            >
              <span
                itemprop="address"
                itemscope
                itemtype="http://schema.org/PostalAddress"
              >
                <span itemprop="addressLocality">
                  {{ node.location.city }} </span
                >,
                <span itemprop="addressCountry">{{
                  node.location.country
                }}</span>
              </span>
            </span>
          </h3>
          <h2 class="text-3xl font-semibold mt-4" itemprop="name">
            {{ node.title }}
          </h2>
          <time
            itemprop="startDate"
            :datetime="node.date"
            :content="node.date"
            >{{ formattedDate(node.date) }}</time
          >
        </header>
        <footer>
          <ul>
            <li v-for="{ label, link } in node.links" :key="label">
              <a :href="link" target="_blank" rel="noopener">{{ label }}</a>
            </li>
          </ul>
        </footer>
      </article>
    </div>
  </Layout>
</template>

<page-query>
query {
  talks: allTalks {
    edges {
      node {
        id
        title
        event
        location {
          city
          country
        }
        date
        links {
          label
          link
        }
      }
    }
  }
}
</page-query>

<script>
import Vue from "vue";
import { formattedDate } from "@/utils/date";

export default Vue.extend({
  metaInfo: {
    title: "Talks"
  },
  methods: {
    formattedDate
  }
});
</script>
