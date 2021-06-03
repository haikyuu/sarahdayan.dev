<template>
  <Layout>
    <ClientOnly>
    
    <div
        id="interviews"
        v-observe-visibility="onVisibilityChange(0)"
        class="mb-48 pt-80 md:pt-8"
      >
        <all-interviews class="md:mt-72" :items="$page.interviews.edges" />
      </div>

      <div
        id="talks"
        v-observe-visibility="onVisibilityChange(1)"
        class="pt-80 md:pt-88 mt-90 md:mt-88" 
      >
        <all-talks :items="$page.talks.edges" />
      </div>

     <div
        id="projects"
        v-observe-visibility="onVisibilityChange(2)"
        class="md:pt-88 md:-mt-96"
      >
        <all-projects :items="$page.repositories.edges" />
      </div>

      <p
        v-observe-visibility="showDesignerLine"
        :class="[
          shouldShowDesignerLine ? 'opacity-75' : 'opacity-0 shift-y-16'
        ]"
        class="text-sm mt-104 ml-104 md:ml-160 transition"
      >
        Design by
        <a
          class="text-zenith hover:text-dawn transition hover:underline"
          href="https://alexalbuerne.com/"
          target="_blank"
          rel="noopener"
          >Alex Albuerne</a
        >.
      </p>

    </ClientOnly>
  </Layout>
</template>

<page-query>
query {
  repositories: allRepository {
    edges {
      node {
        id
        title
        link
        description
        technology
      }
    }
  }
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
  interviews: allInterview {
    edges {
      node {
        id
        title
        link
        platform
        date
        type
      }
    }
  }
}
</page-query>

<script>
import Vue from "vue";

import { bus } from "@/main";

import AllProjects from "@/partials/AllProjects";
import AllTalks from "@/partials/AllTalks";
import AllInterviews from "@/partials/AllInterviews";

export default Vue.extend({
  components: {
    AllInterviews,
    AllProjects,
    AllTalks
  },
  data() {
    return {
      scrollPosition: 0,
      ticking: false,
      visibleSections: [],
      shouldShowDesignerLine: false
    };
  },
  computed: {
    scroll() {
      return 0.05 * this.scrollPosition;
    }
  },
  created() {
    if (process.isClient) {
      window.addEventListener("scroll", () => {
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.scrollPosition = parseInt(window.scrollY);
            this.ticking = false;
          });

          this.ticking = true;
        }
      });
    }
  },
  methods: {
    onVisibilityChange(index) {
      return {
        callback: isVisible => {
          if (isVisible) {
            this.visibleSections.push(index);
          } else {
            this.visibleSections = this.visibleSections.filter(item => {
              return item !== index;
            });
          }

          this.visibleSections.sort();

          bus.$emit("update:scrollspy", this.visibleSections[0]);
        },
        intersection: {
          threshold: 0.3
        },
        throttle: 300
      };
    },
    showDesignerLine(isVisible) {
      this.shouldShowDesignerLine = isVisible;
    }
  }
});
</script>
