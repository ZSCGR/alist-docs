import comp from "F:/web/alist-docs/docs/.vuepress/.temp/pages/zh/faq/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/faq/\",\"title\":\"FAQ\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"FAQ\",\"index\":false,\"icon\":\"iconfont icon-question\",\"category\":[\"FAQ\"],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"FAQ\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Andy Hsu\\\",\\\"url\\\":\\\"https://i.nn.ci\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://alist.nn.ci/zh/faq/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AList文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"FAQ\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://alist.nn.ci/faq/\"}]]},\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"zh/faq/README.md\"}")
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
