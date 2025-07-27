import type { Meta, StoryObj } from '@storybook/react-vite';
import DataGrid from '../components/DataGrid';

const meta = {
  component: DataGrid,
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Arguments for the component
  },
}
