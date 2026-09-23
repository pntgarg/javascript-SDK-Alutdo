type InferredUrl = {
  default: string | null;
};

export type LinkValue = {
  text: string | null;
  title: string | null;
  target: string | null;
  url: InferredUrl | null;
};

type RichTextValue = {
  json: unknown;
};

export type LayoutSettings = {
  HeaderSearchIconToggle: boolean | null;

  layoutsitelogo: {
    url: InferredUrl | null;
  } | null;

  HeaderLogolink: InferredUrl | null;

  TopUtilityStripDisable: boolean | null;
  TopUtilityStrip: LinkValue[] | null;

  GlobalSearchTitle: string | null;
  GlobalAutoCompleteError: string | null;
  GlobalSearchPlaceholder: string | null;

  FooterLogoLink: LinkValue | null;

  FooterLogo: {
    url: InferredUrl | null;
  } | null;

  FooterDescription: RichTextValue | null;
  FooterLink: LinkValue | null;

  FooterSocialTitle: string | null;
  copyright: RichTextValue | null;

  appIdentifiers: string | null;
};

type LayoutSettingsResponse = {
  data?: {
    MainLayoutSettingsBlock?: {
      items?: LayoutSettings[];
    };
  };

  errors?: Array<{
    message: string;
  }>;
};

const GET_LAYOUT_SETTINGS = `
  query GetLayoutSettings {
    MainLayoutSettingsBlock(limit: 1) {
      items {
        HeaderSearchIconToggle

        layoutsitelogo {
          url {
            default
          }
        }

        HeaderLogolink {
          default
        }

        TopUtilityStripDisable

        TopUtilityStrip {
          text
          title
          target
          url {
            default
          }
        }

        GlobalSearchTitle
        GlobalAutoCompleteError
        GlobalSearchPlaceholder

        FooterLogoLink {
          text
          title
          target
          url {
            default
          }
        }

        FooterLogo {
          url {
            default
          }
        }

        FooterDescription {
          json
        }

        FooterLink {
          text
          title
          target
          url {
            default
          }
        }

        FooterSocialTitle

        copyright {
          json
        }

        appIdentifiers
      }
    }
  }
`;

export async function getLayoutSettings(): Promise<
  LayoutSettings | null
> {
  const apiKey =
    process.env.OPTIMIZELY_GRAPH_SINGLE_KEY;

  const graphUrl =
    process.env.OPTIMIZELY_GRAPH_GATEWAY ??
    'https://cg.optimizely.com/content/v2';

  if (!apiKey) {
    throw new Error(
      'OPTIMIZELY_GRAPH_SINGLE_KEY is not configured.',
    );
  }

  const endpoint = `${graphUrl}?auth=${encodeURIComponent(
    apiKey,
  )}`;

  const response = await fetch(endpoint, {
    method: 'POST',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      query: GET_LAYOUT_SETTINGS,
    }),

    next: {
      revalidate: 300,
      tags: ['layout-settings'],
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Failed to fetch layout settings: ${response.status} ${response.statusText}${errorBody ? ` — ${errorBody}` : ''}`,
    );
  }

  const result =
    (await response.json()) as LayoutSettingsResponse;

  if (result.errors?.length) {
    throw new Error(
      `Layout settings Graph query failed: ${result.errors
        .map((error) => error.message)
        .join(', ')}`,
    );
  }

  return (
    result.data?.MainLayoutSettingsBlock?.items?.[0] ??
    null
  );
}