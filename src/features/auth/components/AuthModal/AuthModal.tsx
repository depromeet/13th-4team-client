'use client';

import Modal from '@/components/Modal/Modal';
import { useRouter, useSearchParams } from 'next/navigation';
import SignUpContents from './ModalContents/SignUpContents';
import WelcomeContents from './ModalContents/WelcomeContents';
import CategoriesContents from './ModalContents/CategoriesContents';
import { useUserInfo } from '@/shared/store/user';
import { useState } from 'react';

type AuthModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  signIn: () => void;
};

const AuthModal = ({ isOpen, handleClose, signIn }: AuthModalProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { nickname } = useUserInfo();

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const modalSize = () => {
    const steps = searchParams.get('steps');

    switch (steps) {
      case 'signUp':
        return 'md';
      case 'welcome':
        return 'xl';
      case 'categories':
        return '5xl';
    }
  };

  const renderContents = () => {
    const steps = searchParams.get('steps');

    switch (steps) {
      case 'signUp':
        return <SignUpContents signIn={signIn} />;
      case 'welcome':
        return <WelcomeContents nickname={nickname} onClickButton={() => router.push('/?steps=categories')} />;
      case 'categories':
        return (
          <CategoriesContents
            nickname={nickname}
            selectedCategory={selectedCategory}
            onClickGoBack={() => router.back()}
            onClickCategory={setSelectedCategory}
          />
        );
    }
  };

  return (
    <Modal size={modalSize()} isOpen={isOpen} onClose={handleClose}>
      {renderContents()}
    </Modal>
  );
};

export default AuthModal;
