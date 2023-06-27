'use client';

import ResumeCard from '@/features/collection/components/cards/ResumeCard';
import ChipListNav from '@/features/collection/components/nav/ChipListNav';
import { useState } from 'react';

const Page = () => {
  // TODO: 추후 이동

  const resumes = [
    {
      id: 1234,
      title: '디프만 13기',
      createdAt: '2023-06-16T14:42:03.704Z',
      updatedAt: '2023-06-16T14:42:03.704Z',
    },
    {
      id: 1235,
      title: '코코아',
      createdAt: '2023-06-16T14:42:03.704Z',
      updatedAt: '2023-06-16T14:42:03.704Z',
    },
    {
      id: 1236,
      title: '네버',
      createdAt: '2023-06-16T14:42:03.704Z',
      updatedAt: '2023-06-16T14:42:03.704Z',
    },
  ];

  const questions = [
    {
      id: 1234,
      title: '디프만 13기 지원동기',
      updatedAt: '2023-06-16T14:42:03.702Z',
      answer:
        '업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선 효율성을 개선했습니다.업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선 효율성을 개선했습니다.업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선 효율성을 개선했습니다.업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선 효율성을 개선했습니다.',
    },
    {
      id: 1235,
      title: '디프만 13기 지원동기',
      updatedAt: '2023-06-16T14:42:03.702Z',
      answer:
        '업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선 효율성을 개선했습니다.',
    },
    {
      id: 1236,
      title: '디프만 13기 지원동기',
      updatedAt: '2023-06-16T14:42:03.702Z',
      answer:
        '업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선 효율성을 개선했습니다.',
    },
    {
      id: 1237,
      title: '디프만 13기 지원동기',
      updatedAt: '2023-06-16T14:42:03.702Z',
      answer:
        '업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효율성을 높인 경험이 있습니다. 대학교에서 근로장학생으로, 교수님의 비대면 수업을 보조하는 업무를 맡았습니다. 당시 업무 체계는 교수님, 학생들의 민원이 발생할 때 교직원 선생님의 지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선을 통해 효지시에 따라 해결했습니다. 민원이 동시에 발생해서 교직원 선생님의 지시가 불가능했을 때 적시에 해결하지 못하는 문제가 존재해서 업무 개선의 필요성을 느꼈습니다. 업무 개선 효율성을 개선했습니다.',
    },
  ];

  const [selectedResumeId, setSelectedResumeId] = useState(resumes[0].id);

  return (
    <>
      {/* 자기소개서 제목 목록 */}
      <ChipListNav items={resumes} selectedItem={selectedResumeId} changeItem={setSelectedResumeId} />
      {/* 자기소개서 상세 */}
      <section>
        <ul className="flex flex-col gap-[40px]">
          {questions.map(({ id, title, updatedAt, answer }) => (
            <li key={id}>
              <ResumeCard title={title} updatedAt={updatedAt} answer={answer} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
