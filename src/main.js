// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from "vue";
import DefaultLayout from "~/layouts/Default.vue";

export const bus = new Vue();

const title = "Ramiro Alvarez";
const description = [
  "Ramiro Alvarez",
  "Staff Platform Engineer at Empathy.co",
  "Platform Engineering Tech Lead",
  "AWS, GCP, Elasticsearch, MongoDB, K8s"
].join(" | ");

const metadata = [
  {
    name: "description",
    content: description
  },
  {
    name: "author",
    content: title
  }
];

const openGraph = [
  {
    name: "og:title",
    content: title
  },
  {
    name: "og:site_name",
    content: title
  },
  {
    name: "og:image",
    content: "https://ramiroalvfer.dev/images/KCDSpainPic.jpeg"
  },
  {
    name: "og:description",
    content: description
  }
];

export default function(Vue, { head, isClient }) {
  if (isClient) {
    const vueSmoothScroll = require("vue2-smooth-scroll").default;
    const resize = require("vue-resize-directive");
    const { ObserveVisibility } = require("vue-observe-visibility");

    Vue.use(vueSmoothScroll);
    Vue.directive("resize", resize);
    Vue.directive("observe-visibility", ObserveVisibility);
  }

  Vue.component("Layout", DefaultLayout);

  head.meta.push(...metadata.concat(openGraph));

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
  });
}
