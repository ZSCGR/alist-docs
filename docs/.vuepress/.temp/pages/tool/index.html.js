import comp from "F:/web/alist-docs/docs/.vuepress/.temp/pages/tool/index.html.vue"
const data = JSON.parse("{\"path\":\"/tool/\",\"title\":\"Tool\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tool\",\"toc\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Tool\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://alist.nn.ci/tool/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AList Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Tool\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://alist.nn.ci/zh/tool/\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
