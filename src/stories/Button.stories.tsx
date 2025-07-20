import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/Button';

const meta = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'invalid'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
    colors: {
      options: ['blue', 'gray', 'red', 'green', 'yellow', 'purple'],
      control: { type: 'select' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    radius: 'md',
    colors: 'blue',
    loading: false,
    onClick: () => {window.alert('Button clicked!')},
  },
}