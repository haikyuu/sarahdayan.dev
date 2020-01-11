<template>
  <div class="md:flex-row flex-col flex relative">
    <div class="md:fixed static flex flex-col justify-between md:w-1/2 md:h-screen p-12">
      <div>
        <div>
          <h1 class="text-5xl font-bold">Hello, I'm Sarah Dayan.</h1>
          <p class="mt-4">
            I’m a Senior Software Engineer currently working as Tech Lead of the
            Doc Squad at
            <a href="https://www.algolia.com/" target="_blank" rel="noopener"
              >Algolia</a
            >. I mostly do front-end development, and I’m a
            <a href="https://vuejs.org/" rel="noopener">Vue.js</a> and CSS nerd.
            I can't shut up about test-driven development and utility-first CSS.
            I also share what I learn on my blog
            <a href="http://frontstuff.io" target="_blank" rel="noopener"
              >frontstuff.io</a
            >, or at <g-link to="/talks"> meetups and conferences</g-link>.
          </p>
          <p class="mt-4">
            Among other things, I created
            <a href="https://github.com/sarahdayan/dinero.js" rel="noopener"
              >Dinero.js</a
            >, a multi-environment JavaScript library to handle monetary values.
          </p>
        </div>
        <nav class="text-xs font-bold uppercase mt-12">
          <ul class="-my-3">
            <li class="my-3">
              <g-link to="/projects">
                Projects
              </g-link>
            </li>
            <li class="my-3">
              <g-link to="/talks">
                Talks
              </g-link>
            </li>
            <li class="my-3">
              <g-link to="/interviews">
                Interviews
              </g-link>
            </li>
          </ul>
        </nav>
      </div>
      <ul class="w-full flex mt-12 -mx-6">
        <li class="mx-6">
          <a
            class="flex"
            href="https://twitter.com/frontstuff_io"
            rel="noopener"
            target="_blank"
          >
            <twitter-icon class="w-4 mr-2" />
            <span>Twitter</span>
          </a>
        </li>
        <li class="mx-6">
          <a
            class="flex"
            href="https://github.com/sarahdayan/"
            rel="noopener"
            target="_blank"
          >
            <github-icon class="w-4 mr-2" />
            <span>
              GitHub
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="md:absolute static md:right-0 md:w-1/2 p-12">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Vue from "vue";
import TwitterIcon from "@/assets/icons/twitter.svg?inline";
import GithubIcon from "@/assets/icons/github.svg?inline";

export default Vue.extend({
  metaInfo: {
    title: "Projects"
  },
  components: {
    TwitterIcon,
    GithubIcon
  },
  methods: {
    formattedCount(count) {
      const formatter = new Intl.NumberFormat("en-US");

      return formatter.format(count);
    }
  }
});
</script>
