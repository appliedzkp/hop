import { ChainSlug } from '@hop-protocol/sdk'
import { discordUrl } from 'src/utils'

export enum Direction {
  l1ToL2 = 'l1ToL2', // all
  l2ToL2 = 'l2ToL2', // all
  l2ToL1 = 'l2ToL1', // all
}

export enum DisableType {
  either = 'either', // either source or destination
  specific = 'specific', // specific source and destination
  source = 'source', // specific source network
  destination = 'destination', // specific destination network
}

// Change this
const disabled = process.env.REACT_APP_DISABLED_TXS || true
const warningOnly = process.env.REACT_APP_DISABLED_TXS || false

const either: ChainSlug | undefined = ChainSlug.Polygon
const source: ChainSlug | undefined = undefined
const destination: ChainSlug | undefined = undefined
const direction: Direction | any = undefined

const message = {
  text: 'Warning: transfers to/from Polygon are temporarily disabled. Please, check the #status channel in the Hop',
  href: discordUrl,
  linkText: 'Discord',
  postText: 'for updates and more information.',
}

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
