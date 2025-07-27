import type { Meta, StoryObj } from '@storybook/react-vite';
import Tooltip from '../components/Tooltip';

const meta = {
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Arguments for the component
  },
}
