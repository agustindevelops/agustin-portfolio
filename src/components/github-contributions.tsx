import { useEffect, useState } from "react"

import { Link } from "@/components/ui/link"
import { Skeleton } from "@/components/ui/skeleton"

const PROFILE = "https://github.com/agustindevelops"
const CONTRIBUTIONS =
  "https://github-contributions-api.jogruber.de/v4/agustindevelops?y=last"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const levelClass = [
  "bg-lilac/70",
  "bg-brand/25",
  "bg-brand/45",
  "bg-brand/70",
  "bg-brand",
] as const

type Contribution = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ContributionResponse = {
  total: { lastYear: number }
  contributions: Contribution[]
}

function groupWeeks(days: Contribution[]) {
  const first = new Date(`${days[0].date}T00:00:00`)
  const cells: Array<Contribution | null> = [
    ...Array.from({ length: first.getDay() }, () => null),
    ...days,
  ]
  const weeks: Array<Array<Contribution | null>> = []

  for (let index = 0; index < cells.length; index += 7) {
    const week = cells.slice(index, index + 7)
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }

  return weeks
}

function monthLabel(week: Array<Contribution | null>) {
  const start = week.find((day) => day?.date.endsWith("-01"))
  if (!start) return ""
  return months[Number(start.date.slice(5, 7)) - 1]
}

function GithubContributions() {
  const [data, setData] = useState<ContributionResponse | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let ignore = false

    fetch(CONTRIBUTIONS)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load contributions")
        return response.json() as Promise<ContributionResponse>
      })
      .then((payload) => {
        if (!ignore) setData(payload)
      })
      .catch(() => {
        if (!ignore) setFailed(true)
      })

    return () => {
      ignore = true
    }
  }, [])

  if (failed) {
    return (
      <Link href={PROFILE} target="_blank" rel="noreferrer">
        github.com/agustindevelops
      </Link>
    )
  }

  if (!data) {
    return (
      <div className="space-y-3" aria-hidden>
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-24 w-full" />
      </div>
    )
  }

  const weeks = groupWeeks(data.contributions)
  const total = data.total.lastYear

  return (
    <figure aria-label={`${total} GitHub contributions in the last year`}>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          <span className="font-heading text-lg font-bold text-foreground">
            {total.toLocaleString()}
          </span>{" "}
          contributions in the last year
        </p>
        <Link href={PROFILE} target="_blank" rel="noreferrer">
          @agustindevelops
        </Link>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="relative h-4">
            {weeks.map((week, index) => {
              const label = monthLabel(week)
              if (!label) return null
              return (
                <span
                  key={week.find((day) => day)?.date ?? index}
                  className="absolute text-[10px] leading-none text-muted-foreground"
                  style={{ left: `${(index / weeks.length) * 100}%` }}
                >
                  {label}
                </span>
              )
            })}
          </div>
          <div
            className="mt-1 grid grid-flow-col grid-rows-7 gap-[3px]"
            style={{ gridAutoColumns: "minmax(0, 1fr)" }}
          >
            {weeks.flatMap((week, weekIndex) =>
              week.map((day, dayIndex) =>
                day ? (
                  <span
                    key={day.date}
                    title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                    className={`aspect-square rounded-[2px] ${levelClass[day.level]}`}
                  />
                ) : (
                  <span key={`${weekIndex}-${dayIndex}`} />
                ),
              ),
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
        <span>Less</span>
        {levelClass.map((color) => (
          <span key={color} className={`size-2.5 rounded-[2px] ${color}`} />
        ))}
        <span>More</span>
      </div>
    </figure>
  )
}

export { GithubContributions }
