<template>
  <Layout>
    <h1>Talks</h1>
    <p>
      I've been lucky enough to speak about JavaScript, CSS and more at
      conferences all around the world. If you want me to speak at yours, drop
      me a line.
    </p>
    <div v-for="{ node } in $page.talks.edges" :key="node.id">
      <article itemscope itemtype="http://schema.org/Event">
        <header>
          <h2 itemprop="name">{{ node.title }}</h2>
          <h3 itemprop="name">{{ node.event }}</h3>
          <div itemprop="location" itemscope itemtype="http://schema.org/Place">
            <div
              itemprop="address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
            >
              <span itemprop="addressLocality"> {{ node.location.city }} </span
              >,
              <span itemprop="addressCountry">{{ node.location.country }}</span>
            </div>
          </div>
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
import formattedDate from "@/utils/formattedDate.js";

export default {
  metaInfo: {
    title: "Talks"
  },
  methods: {
    formattedDate
  }
};
</script>
