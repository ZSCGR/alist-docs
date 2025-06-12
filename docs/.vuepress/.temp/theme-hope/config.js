import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "F:/web/alist-docs/node_modules/vuepress-theme-hope/lib/client/exports/base.js";

import { defineCatalogInfoGetter } from "F:/web/alist-docs/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "F:/web/alist-docs/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "F:/web/alist-docs/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "F:/web/alist-docs/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "F:/web/alist-docs/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
