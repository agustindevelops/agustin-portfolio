import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const url =
  process.env.AGUSTIN_PORTFOLIO_URL ??
  "http://localhost:3000/api/agustin-portfolio"

const cardFields = ["role", "company", "url", "location", "dates"]

function assertCard(value, index) {
  if (!value || typeof value !== "object") {
    throw new Error(`experience[${index}] must be an object`)
  }
  for (const field of cardFields) {
    if (typeof value[field] !== "string" || value[field].trim() === "") {
      throw new Error(`experience[${index}].${field} must be a non-empty string`)
    }
  }
  if (
    !Array.isArray(value.highlights) ||
    value.highlights.some((highlight) => typeof highlight !== "string")
  ) {
    throw new Error(`experience[${index}].highlights must be an array of strings`)
  }
}

const response = await fetch(url)
if (!response.ok) {
  throw new Error(`Agustin portfolio request failed (${response.status}) ${url}`)
}

const body = await response.json()
if (!Array.isArray(body.experience) || body.experience.length === 0) {
  throw new Error("Agustin portfolio response is missing experience cards")
}
body.experience.forEach(assertCard)

const source = `import type { Experience } from "@/experience"

export const experience: Experience[] = ${JSON.stringify(body.experience, null, 2)}
`

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/generated")
await mkdir(outDir, { recursive: true })
await writeFile(path.join(outDir, "agustin-portfolio.ts"), source)

console.log(`Wrote ${body.experience.length} experience cards from ${url}`)
