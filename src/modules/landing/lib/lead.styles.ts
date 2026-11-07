import { cn } from '@/lib/utils';

export const LEAD_CONTAINER = cn(
  'mx-auto w-full max-w-360 px-6 sm:px-8 lg:px-20',
  'py-8 lg:py-17.25',
);

export const EYEBROW_BADGE = cn(
  'block w-fit rounded-[22px] border border-emerald-200 bg-neutral-50 px-3.25 py-1.75 text-center',
  'font-semibold text-emerald-600 text-sm/6 tracking-[1.5px]',
  'drop-shadow-[0_4px_8.2px_rgba(0,0,0,0.06)]',
  'dark:border-turquesa-700 dark:bg-emerald-500/10 dark:text-emerald-300',
);

export const SEAL_BADGE = cn(
  'flex items-center gap-3 rounded-[10px] px-3.5 py-2 font-bold text-sm/5 tracking-[-0.16px]',
  'border border-emerald-900 bg-neutral-50/28 text-emerald-900 backdrop-blur-xs',
  'dark:border-2 dark:border-white/14 dark:bg-white/6 dark:text-neutral-50',
);

export const LABEL_STYLE = cn('font-medium text-neutral-600 text-xl/6 dark:text-neutral-400');

export const SECTION_HEADING = cn(
  'font-heading font-semibold text-2xl/7.5 tracking-[-0.15px] dark:text-neutral-300',
);

export const INPUT_STYLE = cn(
  'h-15 w-full rounded-[8px] border-2 border-neutral-200 bg-neutral-50 px-5',
  'text-base text-neutral-900 placeholder:text-neutral-400 transition-colors',
  'focus:border-emerald-600 focus:bg-white focus:outline-none',
  'dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-600',
  'aria-invalid:ring-0 aria-invalid:bg-destructive/10',
  'dark:focus:border-emerald-600 dark:focus:bg-neutral-800',
);

export const EMPLOYEE_BUTTON = {
  active: cn(
    'flex h-15 w-full items-center justify-center rounded-[10px] border-2',
    'border-emerald-600 bg-emerald-50 px-3 font-bold text-lg/7 text-emerald-600',
    'dark:border-emerald-600 dark:bg-emerald-950/24 dark:text-emerald-300',
    'cursor-pointer transition-all focus-within:ring-3 focus-within:ring-emerald-600/35 focus-within:ring-offset-2 dark:focus-within:ring-emerald-400/35 dark:focus-within:ring-offset-neutral-900',
  ),
  idle: cn(
    'flex h-15 w-full items-center justify-center rounded-[10px] border-2',
    'border-neutral-200 bg-neutral-50 px-3 font-bold text-lg/7 text-neutral-400',
    'hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900',
    'dark:text-neutral-400 dark:hover:border-neutral-600',
    'cursor-pointer transition-all focus-within:ring-3 focus-within:ring-emerald-600/35 focus-within:ring-offset-2 dark:focus-within:ring-emerald-400/35 dark:focus-within:ring-offset-neutral-900',
  ),
} as const;

export const CHALLENGE_BUTTON = {
  active: cn(
    'flex h-16 items-center justify-between rounded-[10px] border-2 px-6 text-left',
    'border-emerald-600 bg-emerald-50 font-bold text-base/6 text-emerald-600',
    'dark:border-emerald-600 dark:bg-emerald-950/24 dark:text-emerald-300',
    'transition-all cursor-pointer',
  ),
  idle: cn(
    'flex h-16 items-center justify-between rounded-[10px] border-2 px-6 text-left',
    'border-neutral-200 bg-neutral-50 font-bold text-base/6 text-neutral-400',
    'hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900',
    'dark:text-neutral-400 dark:hover:border-neutral-600',
    'transition-all cursor-pointer',
  ),
} as const;

export const SUBMIT_BUTTON = cn(
  'flex w-full items-center justify-center gap-3 rounded-[10px] dark:rounded-[14px]',
  'bg-emerald-700 py-5.5 px-6 font-heading font-semibold text-base/7.5 text-neutral-50 lg:text-2xl/7.5',
  'tracking-[-0.15px] shadow-[0px_5px_4px_rgba(0,0,0,0.2)] transition-colors',
  'hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70',
  'dark:shadow-[0px_5px_5px_rgba(2,44,34,0.38)] cursor-pointer',
);

export const BACK_BUTTON = cn(
  'flex h-18.5 w-full max-w-97.5 items-center justify-center gap-3 rounded-[10px]',
  'border-2 border-neutral-200 font-medium text-lg text-neutral-400 shadow-[0px_5px_8px_rgba(0,0,0,0.03)]',
  'transition-all hover:border-neutral-300 hover:text-neutral-600 lg:text-xl',
  'dark:border-neutral-700 dark:hover:border-neutral-600 dark:hover:text-neutral-200 cursor-pointer',
);
