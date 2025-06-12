import comp from "F:/web/alist-docs/docs/.vuepress/.temp/pages/guide/api/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/api/\",\"title\":\"API\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"API\",\"icon\":\"iconfont icon-token\",\"index\":false,\"dir\":{\"order\":5},\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"API\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Andy Hsu\\\",\\\"url\\\":\\\"https://i.nn.ci\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://alist.nn.ci/guide/api/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AList Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"API\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://alist.nn.ci/zh/guide/api/\"}]]},\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"guide/api/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
