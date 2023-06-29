'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import { STEP, STEPS } from '@/feature/analyze/constants';

import Tag from '../Tag/Tag';
import ProgressBar from './ProgressBar';

const PROGRESS_STEP_FACTOR = 100 / STEPS.length;

const Progress = () => {
  const pathname = usePathname();
  const currentStepId = STEPS.find((step) => step.route === pathname)?.id ?? STEP.experience;
  const progress = PROGRESS_STEP_FACTOR * currentStepId;

  return (
    <div className="w-[100%] rounded-[24px]">
      <div className="flex justify-between mb-[16px]">
        <span className="subhead2">경험분해 완성도</span>
        <Tag size="S" variant="gray100">
          {`${progress}%`}
        </Tag>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Progress;
