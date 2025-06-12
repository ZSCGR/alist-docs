import comp from "F:/web/alist-docs/docs/.vuepress/.temp/pages/zh/guide/api/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/guide/api/\",\"title\":\"API 文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"API 文档\",\"icon\":\"iconfont icon-token\",\"index\":false,\"dir\":{\"order\":5},\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"API 文档\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Andy Hsu\\\",\\\"url\\\":\\\"https://i.nn.ci\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://alist.nn.ci/zh/guide/api/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AList文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"API 文档\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://alist.nn.ci/guide/api/\"}]]},\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"zh/guide/api/README.md\"}")
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
