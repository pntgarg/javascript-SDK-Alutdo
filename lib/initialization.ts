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
import BlankExperience from '../components/pages/BlankExperience/BlankExperience';
import Start from '../components/pages/Start/Start';
import { StartPage } from '../components/pages/Start/model';
import BlankSection from '../components/sections/Blank/Blank';
import ImageCard from '../components/elements/ImageCard/ImageCard';
import { ImageCardComponent } from '../components/elements/ImageCard/model';
import Heading from '../components/elements/Heading/Heading';
import {
  HeadingComponent,
  HeadingDisplayTemplate,
} from '../components/elements/Heading/model';
import HorizontalRuler from '../components/elements/HorizontalRuler/HorizontalRuler';
import { HorizontalRulerComponent } from '../components/elements/HorizontalRuler/model';
import RichText from '../components/elements/RichText/RichText';
import { RichTextComponent } from '../components/elements/RichText/model';
import Image from '../components/elements/Image/Image';
import { ImageComponent } from '../components/elements/Image/model';
import Video from '../components/elements/Video/Video';
import { VideoComponent } from '../components/elements/Video/model';
import Hero from '../components/sections/Hero/Hero';
import { HeroSection } from '../components/sections/Hero/model';
import {
  ColumnCardDisplayTemplate,
  ColumnDisplayTemplate,
  RowDisplayTemplate,
  SectionDisplayTemplate,
} from '../components/sections/DisplayTemplates';
import Button from '../components/elements/Button/Button';
import {
  ButtonComponent,
  ButtonDisplayTemplate,
} from '../components/elements/Button/model';
import Product from '../components/pages/Product/Product';
import { ProductPage } from '../components/pages/Product/model';
import { EyebrowComponent } from '../components/blocks/Eyebrow/model';
import { ButtonBlock } from '../components/blocks/ButtonBlock/model';
import { MenuNavigationBlock } from '../components/blocks/MenuNavigationBlock/model';
import { MegaMenuGroupBlock } from '../components/blocks/MegaMenuGroupBlock/model';
import { LayoutSettingsBlock } from '../components/blocks/LayoutSettingsBlock/model';
import Standard from '../components/pages/Standard/Standard';
import { StandardPage } from '../components/pages/Standard/model';
import News from '../components/pages/News/News';
import { NewsPage } from '../components/pages/News/model';
import TeaserCard from '../components/elements/TeaserCard/TeaserCard';
import { TeaserCardComponent } from '../components/elements/TeaserCard/model';
import NewsEventsList from '../components/blocks/NewsEventsList/NewsEventsList';
import { NewsEventsListContentType } from '../components/blocks/NewsEventsList/model';
import EventCard from '../components/elements/EventCard/EventCard';
import { EventCardComponent } from '../components/elements/EventCard/model';
import EventCardsList from '../components/blocks/EventCardsList/EventCardsList';
import { EventCardsListContentType } from '../components/blocks/EventCardsList/model';
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
    ButtonBlock,
    MenuNavigationBlock,
    MegaMenuGroupBlock,
    LayoutSettingsBlock,
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
