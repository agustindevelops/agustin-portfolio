import {
  addDays,
  eachWeekOfInterval,
  format,
  isFirstDayOfMonth,
  parseISO,
} from "date-fns"

const githubProfile = import.meta.env.VITE_GITHUB_PROFILE

const githubProfileUrl = `https://github.com/${githubProfile}`

type Contribution = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ContributionResponse = {
  total: { lastYear: number }
  contributions: Contribution[]
}

const groupWeeks = (days: Contribution[]) => {
  const byDate = new Map(days.map((day) => [day.date, day]))
  const weeks = eachWeekOfInterval({
    start: parseISO(days[0].date),
    end: parseISO(days[days.length - 1].date),
  })

  return weeks.map((weekStart) =>
    Array.from({ length: 7 }, (_, offset) => {
      const date = format(addDays(weekStart, offset), "yyyy-MM-dd")
      return byDate.get(date) ?? null
    }),
  )
}

const monthLabel = (week: Array<Contribution | null>) => {
  const firstOfMonth = week.find(
    (day) => day && isFirstDayOfMonth(parseISO(day.date)),
  )
  return firstOfMonth ? format(parseISO(firstOfMonth.date), "MMM") : null
}

const contributionTitle = (day: Contribution) => {
  const label = day.count === 1 ? "contribution" : "contributions"
  const date = format(parseISO(day.date), "MMM d, yyyy")
  return `${day.count} ${label} on ${date}`
}

const fetchContributions = async () => {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${githubProfile}?y=last`,
  )
  if (!response.ok) throw new Error("Could not load contributions")
  return response.json() as Promise<ContributionResponse>
}

export {
  contributionTitle,
  fetchContributions,
  githubProfile,
  githubProfileUrl,
  groupWeeks,
  monthLabel,
}
