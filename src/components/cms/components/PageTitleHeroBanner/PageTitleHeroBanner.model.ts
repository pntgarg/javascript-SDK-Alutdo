import { contentType } from '@optimizely/cms-sdk';

export const PageTitleHeroBannerContentType = contentType({
  key: 'PageTitleHeroBanner',
  displayName: 'Page Title Hero Banner',
  description:
    'Full-width introductory banner with optional background image, theme, breadcrumb or eyebrow, page title and description.',
  baseType: '_component',

  properties: {
    DesktopImage: {
      type: 'contentReference',
      displayName: 'Desktop Image',
      description:
        'Background image for desktop. Takes precedence over the theme color.',
      group: 'content',
      allowedTypes: ['_image'],
    },

      MobileImage: {
        type: 'contentReference',
        displayName: 'Mobile Image',
        description:
          'Background image for mobile. Falls back to the desktop image or theme.',
        group: 'content',
        allowedTypes: ['_image'],
      },

    BannerTheme: {
    type: 'string',
    format: 'selectOne',
    displayName: 'Theme',
    description: 'Select the banner color theme.',
    group: 'content',
    sortOrder: 30,
    enum: [
      {
        value: 'light',
        displayName: 'Light',
      },
      {
        value: 'grey',
        displayName: 'Grey',
      },
      {
        value: 'dark',
        displayName: 'Dark',
      },
      {
        value: 'brand',
        displayName: 'Brand',
      },
    ],
  },
    ShowBreadcrumb: {
      type: 'boolean',
      displayName: 'Show Breadcrumb',
      description:
        'Shows the page breadcrumb instead of the eyebrow text.',
      group: 'content',
    },

    EyeBrow: {
      type: 'string',
      displayName: 'Eyebrow',
      description:
        'Optional label above the title. Hidden when the breadcrumb is enabled.',
      group: 'content',
    },

    BannerTitle: {
      type: 'richText',
      displayName: 'Title',
      description:
        'Main page title supporting formatted and highlighted text.',
      group: 'content',
    },

    BannerDescription: {
      type: 'richText',
      displayName: 'Description',
      description: 'Optional supporting content below the title.',
      group: 'content',
    },

    EnableImageOverlay: {
      type: 'boolean',
      displayName: 'Enable Image Overlay',
      description:
        'Applies a readability overlay when a background image is present.',
      group: 'content',
    },

    OverlayOpacity: {
    type: 'string',
    format: 'selectOne',
    displayName: 'Overlay Opacity',
    description: 'Select the strength of the image overlay.',
    group: 'content',
    sortOrder: 110,
    enum: [
      {
        value: 'light',
        displayName: 'Light',
      },
      {
        value: 'medium',
        displayName: 'Medium',
      },
      {
        value: 'dark',
        displayName: 'Dark',
      },
    ],
  },
  },
});