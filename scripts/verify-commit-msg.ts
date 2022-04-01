// Invoked on the commit-msg git hook by yorkie.

import { readFileSync } from 'fs'
import colors from 'picocolors'

// process.argv: [ts-node, verify-commit-msg.ts, .git/COMMIT_EDITMSG]
const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf-8').trim()

const releaseRE = /^v\d/
const pre = [
  'ci', // CI/CD Travis、Jenkins、GitLab CI、Circle等
  'dx', // dx
  'wip', // 开发
  'fix', // 问题修复
  'feat', // 功能
  'docs', // 文档
  'deps', // 依赖
  'perf', // 性能
  'test', // 测试
  'build', // 构建
  'chore', // 日常事务
  'types', // 类型声明
  'style', // 格式化
  'sample', // 案例
  'release', // 发布 npm package
  'refactor', // 重构
  'workflow' // github workflow
]
const commitRE = new RegExp(
  `^(revert: )?(${pre.join('|')})(\\(.+\\))?: .{1,50}`
)

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${colors.bgRed(colors.white(' ERROR '))} ${colors.red(
      `invalid commit message format.`
    )}\n\n` +
      colors.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${colors.green(`feat: add 'comments' option`)}\n` +
      `    ${colors.green(`fix: handle events on blur (close #28)`)}\n\n` +
      colors.red(`  See .github/commit-convention.md for more details.\n`)
  )
  process.exit(1)
}
