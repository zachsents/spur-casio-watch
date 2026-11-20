// The face as one HTML document, its script bundled in. Imported as a Bun macro, so it builds when
// the spur loads, not in the view.
import path from "node:path"
import { view } from "spur-kit"

export const faceHtml = (): string =>
  view(path.join(import.meta.dir, "face.ts"), {
    head: '<meta name="color-scheme" content="light dark">',
    style:
      "html,body{margin:0;height:100%;background:transparent;overflow:hidden}svg{display:block;width:100%;height:100%}",
  })
