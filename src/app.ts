// A spur that is only a widget: a Casio Wave Ceptor face, live. Its drawing is an MCP App inside
// A2UI's `McpApp` component; it suggests Home.
import { defineApp, HOME, mcpApp } from "spur-kit"

import { faceHtml } from "./build.ts" with { type: "macro" }

const html = faceHtml()

export const watchApp = defineApp({
  name: "watch",
  version: "1",
  instructions: "A Casio Wave Ceptor (WVA-M630D) watch face, as a widget.",
  tools: [],
  widgets: [
    {
      name: "face",
      title: "Wave Ceptor",
      surfaces: ["space"],
      resource: "ui://watch/face",
      space: HOME,
      a2ui: () => mcpApp("face", { title: "Wave Ceptor", html }),
    },
  ],
})
