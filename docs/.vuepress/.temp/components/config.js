import { hasGlobalComponent } from "F:/web/alist-docs/node_modules/@vuepress/helper/lib/client/index.js";
import ArtPlayer from "F:/web/alist-docs/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import BiliBili from "F:/web/alist-docs/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import Badge from "F:/web/alist-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "F:/web/alist-docs/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "F:/web/alist-docs/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
