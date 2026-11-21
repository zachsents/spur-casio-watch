// The watch face as a stdio MCP server.
import { Layer } from "effect"
import { serveStdio } from "switch-ext-kit"

import { watchApp } from "./app.ts"

await serveStdio(watchApp, Layer.empty)
