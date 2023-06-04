import { ComponentProps } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

const IconMoreVertical = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-gray-400', className)}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M9.99967 3.33333C9.53944 3.33333 9.16634 3.70643 9.16634 4.16667C9.16634 4.6269 9.53944 5 9.99967 5C10.4599 5 10.833 4.6269 10.833 4.16667C10.833 3.70643 10.4599 3.33333 9.99967 3.33333Z"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99967 9.16634C9.53944 9.16634 9.16634 9.53944 9.16634 9.99967C9.16634 10.4599 9.53944 10.833 9.99967 10.833C10.4599 10.833 10.833 10.4599 10.833 9.99967C10.833 9.53944 10.4599 9.16634 9.99967 9.16634Z"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99967 15.0003C9.53944 15.0003 9.16634 15.3734 9.16634 15.8337C9.16634 16.2939 9.53944 16.667 9.99967 16.667C10.4599 16.667 10.833 16.2939 10.833 15.8337C10.833 15.3734 10.4599 15.0003 9.99967 15.0003Z"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconMoreVertical;
