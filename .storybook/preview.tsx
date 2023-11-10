import type { Preview } from '@plaited/storybook'
import { fragment } from '@plaited/storybook'

const preview: Preview = {
  decorators: [
    (Story, ...args) => {
      const frag = fragment(<div style={{ margin: '3em' }}></div>)
      frag.firstElementChild.append(Story())
      return frag
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
