// A spur that is only a widget: a Casio Wave Ceptor face, live. Its drawing is an MCP App inside
// A2UI's `McpApp` component; it suggests Home.
import { defineApp, mcpApp } from "spur-kit"

import { faceHtml } from "./build.ts"

// Built when the spur starts: Bun runs no macros from an installed package.
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
      size: {
        aspect: "square",
        min: { cols: 2, rows: 2 },
        preferred: { cols: 3, rows: 3 },
        max: { cols: 3, rows: 3 },
        grows: true,
      },
      a2ui: () => mcpApp("face", { title: "Wave Ceptor", html }),
    },
  ],
})
