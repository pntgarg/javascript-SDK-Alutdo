import {
  BlankExperienceContentType,
  config,
  initContentTypeRegistry,
  initDisplayTemplateRegistry,
  OptiFormsConditionContentType,
  OptiFormsContainerDataContentType,
  OptiFormsDependencyRuleContentType,
  OptiFormsSubmitElementContentType,
  OptiFormsTextareaElementContentType,
  OptiFormsTextboxElementContentType,
} from '@optimizely/cms-sdk';
import {
  configureAdapter,
  initReactComponentRegistry,
  ReactContextAdapter,
} from '@optimizely/cms-sdk/react/server';
import BlankExperience from '../components/pages/BlankExperience';
import Start, { StartPage } from '../components/pages/Start';
import BlankSection from '../components/sections/Blank';
import ImageCard, { ImageCardComponent } from '../components/elements/ImageCard';
import Heading, {
  HeadingComponent,
  HeadingDisplayTemplate,
} from '../components/elements/Heading';
import HorizontalRuler, {
  HorizontalRulerComponent,
} from '../components/elements/HorizontalRuler';
import RichText, { RichTextComponent } from '../components/elements/RichText';
import Image, { ImageComponent } from '../components/elements/Image';
import Video, { VideoComponent } from '../components/elements/Video';
import Hero, { HeroSection } from '../components/sections/Hero';
import {
  ColumnCardDisplayTemplate,
  ColumnDisplayTemplate,
  RowDisplayTemplate,
  SectionDisplayTemplate,
} from '../components/sections/DisplayTemplates';
import Button, {
  ButtonComponent,
  ButtonDisplayTemplate,
} from '../components/elements/Button';
import Product, { ProductPage } from '../components/pages/Product';
import { EyebrowComponent } from '../components/blocks/Eyebrow';
import Standard, { StandardPage } from '../components/pages/Standard';
import News, { NewsPage } from '../components/pages/News';
import TeaserCard, {
  TeaserCardComponent,
} from '../components/elements/TeaserCardComponent';
import NewsEventsList, {
  NewsEventsListContentType,
} from '../components/blocks/NewsEventsList';
import EventCard, { EventCardComponent } from '../components/elements/EventCard';
import EventCardsList, {
  EventCardsListContentType,
} from '../components/blocks/EventCardsList';
import FormContainer from '../components/forms/FormContainer';
import FormInput from '../components/forms/FormInput';
import FormSubmit from '../components/forms/FormSubmit';
import FormTextarea from '../components/forms/FormTextarea';

export function initialize() {
  configureAdapter(new ReactContextAdapter());

  config({
    apiKey: process.env.OPTIMIZELY_GRAPH_SINGLE_KEY!,
    graphUrl: process.env.OPTIMIZELY_GRAPH_GATEWAY!,
    fragment: {
      richTextFormat: 'json',
    },
    query: {
      host: process.env.APPLICATION_HOST,
    },
  });

  initContentTypeRegistry([
    BlankExperienceContentType,
    ProductPage,
    StandardPage,
    StartPage,
    NewsPage,
    EyebrowComponent,
    HeroSection,
    ImageCardComponent,
    ButtonComponent,
    HeadingComponent,
    HorizontalRulerComponent,
    TeaserCardComponent,
    NewsEventsListContentType,
    ImageComponent,
    RichTextComponent,
    VideoComponent,
    EventCardComponent,
    EventCardsListContentType,
    // This Graph instance only has these OptiForms types. Registering the rest
    // makes every Standard Page query fail with unknown-type errors.
    OptiFormsContainerDataContentType,
    OptiFormsTextboxElementContentType,
    OptiFormsTextareaElementContentType,
    OptiFormsSubmitElementContentType,
    OptiFormsDependencyRuleContentType,
    OptiFormsConditionContentType,
  ]);

  initReactComponentRegistry({
    resolver: {
      BlankExperience,
      ProductPage: Product,
      StandardPage: Standard,
      StartPage: Start,
      NewsPage2: News,
      NewsEvents: NewsEventsList,
      TeaserCardComponent: TeaserCard,
      BlankSection,
      HeroSection: Hero,
      ImageCardElement: ImageCard,
      ButtonElement: Button,
      HeadingElement: Heading,
      HorizontalRulerElement: HorizontalRuler,
      ImageElement: Image,
      RichTextElement: RichText,
      VideoElement: Video,
      EventCardComponent: EventCard,
      EventCardsList,
      OptiFormsContainerData: FormContainer,
      OptiFormsTextboxElement: FormInput,
      OptiFormsTextareaElement: FormTextarea,
      OptiFormsSubmitElement: FormSubmit,
    },
  });

  initDisplayTemplateRegistry([
    SectionDisplayTemplate,
    RowDisplayTemplate,
    ColumnDisplayTemplate,
    ColumnCardDisplayTemplate,
    ButtonDisplayTemplate,
    HeadingDisplayTemplate,
  ]);
}
