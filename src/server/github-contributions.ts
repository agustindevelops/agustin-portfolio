type ContributionLevel = 0 | 1 | 2 | 3 | 4

type Contribution = {
  date: string
  count: number
  level: ContributionLevel
}

type ContributionResponse = {
  total: { lastYear: number }
  contributions: Contribution[]
}

const usernamePattern = /^[a-zA-Z0-9-]+$/

function contributionCount(label: string) {
  const match = label.match(/(\d+)\s+contributions?/i)
  return match ? Number(match[1]) : 0
}

function contributionLevel(value: string): ContributionLevel {
  const level = Number(value)
  if (level === 1 || level === 2 || level === 3 || level === 4) return level
  return 0
}

function parseContributions(html: string): ContributionResponse {
  const contributions: Contribution[] = []

  for (const chunk of html.split("<td")) {
    const date = chunk.match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1]
    const level = chunk.match(/data-level="(\d)"/)?.[1]
    const label = chunk.match(/<tool-tip[^>]*>([^<]*)<\/tool-tip>/)?.[1]
    if (!date || !level || !label) continue

    contributions.push({
      date,
      count: contributionCount(label),
      level: contributionLevel(level),
    })
  }

  contributions.sort((left, right) => left.date.localeCompare(right.date))

  if (contributions.length === 0) {
    throw new Error("GitHub contribution calendar was empty")
  }

  const statedTotal = html.match(
    /([\d,]+)\s+contributions\s+in the last year/i,
  )
  const summed = contributions.reduce((total, day) => total + day.count, 0)
  const lastYear = statedTotal
    ? Number(statedTotal[1].replaceAll(",", ""))
    : summed

  return { total: { lastYear }, contributions }
}

async function loadGithubContributions(username: string) {
  if (!usernamePattern.test(username)) {
    throw new Error("Invalid GitHub username")
  }

  const response = await fetch(
    `https://github.com/users/${username}/contributions`,
    {
      headers: {
        accept: "text/html",
        "user-agent": "agustin-portfolio",
      },
      cache: "no-store",
    },
  )

  if (!response.ok) {
    throw new Error(`GitHub contributions request failed (${response.status})`)
  }

  return parseContributions(await response.text())
}

export { loadGithubContributions, parseContributions }
export type { ContributionResponse }
