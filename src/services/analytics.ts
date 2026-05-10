import { AnalyticsEvent } from '../models/types';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export class AnalyticsService {
  static trackEvent({ eventName, category, label, value }: AnalyticsEvent) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: category,
        event_label: label,
        value: value
      });
    }

    console.log('Analytics Event:', { eventName, category, label, value });
  }

  static trackPageView(path: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path
      });
    }
    console.log('Page View:', path);
  }

  static trackCTAClick(ctaName: string) {
    this.trackEvent({
      eventName: 'cta_click',
      category: 'engagement',
      label: ctaName
    });
  }

  static trackProjectView(projectId: string, projectTitle: string) {
    this.trackEvent({
      eventName: 'project_view',
      category: 'portfolio',
      label: `${projectId} - ${projectTitle}`
    });
  }

  static trackFormSubmit(formName: string) {
    this.trackEvent({
      eventName: 'form_submit',
      category: 'conversion',
      label: formName
    });
  }
}
