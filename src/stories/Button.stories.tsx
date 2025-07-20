import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/Button';

const meta = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['Primary', 'Secondary', 'Danger', 'Invalid', 'Success', 'Warning']
    },
    size: {
      control: { type: 'select' },
      options: ['Small', 'Medium', 'Large']
    },
    radius: {
      control: { type: 'select' },
      options: ['None', 'Small', 'Medium', 'Large', 'Full']
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'Primary',
    size: 'Medium',
    radius: 'Medium',
    onClick: () => {window.alert('Button clicked!')},
  },
}
