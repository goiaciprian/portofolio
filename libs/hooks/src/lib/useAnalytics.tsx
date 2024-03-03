import { AmplitudeIntegration } from 'analytics';
import { AnalyticsContext } from '@context';

export const useAnalytics = (): AnalyticsContext => {
  const amplitude = new AmplitudeIntegration();

  return {
    initialized: true,
    amplitude
  };
};
