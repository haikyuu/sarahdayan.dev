<template>
  <Layout>
    <template v-slot:intro>
      <p class="mt-4">
        I've been lucky enough to speak about JavaScript, CSS and more at
        conferences all around the world. If you want me to speak at yours,
        <a
          class="underline text-twilight"
          href="https://twitter.com/frontstuff_io"
          rel="noopener"
          target="_blank"
          >drop me a line</a
        >.
      </p>
    </template>
    <list :items="$page.talks.edges">
      <template v-slot:item="{ item: { node } }">
        <header>
          <h3 class="text-xs font-bold uppercase text-twilight" itemprop="name">
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
          <h2 class="mt-4 text-2xl font-semibold text-twilight" itemprop="name">
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
                class="underline text-twilight"
                :href="link"
                target="_blank"
                rel="noopener"
                >{{ label }}</a
              >
            </li>
          </ul>
        </footer>
      </template>
    </list>
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
import List from "@/components/List.vue";
import { formattedDate } from "@/utils/date";

export default Vue.extend({
  metaInfo: {
    title: "Talks"
  },
  components: {
    List
  },
  methods: {
    formattedDate
  }
});
</script>
