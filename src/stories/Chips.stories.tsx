import type { Meta, StoryObj } from '@storybook/react-vite';
import Chips from '../components/Chips';

const meta = {
  component: Chips,
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Arguments for the component
  },
}
