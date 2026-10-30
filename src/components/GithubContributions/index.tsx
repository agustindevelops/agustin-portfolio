import { useQuery } from "@tanstack/react-query"

import { Link } from "@/components/ui/link"
import { Skeleton } from "@/components/ui/skeleton"

import {
  contributionTitle,
  fetchContributions,
  githubProfile,
  githubProfileUrl,
  groupWeeks,
  monthLabel,
} from "./functions"

const levelClass = [
  "bg-lilac/70",
  "bg-brand/25",
  "bg-brand/45",
  "bg-brand/70",
  "bg-brand",
] as const

function GithubContributions() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["github-contributions", githubProfile],
    queryFn: fetchContributions,
  })

  if (isError) {
    return (
      <Link href={githubProfileUrl} target="_blank" rel="noreferrer">
        github.com/{githubProfile}
      </Link>
    )
  }

  if (isPending || !data) {
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
        <Link href={githubProfileUrl} target="_blank" rel="noreferrer">
          @{githubProfile}
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
                    title={contributionTitle(day)}
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
