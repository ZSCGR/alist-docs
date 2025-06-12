import comp from "F:/web/alist-docs/docs/.vuepress/.temp/pages/zh/tool/baidu/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/tool/baidu/\",\"title\":\"Baidu\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Baidu\",\"toc\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Baidu\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://alist.nn.ci/zh/tool/baidu/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AList Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Baidu\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
