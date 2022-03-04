import { ChainSlug } from '@hop-protocol/sdk'

const disabled = process.env.REACT_APP_DISABLED_TXS || false

const sourceChain = ChainSlug.Ethereum
const destinationChain = ChainSlug.Arbitrum

const text = {
  main: '',
  href: '',
  post: '',
}

export { disabled, sourceChain, destinationChain, text }
