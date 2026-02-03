'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analytics } from '@/lib/analytics';

export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + searchParams.toString();
      analytics.pageview(url);
    }
  }, [pathname, searchParams]);
};

export const useAnalytics = () => {
  const trackEvent = (
    category: 'user' | 'navigation' | 'conversion' | 'engagement',
    action: string,
    label?: string,
    value?: number
  ) => {
    analytics.track({
      category,
      action,
      label,
      value,
    });
  };

  const identifyUser = (userId: string, traits?: Record<string, unknown>) => {
    analytics.identify(userId, traits);
  };

  return { trackEvent, identifyUser };
};
