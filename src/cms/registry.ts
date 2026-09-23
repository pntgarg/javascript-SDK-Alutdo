import {
  BlankSectionContentType,
  initContentTypeRegistry,
} from '@optimizely/cms-sdk';
import { initReactComponentRegistry } from '@optimizely/cms-sdk/react/server';

import {
  AboutUsPage,
  AboutUsPageContentType,
} from '@/components/cms/pages/AboutUsPage';

import {
  JsLandingPage,
  JsLandingPageContentType,
} from '@/components/cms/pages/JsLandingPage';

import {
  PageTitleHeroBanner,
  PageTitleHeroBannerContentType,
} from '@/components/cms/components/PageTitleHeroBanner';

import {
  TeaserBlock,
  TeaserBlockContentType,
} from '@/components/cms/components/TeaserBlock';

import {
  LayoutSettingsBlockContentType,
} from '@/components/cms/components/LayoutSettingsBlock';

import {
  RobotsBlockContentType,
} from '@/components/cms/components/RobotsBlock';

import {
  OpenGraphContentType,
} from '@/components/cms/components/OpenGraph';

import {
  TwitterCardDetailsContentType,
} from '@/components/cms/components/TwitterCardDetails';

import {
  PageSeoSettingsContentType,
} from '@/components/cms/components/PageSeoSettings';

import {
  JsBlankExperience,
  JsBlankExperienceContentType,
} from '@/components/cms/experiences/JsBlankExperience';

import { BlankSection } from '@/components/cms/sections/BlankSection';

initContentTypeRegistry([
  AboutUsPageContentType,
  JsLandingPageContentType,
  PageTitleHeroBannerContentType,
  TeaserBlockContentType,
  LayoutSettingsBlockContentType,
  RobotsBlockContentType,
  OpenGraphContentType,
  TwitterCardDetailsContentType,
  PageSeoSettingsContentType,
  JsBlankExperienceContentType,
  BlankSectionContentType,
]);

initReactComponentRegistry({
  resolver: {
    AboutUsPage,
    JsLandingPage,
    PageTitleHeroBanner,
    TeaserBlock,
    JsBlankExperience,
    BlankSection,
  },
});
