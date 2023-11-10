import { Template, createTemplateElement } from 'plaited'

export const createFragment = (template: Template) => {
  const { content, stylesheets } = template
  const style = stylesheets.size ? `<style>${[...stylesheets].join('')}</style>` : ''
  return createTemplateElement(content + style).content
}
