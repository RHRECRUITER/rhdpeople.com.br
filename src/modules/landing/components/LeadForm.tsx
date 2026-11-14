import { ArrowRight, Check } from 'lucide-react';
import { useEffect, useId, useRef } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { DEFAULT_LEAD } from '../content/lead.content';
import { useLeadForm } from '../hooks/useLeadForm';
import { LEAD_BADGE_ICONS } from '../lib/lead.icons';
import {
  BACK_BUTTON,
  CHALLENGE_BUTTON,
  EMPLOYEE_BUTTON,
  EYEBROW_BADGE,
  INPUT_STYLE,
  LABEL_STYLE,
  LEAD_CONTAINER,
  SEAL_BADGE,
  SECTION_HEADING,
  SUBMIT_BUTTON,
} from '../lib/lead.styles';
import { formatPhone } from '../lib/lead.utils';
import { SECTION_SURFACE } from '../lib/styles';
import type { LeadSectionContent } from '../types/lead.types';
import { Captcha } from './Captcha';

type LeadFormProps = {
  content?: LeadSectionContent;
};

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <span className="text-red-600 text-sm font-light" id={id} role="alert">
      {message}
    </span>
  );
}

export function LeadForm({ content = DEFAULT_LEAD }: LeadFormProps) {
  const errorId = useId();
  const successTitleRef = useRef<HTMLHeadingElement>(null);
  const {
    errorMessage,
    captcha,
    formState: { errors, isSubmitting },
    isSuccess,
    onSubmit,
    register,
    control,
    setValue,
    showForm,
    watch,
  } = useLeadForm();
  const employeeRange = watch('employee_range');

  const getFieldErrorMessage = (field: 'name' | 'company_name' | 'corporate_email' | 'phone') => {
    return errors[field]?.message;
  };

  useEffect(() => {
    if (!isSuccess) return;

    const frame = requestAnimationFrame(() => {
      successTitleRef.current?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, [isSuccess]);

  return (
    <section className={cn(SECTION_SURFACE, 'relative min-h-256 flex')} id="demonstracao">
      <div className={cn(LEAD_CONTAINER, 'relative flex-1')}>
        <div className="flex h-full flex-col gap-12 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-15.75 xl:grid-cols-[minmax(0,1fr)_37.0625rem]">
          <div className="relative flex flex-col items-start gap-6 lg:my-auto lg:h-full lg:max-h-195 lg:max-w-xl">
            <span className={cn(EYEBROW_BADGE, 'relative z-10')}>{content.eyebrow}</span>

            <div className="relative z-10 flex flex-col gap-5">
              <h2 className="font-heading font-bold text-4xl text-stone-800 tracking-[-0.8px] sm:text-5xl lg:text-[64px] lg:leading-19 dark:text-neutral-50">
                <span className="block">{content.title}</span>
                <span className="block text-emerald-700 dark:text-emerald-400">
                  {content.titleHighlight}
                </span>
              </h2>
              <p className="max-w-128.25 font-heading text-lg text-neutral-800 leading-relaxed tracking-[-0.15px] sm:text-xl lg:text-2xl lg:leading-7.5 dark:text-neutral-50">
                {content.description}
              </p>
            </div>

            <ul className="relative z-10 mt-6 flex flex-col gap-5">
              {content.checkpoints.map((checkpoint) => (
                <li className="flex items-center gap-3.5" key={checkpoint}>
                  <Check className="size-6 shrink-0 text-emerald-500 dark:text-emerald-300" />
                  <span className="font-medium text-lg text-neutral-600 leading-6.75 dark:text-neutral-300">
                    {checkpoint}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative z-10 mt-auto h-px w-full max-w-142.25 bg-emerald-700/18 dark:bg-white/10" />

            <div className="relative z-10 flex flex-wrap items-center gap-5">
              {content.badges.map((badge) => {
                const { Icon, strokeWidth } = LEAD_BADGE_ICONS[badge.icon];
                return (
                  <div className={SEAL_BADGE} key={badge.label}>
                    <Icon
                      nonScalingStroke
                      className="size-4 shrink-0 text-emerald-900 dark:text-neutral-50"
                      strokeWidth={strokeWidth}
                    />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 flex w-full lg:max-w-148.25">
            {isSuccess ? (
              <div className="flex flex-1 flex-col items-center justify-center py-12 text-center lg:py-20">
                <div className="flex w-full flex-col items-center gap-12">
                  <div className="flex flex-col items-center gap-6.25">
                    <div className="flex items-center justify-center rounded-full bg-emerald-200 p-3.75 dark:bg-emerald-900">
                      <div className="flex size-32 items-center justify-center rounded-full bg-emerald-50 sm:size-36 lg:size-37.25 dark:bg-emerald-600">
                        <Check
                          className="size-12 text-emerald-600 dark:text-neutral-50"
                          strokeWidth={3}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col">
                        <h3
                          className="font-heading font-bold text-3xl text-neutral-800 leading-tight tracking-[-0.3px] lg:text-[40px] lg:leading-12 dark:text-neutral-50"
                          ref={successTitleRef}
                          tabIndex={-1}
                        >
                          {content.successTitle}
                        </h3>
                        <h4 className="font-heading font-bold text-3xl text-emerald-500 leading-tight tracking-[-0.3px] lg:text-[40px] lg:leading-12 dark:text-emerald-400">
                          {content.successTitleHighlight}
                        </h4>
                      </div>
                      <p className="max-w-117.5 font-medium text-base text-neutral-500 leading-relaxed sm:text-lg lg:text-xl/6 dark:text-neutral-300">
                        {content.successDescription}
                      </p>
                    </div>
                  </div>
                  <button className={BACK_BUTTON} onClick={showForm} type="button">
                    <ArrowRight className="size-6.5 shrink-0 rotate-180" />
                    <span>{content.backButtonText}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form className="flex w-full flex-col gap-8" onSubmit={onSubmit}>
                <div aria-hidden="true" className="hidden">
                  <Input autoComplete="off" tabIndex={-1} type="text" {...register('website')} />
                </div>

                <h3 className="text-center font-heading font-bold text-[40px] text-neutral-800 leading-12 tracking-[-0.3px] lg:text-left dark:text-neutral-50">
                  {content.formTitle}
                </h3>

                <div className="flex flex-col gap-6.5">
                  <h4 className={cn(SECTION_HEADING, 'text-stone-800')}>{content.contactHeader}</h4>
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-3.5">
                        <Label className={LABEL_STYLE} htmlFor="lead-name">
                          {content.fields.name.label}
                        </Label>
                        <Input
                          aria-describedby={
                            getFieldErrorMessage('name') ? `${errorId}-name` : undefined
                          }
                          aria-invalid={Boolean(getFieldErrorMessage('name'))}
                          autoComplete="name"
                          className={INPUT_STYLE}
                          id="lead-name"
                          placeholder={content.fields.name.placeholder}
                          {...register('name')}
                        />
                        <ErrorMessage
                          id={`${errorId}-name`}
                          message={getFieldErrorMessage('name')}
                        />
                      </div>
                      <div className="flex flex-col gap-3.5">
                        <Label className={LABEL_STYLE} htmlFor="lead-company">
                          {content.fields.company.label}
                        </Label>
                        <Input
                          aria-describedby={
                            getFieldErrorMessage('company_name') ? `${errorId}-company` : undefined
                          }
                          aria-invalid={Boolean(getFieldErrorMessage('company_name'))}
                          autoComplete="organization"
                          className={INPUT_STYLE}
                          id="lead-company"
                          placeholder={content.fields.company.placeholder}
                          {...register('company_name')}
                        />
                        <ErrorMessage
                          id={`${errorId}-company`}
                          message={getFieldErrorMessage('company_name')}
                        />
                      </div>
                      <div className="flex flex-col gap-3.5">
                        <Label className={LABEL_STYLE} htmlFor="lead-email">
                          {content.fields.email.label}
                        </Label>
                        <Input
                          aria-describedby={
                            getFieldErrorMessage('corporate_email') ? `${errorId}-email` : undefined
                          }
                          aria-invalid={Boolean(getFieldErrorMessage('corporate_email'))}
                          autoComplete="email"
                          className={INPUT_STYLE}
                          id="lead-email"
                          placeholder={content.fields.email.placeholder}
                          type="email"
                          {...register('corporate_email')}
                        />
                        <ErrorMessage
                          id={`${errorId}-email`}
                          message={getFieldErrorMessage('corporate_email')}
                        />
                      </div>
                      <div className="flex flex-col gap-3.5">
                        <Label className={LABEL_STYLE} htmlFor="lead-phone">
                          {content.fields.phone.label}
                        </Label>
                        <Input
                          aria-describedby={
                            getFieldErrorMessage('phone') ? `${errorId}-phone` : undefined
                          }
                          aria-invalid={Boolean(getFieldErrorMessage('phone'))}
                          autoComplete="tel"
                          className={INPUT_STYLE}
                          id="lead-phone"
                          inputMode="tel"
                          placeholder={content.fields.phone.placeholder}
                          {...register('phone', {
                            onChange: (event) => {
                              setValue('phone', formatPhone(event.target.value), {
                                shouldDirty: true,
                                shouldValidate: true,
                              });
                            },
                          })}
                        />
                        <ErrorMessage
                          id={`${errorId}-phone`}
                          message={getFieldErrorMessage('phone')}
                        />
                      </div>
                    </div>

                    <fieldset className="m-0 border-0 p-0">
                      <legend className="mb-3.5 font-heading font-medium text-neutral-600 text-xl/6 dark:text-neutral-400">
                        {content.employeeCountHeader}
                      </legend>
                      <div className="grid grid-cols-2 gap-x-[15.5px] gap-y-4 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">
                        {content.employeeRanges.map((range) => {
                          const selected = employeeRange === range;
                          return (
                            <Label
                              className={selected ? EMPLOYEE_BUTTON.active : EMPLOYEE_BUTTON.idle}
                              key={range}
                            >
                              <Input
                                className="sr-only"
                                type="radio"
                                value={range}
                                {...register('employee_range')}
                              />
                              <span>{range}</span>
                            </Label>
                          );
                        })}
                      </div>
                      <ErrorMessage
                        id={`${errorId}-employee-range`}
                        message={errors.employee_range?.message}
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="h-[1.5px] w-full rounded-full bg-neutral-200 lg:max-w-73 dark:bg-neutral-900/45" />

                <fieldset
                  aria-describedby={errors.objective ? `${errorId}-objective` : undefined}
                  aria-invalid={Boolean(errors.objective)}
                  className="m-0 flex min-w-0 flex-col gap-2 border-0 p-0"
                >
                  <legend className={cn(SECTION_HEADING, 'mb-6.5 text-neutral-800')}>
                    {content.challengeHeader}
                  </legend>
                  <Controller
                    control={control}
                    name="objective"
                    render={({ field }) => (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8.25">
                        {content.challenges.map((challenge, index) => {
                          const selected = field.value[challenge.id];
                          return (
                            <button
                              aria-pressed={selected}
                              className={selected ? CHALLENGE_BUTTON.active : CHALLENGE_BUTTON.idle}
                              aria-describedby={
                                errors.objective ? `${errorId}-objective` : undefined
                              }
                              key={challenge.id}
                              onBlur={field.onBlur}
                              onClick={() =>
                                field.onChange({
                                  ...field.value,
                                  [challenge.id]: !selected,
                                })
                              }
                              ref={index === 0 ? field.ref : undefined}
                              type="button"
                            >
                              <span className="truncate pr-2">{challenge.label}</span>
                              <span
                                aria-hidden="true"
                                className={
                                  selected
                                    ? 'flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-600'
                                    : 'size-6 shrink-0 rounded-full border-[1.5px] border-neutral-400'
                                }
                              >
                                {selected && (
                                  <span className="size-2.5 rounded-full bg-emerald-50" />
                                )}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  <ErrorMessage id={`${errorId}-objective`} message={errors.objective?.message} />
                </fieldset>

                {errorMessage && (
                  <div
                    aria-live="polite"
                    className="rounded-lg border border-red-200 bg-red-50 p-4 font-medium text-red-700 text-sm dark:border-red-800 dark:bg-red-950/30 dark:text-red-300"
                    role="alert"
                  >
                    {errorMessage}
                  </div>
                )}

                <Captcha
                  disabled={isSubmitting || captcha.isLoading}
                  error={captcha.error}
                  image={captcha.image}
                  inputRef={captcha.inputRef}
                  onChange={captcha.onCodeChange}
                  onRefresh={() => void captcha.refresh()}
                  value={captcha.code}
                />

                <div className="flex flex-col items-center gap-4">
                  <button className={SUBMIT_BUTTON} disabled={isSubmitting} type="submit">
                    {isSubmitting ? (
                      <span>{content.submitButtonLoading}</span>
                    ) : (
                      <>
                        <span>{content.submitButtonText}</span>
                        <ArrowRight className="size-6.5 shrink-0" />
                      </>
                    )}
                  </button>
                  <p className="text-center font-bold text-neutral-400 text-sm leading-5 tracking-[-0.16px]">
                    {content.termsNotice}{' '}
                    <a
                      className="text-neutral-500 underline dark:text-neutral-300"
                      href="#privacidade"
                    >
                      {content.privacyPolicyText}
                    </a>{' '}
                    e{' '}
                    <a className="text-neutral-500 underline dark:text-neutral-300" href="#termos">
                      {content.termsOfUseText}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
