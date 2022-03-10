import { ChainSlug } from '@hop-protocol/sdk'
import { discordUrl } from 'src/utils'

export enum Direction {
  l1ToL2 = 'l1ToL2', // all L1 -> L2 txs
  l2ToL2 = 'l2ToL2', // all L2 -> L2 txs
  l2ToL1 = 'l2ToL1', // all L2 -> L1 txs
}

export enum DisableType {
  either = 'either', // either source or destination
  specific = 'specific', // specific source and destination
  source = 'source', // specific source network
  destination = 'destination', // specific destination network
}

const disabled = process.env.REACT_APP_DISABLED_TXS || true
const warningOnly = process.env.REACT_APP_DISABLED_TXS || false

// Change at least one of these! (Ordered by priority)
const either: ChainSlug | undefined = ChainSlug.Polygon
const source: ChainSlug | undefined = undefined
const destination: ChainSlug | undefined = undefined
const direction: Direction | any = undefined

// Change this!
const message = {
  text: 'Warning: transfers to/from Polygon are temporarily disabled. Please, check the #status channel in the Hop',
  href: discordUrl,
  linkText: 'Discord',
  postText: 'for updates and more information.',
}

// Do not change this!
const disableType: DisableType | Direction | boolean | undefined = either
  ? DisableType.either
  : source && destination
  ? DisableType.specific
  : source
  ? DisableType.source
  : destination
  ? DisableType.destination
  : direction

export const disableTransaction = {
  disabled,
  source,
  destination,
  message,
  disableType,
  either,
  warningOnly,
}
