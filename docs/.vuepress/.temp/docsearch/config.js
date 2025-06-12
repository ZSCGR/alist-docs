
import { DocSearch, injectDocSearchConfig } from "F:/web/alist-docs/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import 'F:/web/alist-docs/node_modules/@docsearch/css/dist/style.css'
import 'F:/web/alist-docs/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import 'F:/web/alist-docs/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
