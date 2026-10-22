import { contentType } from '@optimizely/cms-sdk';
import { TeaserCardComponent } from '../../elements/TeaserCard/model';

export const NewsEventsListContentType = contentType({
  key: 'NewsEvents',
  displayName: 'News List',
  baseType: '_component',
  description: 'Component for rendering list of news and events.',
  properties: {
    title: {
      type: 'string',
      displayName: 'Title',
      group: 'Content',
    },
    teasers: {
      type: 'array',
      items: {
        type: 'content',
        allowedTypes: [TeaserCardComponent],
      },
      displayName: 'List of Teasers',
    },
  },
  compositionBehaviors: ['sectionEnabled'],
});
