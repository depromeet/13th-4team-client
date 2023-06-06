import type { Meta, StoryObj } from '@storybook/react';

import QuestionAddButton from './QuestionAddButton';

const meta: Meta<typeof QuestionAddButton> = {
  title: 'Components/LNB/QuestionAddButton',
  component: QuestionAddButton,
};

export default meta;

type Story = StoryObj<typeof QuestionAddButton>;

export const Default: Story = {
  render: (args) => <QuestionAddButton {...args} />,
  args: {},
};
