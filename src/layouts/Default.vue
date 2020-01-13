<template>
  <div class="relative flex flex-col text-oslo md:flex-row">
    <div
      class="static flex flex-col justify-between pt-10 pb-10 pl-10 pr-10 lg:pt-20 lg:pl-20 lg:pr-20 md:fixed md:w-1/2 md:h-screen lg:pb-20 lg:pr-10"
    >
      <div class="flex flex-col">
        <div>
          <h1 class="text-4xl font-bold text-twilight lg:text-5xl">
            Hello, I'm Sarah Dayan.
          </h1>
          <div class="leading-loose">
            <p class="mt-4">
              I’m a Senior Software Engineer currently working as Tech Lead of the
              Doc Squad at
              <a
                class="underline text-twilight"
                href="https://www.algolia.com/"
                target="_blank"
                rel="noopener"
                >Algolia</a
              >. I mostly do front-end development, and I’m a
              <a
                class="underline text-twilight"
                href="https://vuejs.org/"
                rel="noopener"
                >Vue.js</a
              >
              and CSS nerd. I can't shut up about test-driven development and
              utility-first CSS. I also share what I learn on my blog
              <a
                class="underline text-twilight"
                href="http://frontstuff.io"
                target="_blank"
                rel="noopener"
                >frontstuff.io</a
              >, or at <g-link to="/talks"> meetups and conferences</g-link>.
            </p>
            <p class="mt-4">
              Among other things, I created
              <a
                class="underline text-twilight"
                href="https://github.com/sarahdayan/dinero.js"
                rel="noopener"
                >Dinero.js</a
              >, a multi-environment JavaScript library to handle monetary values.
            </p>
          </div>
        </div>
        <nav
          class="order-first mb-6 text-sm font-bold tracking-wider uppercase md:mt-12 md:mb-0 md:order-none"
        >
          <ul class="flex flex-row -mx-2 md:flex-col md:-my-1 md:-mx-0">
            <li class="mx-2 md:my-1">
              <g-link
                class="hover:text-twilight transition"
                active-class="text-twilight"
                to="/projects"
              >
                Projects
              </g-link>
            </li>
            <li class="mx-2 md:my-1">
              <g-link
                class="hover:text-twilight transition"
                active-class="text-twilight"
                to="/talks"
              >
                Talks
              </g-link>
            </li>
            <li class="mx-2 md:my-1">
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
      <ul class="flex w-full mt-12 -mx-6 text-sm text-twilight">
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
    <transition name="fade" appear>
      <div
        class="static p-10 md:absolute md:right-0 md:w-1/2 lg:py-20 lg:pr-20 lg:pl-10"
      >
        <slot />
      </div>
    </transition>
    <div class="fixed bottom-0 left-0 w-full h-10 pointer-events-none lg:h-20 gradient-y-transparent-woodsmoke" />
    <div class="fixed top-0 left-0 w-full h-10 pointer-events-none lg:h-20 gradient-y-woodsmoke-transparent" />
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

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  @apply opacity-0;
}
</style>
