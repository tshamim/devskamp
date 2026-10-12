const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')
const Module = require('node:module')
const source = path.join(__dirname, '..', 'internal', 'templates.ts')
const compiled = ts.transpileModule(fs.readFileSync(source, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 } }).outputText
const loaded = new Module(source, module)
loaded._compile(compiled, source)
const { templates, templateMarkdown } = loaded.exports
const directory = path.join(__dirname, '..', 'docs', 'company-templates')
fs.mkdirSync(directory, { recursive: true })
for (const template of templates) fs.writeFileSync(path.join(directory, `${template.slug}.md`), templateMarkdown(template))
fs.writeFileSync(path.join(directory, 'README.md'), '# Devskamp internal company document toolkit\n\nInternal staff use only. Do not publish these documents on the visitor-facing website.\n\n15 editable working templates. Replace bracketed placeholders and obtain internal approval before use. Agreement materials are preparation checklists, not executed legal contracts.\n\n' + templates.map(t => `- [${t.title}](./${t.slug}.md): ${t.purpose}`).join('\n') + '\n')
console.log(`Exported ${templates.length} templates to docs/company-templates`)
