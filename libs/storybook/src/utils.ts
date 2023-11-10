import type { Template } from 'plaited'

let parser: {
  parseFromString(
    string: string,
    type: DOMParserSupportedType,
    options: {
      includeShadowRoots: boolean
    },
  ): Document
}

export const canUseDOM = () => {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement)
}

if (canUseDOM()) {
  parser = new DOMParser()
}

export const createTemplateElement = (content: string) => {
  const fragment = parser.parseFromString(`<template>${content}</template>`, 'text/html', {
    includeShadowRoots: true,
  })
  return fragment.head.firstChild as HTMLTemplateElement
}

export const createFragment = (template: Template) => {
  const { content, stylesheets } = template
  const style = stylesheets.size ? `<style>${[...stylesheets].join('')}</style>` : ''
  return createTemplateElement(content + style).content
}
