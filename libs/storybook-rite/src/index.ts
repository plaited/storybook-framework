import { instrument } from '@storybook/instrumenter'
import { assert as defaultAssert } from '@plaited/rite/assert'
import * as helpers from '@plaited/rite/helpers'

const lib = instrument(
  { assert: defaultAssert, ...helpers },
  { intercept: (_method, path) => !['assert', 'match'].includes(path[0] as string) },
)

export const { assert, match, wait, throws, findByText, findByAttribute, fireEvent } = lib

export { assert as t }
