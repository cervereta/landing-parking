declare global {
  interface Window {
    gtag?: (command: string, target: string, config?: Record<string, unknown>) => void;
  }
}

export type AnalyticsEvent = {
  category: 'user' | 'navigation' | 'conversion' | 'engagement';
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, unknown>;
};

export interface AnalyticsProvider {
  track(event: AnalyticsEvent): void;
  pageview(path: string): void;
  identify(userId: string, traits?: Record<string, unknown>): void;
}

class ConsoleAnalytics implements AnalyticsProvider {
  track(event: AnalyticsEvent) {
    console.log('[Analytics]', event);
  }

  pageview(path: string) {
    console.log('[Analytics] Pageview:', path);
  }

  identify(userId: string, traits?: Record<string, unknown>) {
    console.log('[Analytics] Identify:', userId, traits);
  }
}

class GoogleAnalytics implements AnalyticsProvider {
  private gaId: string;

  constructor(gaId: string) {
    this.gaId = gaId;
  }

  track(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.properties,
      });
    }
  }

  pageview(path: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', this.gaId, {
        page_path: path,
      });
    }
  }

  identify(userId: string, traits?: Record<string, unknown>) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', this.gaId, {
        user_id: userId,
        ...traits,
      });
    }
  }
}

class Analytics {
  private provider: AnalyticsProvider;
  private static instance: Analytics;

  private constructor() {
    const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    if (enableAnalytics && gaId) {
      this.provider = new GoogleAnalytics(gaId);
    } else {
      this.provider = new ConsoleAnalytics();
    }
  }

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  track(event: AnalyticsEvent) {
    this.provider.track(event);
  }

  pageview(path: string) {
    this.provider.pageview(path);
  }

  identify(userId: string, traits?: Record<string, unknown>) {
    this.provider.identify(userId, traits);
  }
}

export const analytics = Analytics.getInstance();
