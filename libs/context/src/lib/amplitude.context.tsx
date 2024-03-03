import React from 'react';
import { AmplitudeIntegration } from '@analytics';

export type AnalyticsContext =
  | {
      initialized: false;
      amplitude: null;
    }
  | {
      initialized: true;
      amplitude: AmplitudeIntegration;
    };

export const AnalyticsContext = React.createContext<AnalyticsContext>({
  initialized: false,
  amplitude: null
});
