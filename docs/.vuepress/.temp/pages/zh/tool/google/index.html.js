import comp from "F:/web/alist-docs/docs/.vuepress/.temp/pages/zh/tool/google/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/tool/google/\",\"title\":\"Google\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Google\",\"toc\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Google\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://alist.nn.ci/zh/tool/google/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AList Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Google\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
