import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Connect, type Plugin } from 'vite'

import {
  loadGithubContributions,
  type ContributionResponse,
} from './src/server/github-contributions.ts'

function githubContributionsApi(username: string): Plugin {
  const handle: Connect.NextHandleFunction = (request, response, next) => {
    const pathname = request.url?.split('?')[0]
    if (pathname !== '/api/github-contributions') {
      next()
      return
    }

    void loadGithubContributions(username)
      .then((data: ContributionResponse) => {
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json')
        response.setHeader('Cache-Control', 'no-store')
        response.end(JSON.stringify(data))
      })
      .catch(() => {
        response.statusCode = 502
        response.setHeader('Content-Type', 'application/json')
        response.setHeader('Cache-Control', 'no-store')
        response.end(JSON.stringify({ error: 'Could not load contributions' }))
      })
  }

  return {
    name: 'github-contributions-api',
    configureServer(server) {
      server.middlewares.use(handle)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handle)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      githubContributionsApi(env.VITE_GITHUB_PROFILE ?? ''),
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
  }
})
