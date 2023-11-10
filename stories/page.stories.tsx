import { StoryObj, Meta } from '@plaited/storybook'

import { Page } from './page.js'

const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/preact/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Page>

// More on interaction testing: https://storybook.js.org/docs/preact/writing-tests/interaction-testing

export const LoggedOut: Story = {}
