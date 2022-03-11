import { Chains } from './types'
import { devnet as devnetAddresses } from '@hop-protocol/core/addresses'
import { devnet as devnetConfig } from '@hop-protocol/core/config'
import { devnet as networks } from '@hop-protocol/core/networks'

const chains: Chains = {}

for (const chain in networks) {
  const network = (networks as any)[chain] as any
  if (!chains[chain]) {
    chains[chain] = {}
  }
  chains[chain].name = network?.name
  chains[chain].chainId = network?.networkId
  chains[chain].rpcUrl = network?.publicRpcUrl
  chains[chain].explorerUrl = network?.explorerUrls?.[0]
}

const addresses = devnetAddresses.bridges
const bonders = devnetAddresses.bonders
const bonderFeeBps = devnetConfig.bonderFeeBps
const destinationFeeGasPriceMultiplier = devnetConfig.destinationFeeGasPriceMultiplier

export { addresses, chains, bonders, bonderFeeBps, destinationFeeGasPriceMultiplier }
