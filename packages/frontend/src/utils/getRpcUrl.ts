import { L1_NETWORK } from 'src/utils'
import { networks } from 'src/config'
import { ChainSlug } from '@hop-protocol/sdk'

export const getRpcUrl = (network: string) => {
  const networkRpcUrl = networks[network]?.rpcUrl
  if (typeof networkRpcUrl !== 'string') {
    console.warn(`rpcUrl could not be found for network: ${network}`)
  }

  // needs a valid url otherwise some components are going to complain
  return networkRpcUrl || 'https://0.0.0.0/'
}

export function getAllRpcUrls() {
  return {
    arbitrum: getRpcUrl(ChainSlug.Arbitrum),
    optimism: getRpcUrl(ChainSlug.Optimism),
    gnosis: getRpcUrl(ChainSlug.Gnosis),
    polygon: getRpcUrl(ChainSlug.Polygon),
    ethereum: getRpcUrl(L1_NETWORK),
    zkevm: getRpcUrl(ChainSlug.Zkevm),
  }
}
