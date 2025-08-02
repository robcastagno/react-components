import type { Meta, StoryObj } from '@storybook/react-vite';
import VirtualScroller from '../components/VirtualScroller';

const meta = {
  component: VirtualScroller,
} satisfies Meta<typeof VirtualScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: Array.from({ length: 100 }, (_, index) => (
      <div key={index} style={{ height: '20px', display: 'flex', alignItems: 'center', paddingLeft: '8px', borderBottom: '1px solid #eee', boxSizing: 'border-box' }}>
        Item {index}
      </div>
    )),
    height: 300,
    itemHeight: 21,
    buffer: 5,
  },
};