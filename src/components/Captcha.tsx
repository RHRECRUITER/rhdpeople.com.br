import { RefreshCw } from 'lucide-react';
import type { Ref } from 'react';
import { DEFAULT_LEAD } from '@/modules/landing/content/lead.content';
import type { LeadSectionContent } from '@/modules/landing/types/lead.types';
import { Input } from './ui/input';

type CaptchaProps = {
  image: string | null;
  value: string;
  error?: string | null;
  disabled?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  onChange: (value: string) => void;
  onRefresh: () => void;
  content?: LeadSectionContent['captcha'];
};

export function Captcha({
  image,
  value,
  error,
  disabled = false,
  inputRef,
  onChange,
  onRefresh,
  content = DEFAULT_LEAD.captcha,
}: CaptchaProps) {
  return (
    <div className="flex flex-col gap-3">
      <label
        className="font-medium text-neutral-600 text-lg/6.5 dark:text-neutral-400"
        htmlFor="lead-captcha"
      >
        {content.label}
      </label>
      <div className="flex flex-wrap items-center gap-3">
        {image ? (
          <img
            alt="Código de segurança"
            className="h-15 w-40 rounded-md border border-neutral-200 bg-white object-contain"
            src={image}
          />
        ) : (
          <div className="flex h-15 w-40 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 text-sm">
            Carregando...
          </div>
        )}
        <button
          aria-label="Gerar outro código"
          className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-neutral-800"
          disabled={disabled}
          onClick={onRefresh}
          type="button"
        >
          <RefreshCw className="size-5" />
        </button>
        <Input
          aria-describedby={error ? 'lead-captcha-error' : undefined}
          aria-invalid={Boolean(error)}
          placeholder={content.placeholder}
          autoComplete="off"
          className="h-15 w-32"
          disabled={disabled || !image}
          id="lead-captcha"
          ref={inputRef}
          inputMode="text"
          maxLength={5}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        />
      </div>
      {error && (
        <span className="text-red-600 text-sm font-light" id="lead-captcha-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
