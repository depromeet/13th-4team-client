import { Meta, StoryObj } from '@storybook/react';
import SignUpContents from './SignUpContents';
import emptyFunction from '@/shared/utils/emptyFunction';
import Modal from '@/components/Modal/Modal';

const meta = {
  title: 'Auth/AuthModal/ModalContents',
  component: SignUpContents,
} satisfies Meta<typeof SignUpContents>;

export default meta;
type Story = StoryObj<typeof SignUpContents>;

export const _SignUpContents: Story = {
  render: () => (
    <Modal size={'md'} isOpen onClose={emptyFunction}>
      <SignUpContents signIn={emptyFunction} />
    </Modal>
  ),
};