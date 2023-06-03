/* eslint-disable unused-imports/no-unused-vars */

/**
 * @name MergeComponentProps
 * @description ComponentPropsWithRef와 커스텀 Props 타입을 병합합니다.
 */
type MergeComponentProps<T extends React.ElementType, P extends object = {}> = Omit<
  React.ComponentPropsWithRef<T>,
  keyof P
> &
  P;

// Button

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'secondary-green' | 'outlined';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Chip

type ChipVariant = 'primary' | 'secondary';
type ChipSize = 'sm' | 'md';

// Badge

type BadgeStyle = 'tertiary' | 'outlined-purple' | 'outlined-green' | 'filled-purple' | 'filled-green' | 'dark';
type BadgeSize = 'sm' | 'md' | 'lg';

// Tooltip

type TooltipType = 'strong' | 'light';
type TooltipPosition =
  | 'center-top'
  | 'center-bottom'
  | 'right-top'
  | 'right-bottom'
  | 'left-top'
  | 'left-bottom'
  | 'side-left-center'
  | 'side-right-center';