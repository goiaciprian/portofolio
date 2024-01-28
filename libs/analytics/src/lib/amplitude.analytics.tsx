import * as amplitude from '@amplitude/analytics-browser';

enum AMPLITUDE_EVENTS {
  CONTACT_ME = 'contact_me',
  MORE_ABOUT_ME = 'more_about_me',
  MORE_PROJECTS = 'more_projects',
  VERCEL = 'vercel',
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  QUICK_ABOUT_ME_NAV = 'quick_about_me_nav',
  QUICK_PROJECTS_NAV = 'quick_projects_nav',
  QUICK_CONTACT_NAV = 'quick_contact_nav',
  QUICK_TOP = 'quick_top'
}

export class AmplitudeIntegration {
  public constructor() {
    amplitude.init(import.meta.env.VITE_AMPLITUDE_KEY);
    amplitude.setGroup('environment', import.meta.env.VITE_ENV);
  }

  trackContactMe() {
    amplitude.track(AMPLITUDE_EVENTS.CONTACT_ME);
  }

  trackMoreAboutMe() {
    amplitude.track(AMPLITUDE_EVENTS.MORE_ABOUT_ME);
  }

  trackMoreProjects() {
    amplitude.track(AMPLITUDE_EVENTS.MORE_PROJECTS);
  }

  trackVercel() {
    amplitude.track(AMPLITUDE_EVENTS.VERCEL);
  }

  trackGithub() {
    amplitude.track(AMPLITUDE_EVENTS.GITHUB);
  }

  trackLinkedin() {
    amplitude.track(AMPLITUDE_EVENTS.LINKEDIN);
  }

  trackQuickAboutMe() {
    amplitude.track(AMPLITUDE_EVENTS.QUICK_ABOUT_ME_NAV);
  }

  trackQuickProjects() {
    amplitude.track(AMPLITUDE_EVENTS.QUICK_PROJECTS_NAV);
  }

  trackQuickContact() {
    amplitude.track(AMPLITUDE_EVENTS.QUICK_CONTACT_NAV);
  }

  trackTop() {
    amplitude.track(AMPLITUDE_EVENTS.QUICK_TOP);
  }
}
