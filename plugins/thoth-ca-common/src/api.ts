import { Config } from '@backstage/config';

/**
 * In this package you might for example declare types that are common
 * between the frontend and backend plugin packages.
 */
export type ThothCaSummary = Record<
  string,
  Record<string, { tier: string; value: boolean }>
>;

/** @public */
export class FetchError extends Error {
  get name(): string {
    return this.constructor.name;
  }

  static async forResponse(resp: Response): Promise<FetchError> {
    return new FetchError(
      `Request failed with status code ${
        resp.status
      }.\nReason: ${await resp.text()}`,
    );
  }
}

/** @public */
export type ThothCaApi = {
  url: string;
  getThothCaSummaryById: (id: string) => Promise<ThothCaSummary>;
};

/** @public */
export class ThothCaRestApi implements ThothCaApi {
  static fromConfig(config: Config): ThothCaRestApi {
    console.log(this)
    return new ThothCaRestApi(config.getString('backend.baseUrl'));
  }

  constructor(public url: string) {}

  private async fetch<T = any>(input: string, init?: RequestInit): Promise<T> {
    console.log(this)
    const resp = await fetch(`${this.url}${input}`, init);
    if (!resp.ok) throw await FetchError.forResponse(resp);
    return await resp.json();
  }

  async getThothCaSummaryById(id: string): Promise<ThothCaSummary> {
    return this.fetch<ThothCaSummary>(`/api/thoth/summaries/${encodeURIComponent(id)}`);
  }
}
