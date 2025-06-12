import comp from "F:/web/alist-docs/docs/.vuepress/.temp/pages/zh/config/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/config/\",\"title\":\"Config\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Config\",\"index\":false,\"icon\":\"iconfont icon-config\",\"category\":[\"Config\"],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Config\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Andy Hsu\\\",\\\"url\\\":\\\"https://i.nn.ci\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://alist.nn.ci/zh/config/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AList文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Config\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://alist.nn.ci/config/\"}]]},\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"zh/config/README.md\"}")
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
