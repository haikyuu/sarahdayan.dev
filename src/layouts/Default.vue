<template>
  <div class="text-oslo md:flex-row flex-col flex relative">
    <div
      class="md:fixed static flex flex-col justify-between md:w-1/2 md:h-screen pt-20 pb-10 md:pb-20 pl-20 md:pr-10 pr-20"
    >
      <div class="flex flex-col">
        <div>
          <h1 class="text-twilight text-4xl md:text-5xl font-bold">
            Hello, I'm Sarah Dayan.
          </h1>
          <p class="mt-4">
            I’m a Senior Software Engineer currently working as Tech Lead of the
            Doc Squad at
            <a
              class="text-twilight underline"
              href="https://www.algolia.com/"
              target="_blank"
              rel="noopener"
              >Algolia</a
            >. I mostly do front-end development, and I’m a
            <a
              class="text-twilight underline"
              href="https://vuejs.org/"
              rel="noopener"
              >Vue.js</a
            >
            and CSS nerd. I can't shut up about test-driven development and
            utility-first CSS. I also share what I learn on my blog
            <a
              class="text-twilight underline"
              href="http://frontstuff.io"
              target="_blank"
              rel="noopener"
              >frontstuff.io</a
            >, or at <g-link to="/talks"> meetups and conferences</g-link>.
          </p>
          <p class="mt-4">
            Among other things, I created
            <a
              class="text-twilight underline"
              href="https://github.com/sarahdayan/dinero.js"
              rel="noopener"
              >Dinero.js</a
            >, a multi-environment JavaScript library to handle monetary values.
          </p>
        </div>
        <nav
          class="text-sm tracking-wider font-bold uppercase md:mt-12 mb-6 md:mb-0 order-first md:order-none"
        >
          <ul class="flex flex-row md:flex-col md:-my-1 -mx-2 md:-mx-0">
            <li class="md:my-1 mx-2">
              <g-link
                class="hover:text-twilight transition"
                active-class="text-twilight"
                to="/projects"
              >
                Projects
              </g-link>
            </li>
            <li class="md:my-1 mx-2">
              <g-link
                class="hover:text-twilight transition"
                active-class="text-twilight"
                to="/talks"
              >
                Talks
              </g-link>
            </li>
            <li class="md:my-1 mx-2">
              <g-link
                class="hover:text-twilight transition"
                active-class="text-twilight"
                to="/interviews"
              >
                Interviews
              </g-link>
            </li>
          </ul>
        </nav>
      </div>
      <ul class="w-full flex mt-12 -mx-6 text-twilight text-sm">
        <li class="mx-6">
          <a
            class="flex"
            href="https://twitter.com/frontstuff_io"
            rel="noopener"
            target="_blank"
          >
            <twitter-icon class="w-4 mr-2 fill-current" />
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
            <github-icon class="w-4 mr-2 fill-current" />
            <span>
              GitHub
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="md:absolute static md:right-0 md:w-1/2 md:py-20 md:pr-20 md:pl-10 p-12"
    >
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
    bodyAttrs: {
      class: "bg-woodsmoke"
    }
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
