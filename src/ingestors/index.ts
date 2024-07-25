import { FxHashIngestor } from './fxhash';
import { MintIngestor } from '../lib/types/mint-ingestor';
import { ProhibitionDailyIngestor } from './prohibition-daily';
<<<<<<< HEAD
import { FxHashIngestor } from './fxhash';
import { OpenSeaIngestor } from './opensea';
=======
import { TransientIngestor } from './transient-base';
>>>>>>> 23730e5469a884ec87eab94cc1921098ae5c81ed

export type MintIngestionMap = {
  [key: string]: MintIngestor;
};

export const ALL_MINT_INGESTORS: MintIngestionMap = {
  'prohibition-daily': new ProhibitionDailyIngestor(),
  fxhash: new FxHashIngestor(),
<<<<<<< HEAD
  opensea: new OpenSeaIngestor(),
=======
  transient: new TransientIngestor(),
>>>>>>> 23730e5469a884ec87eab94cc1921098ae5c81ed
};

export * from './';
