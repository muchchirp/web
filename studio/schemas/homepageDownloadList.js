export default {
  name: "homepageDownloadList",
  title: "Homepage Download List",
  type: "document",
  fields: [
    { title: "Text", name: "text", type: "string" },
    {
      title: "Downloads",
      name: "downloads",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageDownload" }],
        },
      ],
    },
  ],
}
