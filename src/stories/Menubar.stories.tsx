import type { Meta, StoryObj } from '@storybook/react-vite';
import Menubar from '../components/Menubar';

const meta = {
  component: Menubar,
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Arguments for the component
  },
}
