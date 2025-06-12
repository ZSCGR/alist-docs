import { hasGlobalComponent } from "F:/web/alist-docs/node_modules/@vuepress/helper/lib/client/index.js";
import { useStyleTag } from "F:/web/alist-docs/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "F:/web/alist-docs/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "unknown",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
`);
    useStyleTag(`\
@import url("https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css");
`);
    useStyleTag(`\
@import url("https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css");
`);
  },
}
