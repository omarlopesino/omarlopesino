import type { Meta, StoryObj } from '@storybook/react'
import type { SVGProps } from 'react'
import type { JSX } from 'react'

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element

const modules = import.meta.glob<Record<string, IconComponent>>('./*.tsx', { eager: true })

function makeStory(name: string): StoryObj<{ size: number }> {
  const entry = Object.values(modules)
    .flatMap(mod => Object.entries(mod))
    .find(([n]) => n === name)

  if (!entry) return {}
  const Component = entry[1]
  return {
    render: ({ size }) => <Component style={{ width: size, height: size }} />,
  }
}

const meta = {
  title: 'Icons/Custom Icons',
  args: { size: 32 },
  argTypes: {
    size: {
      control: 'select',
      options: [16, 24, 32, 48, 64],
      mapping: { 16: 16, 24: 24, 32: 32, 48: 48, 64: 64 },
    },
  },
} satisfies Meta<{ size: number }>

export default meta

// Add one line per icon — rendering logic stays in makeStory above
export const LinkedIn = makeStory('LinkedIn')
