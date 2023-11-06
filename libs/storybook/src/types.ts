import type { WebRenderer } from '@storybook/types'
import type { PlaitedComponentConstructor } from '@plaited/component'

export type { RenderContext } from '@storybook/types'

export type StoryFnPlaitedReturnType = DocumentFragment

export interface ShowErrorArgs {
  title: string
  description: string
}

export interface PlaitedRender extends WebRenderer {
  component: PlaitedComponentConstructor
  storyResult: StoryFnPlaitedReturnType
}
