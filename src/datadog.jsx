import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';

// Initialize Datadog RUM with error handling
try {
  console.log('Initializing Datadog...');

  datadogRum.init({
    applicationId: '6b8f5539-afc0-4948-a8de-7531e56d599e',
    clientToken: 'pub2a1a693b1d65d555d1a7b4e7a88345fd',
    site: 'datadoghq.com',
    service: 'gunabros',
    env: 'prod',
    version: '1.0.0',
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'allow',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    beforeSend: (event) => {
      try {
        console.log('Sending event to Datadog:', event);
        return true;
      } catch (error) {
        // If event logging fails, still send the event but log the error
        console.error('Error in beforeSend handler:', error);
        return true;
      }
    },
    plugins: [reactPlugin({ router: true })],
  });

  console.log('Datadog initialization complete');
} catch (error) {
  // Log the error but allow the app to continue running
  console.error('Failed to initialize Datadog RUM:', error);
}