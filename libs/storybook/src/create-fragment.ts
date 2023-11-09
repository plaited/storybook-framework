import { Template } from '@plaited/jsx'
import { createTemplateElement } from '@plaited/component'

export const createFragment = (template: Template) => {
  const { content, stylesheets } = template
  const style = stylesheets.size ? `<style>${[...stylesheets].join('')}</style>` : ''
  return createTemplateElement(content + style).content
}
