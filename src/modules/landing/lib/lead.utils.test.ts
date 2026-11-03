import { describe, expect, it } from 'vitest';
import { formatPhone } from './lead.utils';

describe('formatPhone', () => {
  it('formats a mobile phone while typing', () => {
    expect(formatPhone('11987654321')).toBe('(11) 98765-4321');
  });

  it('removes non-digits and limits the value to eleven digits', () => {
    expect(formatPhone('(11) 98765-432199')).toBe('(11) 98765-4321');
  });

  it('keeps partial input usable', () => {
    expect(formatPhone('1198')).toBe('(11) 98');
  });
});
