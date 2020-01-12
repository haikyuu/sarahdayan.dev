<template>
  <Layout>
    <list :items="items">
      <template v-slot:item="{ item: { id, title, description, link, type } }">
        <p class="text-xs font-bold uppercase text-twilight">
          Featured {{ type }}
        </p>
        <h2
          class="mt-4 text-2xl font-semibold text-twilight"
          :class="{ capitalize: type === 'projects' }"
          itemprop="name"
        >
          <a :href="link" target="_blank" rel="noopener">{{ title }}</a>
        </h2>
        <p class="mt-2">{{ description }}</p>
        <g-link class="inline-block mt-6 underline text-twilight" :to="type">
          See more {{ type }}
        </g-link>
      </template>
    </list>
  </Layout>
</template>

<page-query>
query {
  talks: allTalk(filter: { featured: { eq: true }}) {
    edges {
      node {
        id
        title
        event,
        links {
          label
          link
        }
      }
    }
  },
  interviews: allInterview(filter: { featured: { eq: true }}) {
    edges {
      node {
        id
        title
        link
        hosts
        guests
      }
    }
  },
  projects: allRepository(filter: { featured: { eq: true }}) {
    edges {
      node {
        id
        title: name
        link: html_url
        description
      }
    }
  }
}
</page-query>

<script>
import List from "@/components/List.vue";
import mergeArrays from "@/utils/mergeArrays";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    List
  },
  computed: {
    items() {
      return Object.keys(this.$page)
        .map(type => {
          const items = this.$page[type].edges.map(
            ({
              node: {
                id,
                title,
                link,
                description,
                event,
                hosts,
                guests,
                links
              }
            }) => {
              let summary = "";
              let href = link || links[0].link;

              if (description) {
                summary = description;
              } else if (event) {
                summary = event;
              } else if (hosts || guests) {
                summary = `With ${mergeArrays(hosts, guests).join(", ")}`;
              }

              return {
                id,
                title,
                link: href,
                description: summary,
                type
              };
            }
          );

          return items;
        })
        .flat();
    }
  },
  methods: {
    merge: mergeArrays
  }
};
</script>
