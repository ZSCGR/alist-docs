import ChartJS from "F:/web/alist-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeDemo from "F:/web/alist-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "F:/web/alist-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "F:/web/alist-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "F:/web/alist-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import Mermaid from "F:/web/alist-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
  },
};
