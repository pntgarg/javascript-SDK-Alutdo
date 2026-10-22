import { contentType } from '@optimizely/cms-sdk';

export const StartPage = contentType({
  key: 'StartPage',
  baseType: '_experience',
  displayName: 'Start Page',
  description: 'Represents the start page of the website.',
  mayContainTypes: ['*'],
});
