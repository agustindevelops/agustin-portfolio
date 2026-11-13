# LAIZ — From a personal health challenge to a connected wellness platform

**Project:** LAIZ (formerly nutrAItion)  
**Role:** Product concept, UX design, mobile and backend development  
**Repositories:** [Mobile application](https://github.com/agustindevelops/nutrAItion-mobile) · [Backend API](https://github.com/agustindevelops/nutrAItion-backend)  
**Product page:** [hhais.com/projects/laiz](https://hhais.com/projects/laiz)  
**Stage:** In development; MVP test release planned

> I didn't start LAIZ because I wanted to build another calorie tracker. I started because I needed a system that could help me follow through on a personal health goal—and the tools I had were scattered across conversations, spreadsheets, and manual routines.

## 1. Why this became personal

I came to the United States in 2001 at the age of two and grew up undocumented. In November 2025, reports of new U.S. State Department guidance said visa officers could consider health conditions, including obesity, when evaluating applicants under public-charge rules. I was in the middle of my green card process, and the news made improving my health feel urgent in a way it hadn't before.

The guidance did **not** mean that being overweight automatically disqualified someone from a visa or green card; it broadened the factors officers were directed to consider. But the uncertainty felt personal to me. I didn't want habits I knew I could improve to become one more worry during an already stressful process.

I needed to lose weight. More importantly, I needed a way of making better decisions consistently enough that I could tell whether they were working.

*Contemporary context: [KFF Health News, November 6, 2025](https://kffhealthnews.org/news/article/visa-public-charge-health-conditions-trump-state-department/); [Associated Press coverage, November 2025](https://apnews.com/article/0929b2c8f635479173929300cb683a27). This describes what prompted the project, not immigration or medical advice.*

## 2. The actual problem wasn't a lack of tracking apps

What I wanted sounded simple: somewhere to record what I ate and how active I was, while still being able to look back over weeks and months. I wanted to set meaningful goals, track the small actions that supported them, and see whether I was moving in the right direction.

I couldn't find an experience that brought those needs together in the way I wanted to use it. Logging today's calories was only one part of the problem. I also wanted the **history**, **context**, and **follow-through** that make a daily log useful over time.

The product question became: **How can tracking take less effort while making progress easier to understand?**

## 3. I prototyped the behavior before building the product

Instead of building an app immediately, I tried to make the workflow work with tools already available to me:

- **ChatGPT** became a place to record meals, calorie intake, and exercise in everyday language.
- **Google Sheets** became the long-term record where I could aggregate information and look for trends over time.
- **My own routine** became the test: could I keep up with the logging, use the results, and make consistent changes?

This was an imperfect but useful prototype. It let me experience the workflow instead of designing features from assumptions. It also exposed exactly what felt cumbersome: jumping between tools, keeping information organized, and manually connecting today's activity to a bigger picture.

Using that personal workflow alongside my health efforts, **I lost 25 pounds in 100 days** and reached the milestone I had set for myself. The result belongs to my personal experiment—not to a released version of LAIZ, which was still taking shape.

## 4. Turning the experiment into a product design

As I began sketching what would become LAIZ, I used two frameworks to shape the experience:

**Atomic Habits** reinforced the idea that repeatable behaviors matter more than occasional bursts of motivation. I wanted the app to support the little actions people take every day, rather than turn health into a once-a-month report card.

**SMART goals** gave structure to the other half of the problem. A goal should be specific and trackable enough to influence what someone does next. For LAIZ, that meant thinking about goals, plans, daily inputs, and progress as connected parts of one experience.

This is why the planned MVP focuses on five related capabilities—not five disconnected screens:

1. **Food tracking**: a place to record daily intake.
2. **Activity tracking**: movement and exercise alongside nutrition.
3. **Goal tracking**: targets that give the information direction.
4. **Plan creation and tracking**: an actionable path between intention and behavior.
5. **Progress tracking**: a way to connect everyday actions to longer-term outcomes.

**The design intent:** reduce the work of gathering information, then make that information useful enough to guide the next decision.

## 5. Building a connected mobile application and API

LAIZ is developed in two repositories with different responsibilities.

### Mobile application — the daily experience

The [React Native / Expo mobile repository](https://github.com/agustindevelops/nutrAItion-mobile) contains the cross-platform client. This is where the planned everyday interactions belong: logging food and activity, setting goals, following plans, and reviewing progress. The design challenge is to keep small recurring actions straightforward without losing the historical context that makes the data meaningful.

### Backend — the system behind the experience

The [Python / FastAPI backend](https://github.com/agustindevelops/nutrAItion-backend) provides a distinct server-side layer. Its documented stack includes PostgreSQL for persistence, Alembic for managed schema migrations, Firebase-backed authentication, OpenAI service integration, and Docker-based development tooling.

Those are technical building blocks, not the reason the product exists. The reason is the earlier manual workflow: I wanted one product in which the user's daily inputs, goals, plans, and progress could belong to the same ongoing experience.

The code and release roadmap should be reviewed together: the repositories show engineering foundations, while the complete tracking experience remains the target for the MVP test release.

## 6. Why the release plan is staged

I want the first test to validate the core behavior before expanding the product's scope.

| Release | Scope | Stage |
| --- | --- | --- |
| MVP test release | Food, activity, goals, plans, and progress tracking | In development / planned test release |
| Production release | Free and paid subscription tiers | Planned |
| Later releases | Friendships, progress sharing, notifications, deeper nutrient metrics such as vitamins | Future roadmap |

The order matters: the personal experiment showed that useful tracking and long-term visibility are the product's foundation. Social and subscription features can build on that, but they should not distract from proving the core experience.

For backend evolution, I am exploring **Celery-based background task processing** and **locally hosted model inference reached through a Cloudflare Tunnel**. Both belong to the planned architecture; they are not presented here as live infrastructure. Their specific performance, privacy, and operational tradeoffs deserve a separate engineering follow-up once the implementation is complete.

## 7. What I learned by solving my own problem first

The strongest part of the LAIZ story isn't a particular library. It's the sequence:

**A real constraint → a manual solution → a repeatable personal experiment → firsthand insight into the friction → a product design → two connected software projects.**

I learned which parts of the workflow mattered because I had to live with them. The prototype gave me more than a feature checklist: it showed why recording a day is less useful if you can't connect it to the month, why a goal matters only when it shapes what you actually do, and why the experience needs to be simple enough that someone will return tomorrow.

LAIZ is an attempt to make that system available in one place instead of asking people to piece it together themselves.
