import { Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import planImage from '@/assets/cover-plano.png';
import { cn } from '@/lib/utils';
import {
  BILLING_TOGGLE_BUTTON,
  BILLING_TOGGLE_BUTTON_ACTIVE,
  BILLING_TOGGLE_BUTTON_INACTIVE,
  PRICING_DARK_DESKTOP_GRADIENT,
  PRICING_DESKTOP_GRADIENT,
  PRICING_MOBILE_SHADOW,
} from '@/modules/landing/lib/pricing.styles';
import { CONTAINER } from '@/modules/landing/lib/styles';
import type { BillingCycle } from '@/modules/landing/types/pricing.types';
import { DEFAULT_PRICING } from '../content/pricing.content';

function BillingToggle({
  billingCycle,
  onBillingCycleChange,
}: {
  billingCycle: BillingCycle;
  onBillingCycleChange: (billingCycle: BillingCycle) => void;
}) {
  return (
    <div className="relative flex w-fit items-center rounded-full bg-emerald-600/10 dark:bg-white/20 text-base leading-none backdrop-blur-md">
      <button
        aria-pressed={billingCycle === 'annual'}
        className={cn(
          'px-7.5',
          BILLING_TOGGLE_BUTTON,
          billingCycle === 'annual' ? BILLING_TOGGLE_BUTTON_ACTIVE : BILLING_TOGGLE_BUTTON_INACTIVE,
        )}
        onClick={() => onBillingCycleChange('annual')}
        type="button"
      >
        Anual
      </button>
      <button
        aria-pressed={billingCycle === 'monthly'}
        className={cn(
          BILLING_TOGGLE_BUTTON,
          billingCycle === 'monthly'
            ? BILLING_TOGGLE_BUTTON_ACTIVE
            : BILLING_TOGGLE_BUTTON_INACTIVE,
        )}
        onClick={() => onBillingCycleChange('monthly')}
        type="button"
      >
        Mensal
      </button>
    </div>
  );
}

function FeatureList() {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-1 gap-y-1.5">
      {DEFAULT_PRICING.features.map((feature) => (
        <li
          className={cn('flex items-center gap-4 text-sm text-neutral-800 dark:text-white')}
          key={feature}
        >
          <Check aria-hidden className="size-5 stroke-3 text-emerald-600 dark:text-neutral-100" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function SubscribeAction({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={cn('flex items-center gap-6', mobile && 'flex-col items-start gap-5')}>
      <a
        className="flex relative h-13 w-66 items-center justify-between rounded-full border border-white/30 bg-emerald-600 px-2.5 py-4 text-center font-medium text-xl text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        href="#contact"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          {DEFAULT_PRICING.subscribeLabel}
        </span>
        <span className="flex size-9.5 items-center ml-auto justify-center rounded-full bg-white/20">
          <ChevronRight aria-hidden className="size-5" />
        </span>
      </a>
      <p className={'max-w-50 text-sm leading-5 text-neutral-800 dark:text-white'}>
        {DEFAULT_PRICING.customPlanLabel}{' '}
        <a
          className="font-extralight text-emerald-600 dark:text-inherit underline dark:decoration-neutral-100"
          href="#contact"
        >
          Montar plano personalizado
        </a>
      </p>
    </div>
  );
}

function PricingContent({ mobile = false }: { mobile?: boolean }) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');
  const price = DEFAULT_PRICING.prices[billingCycle];

  return (
    <div
      className={cn(
        'flex flex-col gap-7.5 backdrop-blur-[13.25px]',
        mobile
          ? cn(
              'rounded-5xl bg-white -mt-7.5 p-7 dark:bg-mobile-plan border dark:border-emerald-600/40',
            )
          : cn(
              'rounded-4xl border sm:p-7.5 lg:p-12.5',
              PRICING_DESKTOP_GRADIENT,
              PRICING_DARK_DESKTOP_GRADIENT,
            ),
      )}
    >
      <BillingToggle billingCycle={billingCycle} onBillingCycleChange={setBillingCycle} />
      <div className="flex flex-col gap-5">
        <h2
          className={cn(
            'max-w-115 font-heading font-medium tracking-tight text-neutral-700 dark:text-white',
            mobile ? 'text-4xl leading-10' : 'text-[45px] leading-13',
          )}
        >
          {DEFAULT_PRICING.title}{' '}
          <span className="text-emerald-600">
            {DEFAULT_PRICING.highlightTitle.replace('{price}', String(price))}
          </span>
        </h2>
        <p className="max-w-105 font-heading text-2xl text-neutral-800 leading-7.5 tracking-[-0.15px] dark:text-white">
          {DEFAULT_PRICING.description}
        </p>
      </div>
      <FeatureList />
      <SubscribeAction mobile={mobile} />
    </div>
  );
}

export function PricingBlock() {
  return (
    <section
      className="w-full relative px-3.5 bg-[#f9f9f9] dark:bg-neutral-900 sm:py-[57.5px]"
      id="planos"
    >
      <div className={cn(CONTAINER, 'px-0 overflow-hidden')}>
        <div className="hidden sm:block pointer-events-none absolute left-1/2 right-1/2 -translate-x-1/2 top-19 h-187 w-full max-w-356 bg-linear-to-b from-emerald-600/8 via-emerald-600/8 to-emerald-600/6 blur-[96.1px]" />
        <div
          className="relative min-h-203.75 overflow-hidden rounded-plan bg-cover bg-center hidden sm:block"
          style={{ backgroundImage: `url(${planImage})` }}
        >
          <div className="relative z-10 flex min-h-203.75 items-center p-4 lg:p-15">
            <div className="w-149.25">
              <PricingContent />
            </div>
          </div>
        </div>

        <div className={cn('sm:hidden block', PRICING_MOBILE_SHADOW)}>
          <div className="relative h-100 overflow-hidden rounded-t-5xl">
            <img
              alt="Profissional sorrindo em um escritório"
              className="size-full object-cover scale-160 bg-center -translate-x-11"
              src={planImage}
            />
          </div>
          <PricingContent mobile />
        </div>
      </div>
    </section>
  );
}
