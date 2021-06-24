const fs = require('fs')

/**
 * Transforms .code-snippets files in JSON objects. If it breaks, make sure we don't have any dangling commas.
 */
function getSnippets(path) {
  const textContent = fs.readFileSync(path, { encoding: 'utf-8' })
  // Remove comments from text
  const commentsRegEx = new RegExp(" *\/\/[^\n]*", 'g')
  return JSON.parse(textContent.replace(commentsRegEx, ''))
}

const schemaSnippets = getSnippets('./snippets/schema.code-snippets')
const groqSnippets = getSnippets('./snippets/groq.code-snippets')
const structureSnippets = getSnippets('./snippets/structure.code-snippets')
const allSnippets = {...schemaSnippets, ...groqSnippets, ...structureSnippets}

function generateSnippetDocumentation(key) {
  const snippet = allSnippets[key]
  return `- **${key}** (\`${snippet.prefix}\`): ${snippet.description}`
}

const documented = Object.keys(allSnippets).map(generateSnippetDocumentation).join('\n')

fs.writeFileSync('./documented.md', documented, { encoding: 'utf-8'})

console.log("Snippets list generated!\n\n👉 Now copy documented.md into README.md")