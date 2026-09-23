import { config } from '@optimizely/cms-sdk';

const apiKey = process.env.OPTIMIZELY_GRAPH_SINGLE_KEY;

if (!apiKey) {
  throw new Error(
    'OPTIMIZELY_GRAPH_SINGLE_KEY is missing from .env.local',
  );
}

config({
  apiKey,
  graphUrl:
    process.env.OPTIMIZELY_GRAPH_GATEWAY ??
    'https://cg.optimizely.com/content/v2',
});