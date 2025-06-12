import comp from "F:/web/alist-docs/docs/.vuepress/.temp/pages/faq/index.html.vue"
const data = JSON.parse("{\"path\":\"/faq/\",\"title\":\"FAQ\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"FAQ\",\"index\":false,\"icon\":\"iconfont icon-question\",\"category\":[\"FAQ\"],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"FAQ\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Andy Hsu\\\",\\\"url\\\":\\\"https://i.nn.ci\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://alist.nn.ci/faq/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AList Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"FAQ\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://alist.nn.ci/zh/faq/\"}]]},\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"faq/README.md\"}")
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
