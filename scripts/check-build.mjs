import { execSync } from 'child_process'

try {
  const result = execSync('npx next build 2>&1', {
    cwd: '/vercel/share/v0-project',
    timeout: 120000,
    encoding: 'utf-8',
    env: { ...process.env, NODE_ENV: 'production' }
  })
  console.log(result)
} catch (err) {
  console.log("BUILD ERROR:")
  console.log(err.stdout || '')
  console.log(err.stderr || '')
}
