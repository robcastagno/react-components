import type { Meta, StoryObj } from '@storybook/react-vite';
import Autocomplete from '../components/Autocomplete';

const meta = {
  component: Autocomplete,
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Arguments for the component
  },
}
