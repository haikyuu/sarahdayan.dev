<template>
  <Layout>
    <div v-for="{ node } in $page.talks.edges" :key="node.id">
      <item>
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
          <h2 class="text-2xl font-semibold mt-4" itemprop="name">
            {{ node.title }}
          </h2>
          <time
            class="inline-block mt-2"
            itemprop="startDate"
            :datetime="node.date"
            :content="node.date"
            >{{ formattedDate(node.date) }}</time
          >
        </header>
        <footer class="mt-2">
          <ul class="flex -mx-1">
            <li v-for="{ label, link } in node.links" :key="label" class="mx-1">
              <a
                class="underline"
                :href="link"
                target="_blank"
                rel="noopener"
                >{{ label }}</a
              >
            </li>
          </ul>
        </footer>
      </item>
    </div>
  </Layout>
</template>

<page-query>
query {
  talks: allTalk {
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
import Item from "@/components/Item.vue";
import { formattedDate } from "@/utils/date";

export default Vue.extend({
  metaInfo: {
    title: "Talks"
  },
  components: {
    Item
  },
  methods: {
    formattedDate
  }
});
</script>
