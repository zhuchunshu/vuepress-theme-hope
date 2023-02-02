import { usePageFrontmatter, usePageLang } from "@vuepress/client";
import { type VNode, computed, defineComponent, h, onMounted, ref } from "vue";
import { LoadingIcon } from "vuepress-shared/client";

import {
  type CommentPluginFrontmatter,
  type TwikooOptions,
} from "../../shared/index.js";

import "../styles/twikoo.scss";

declare const COMMENT_OPTIONS: TwikooOptions;

const twikooOption = COMMENT_OPTIONS;
const enableTwikoo = Boolean(twikooOption.envId);

export default defineComponent({
  name: "TwikooComment",

  setup() {
    const frontmatter = usePageFrontmatter<CommentPluginFrontmatter>();
    const lang = usePageLang();
    const loaded = ref(false);

    let id: number;

    const enableComment = computed(() => {
      if (!enableTwikoo) return false;
      const pluginConfig = twikooOption.comment !== false;
      const pageConfig = frontmatter.value.comment;

      return (
        // Enable in page
        Boolean(pageConfig) ||
        // not disabled in anywhere
        (pluginConfig !== false && pageConfig !== false)
      );
    });

    const initTwikoo = (): void => {
      const timeID = (id = new Date().getTime());

      void Promise.all([
        import(/* webpackChunkName: "twikoo" */ "twikoo"),
        new Promise<void>((resolve) => setTimeout(resolve, twikooOption.delay)),
      ]).then(([{ init }]) => {
        loaded.value = true;
        if (timeID === id)
          void init({
            lang: lang.value === "zh-CN" ? "zh-CN" : "en",
            ...twikooOption,
            el: "#twikoo-comment",
          });
      });
    };

    onMounted(() => {
      if (enableTwikoo) initTwikoo();
    });

    return (): VNode =>
      h(
        "div",
        {
          class: "twikoo-wrapper",
          id: "comment",
          style: { display: enableComment.value ? "block" : "none" },
        },
        loaded.value ? h("div", { id: "twikoo-comment" }) : h(LoadingIcon)
      );
  },
});
