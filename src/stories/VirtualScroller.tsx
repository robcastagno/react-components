import type { Meta, StoryObj } from '@storybook/react-vite';
import VirtualScroller from '../components/VirtualScroller';

const meta = {
  component: VirtualScroller,
} satisfies Meta<typeof VirtualScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Arguments for the component
  },
}
