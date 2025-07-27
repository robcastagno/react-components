import type { Meta, StoryObj } from '@storybook/react-vite';
import Popover from '../components/Popover';

const meta = {
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Arguments for the component
  },
}
