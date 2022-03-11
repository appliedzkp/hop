import { metadata } from './metadata'
import * as devnet from './devnet'
import * as goerli from './goerli'
import * as kovan from './kovan'
import * as mainnet from './mainnet'
import * as staging from './staging'

const addresses: {[network: string]: any} = {
  mainnet: mainnet.addresses,
  staging: staging.addresses,
  kovan: kovan.addresses,
  goerli: goerli.addresses,
  devnet: devnet.addresses
}

const chains: {[network: string]: any} = {
  mainnet: mainnet.chains,
  staging: staging.chains,
  kovan: kovan.chains,
  goerli: goerli.chains,
  devnet: devnet.chains
}

const bonders: {[network: string]: {[token: string]: Record<string, Record<string, string>>}} = {
  mainnet: mainnet.bonders,
  staging: staging.bonders,
  kovan: kovan.bonders,
  goerli: goerli.bonders,
  devnet: devnet.bonders
}

type Bps = {
  ethereum: number
  polygon: number
  gnosis: number
  optimism: number
  arbitrum: number
  zkevm: number
}

const bonderFeeBps: {[network: string]: {[token: string]: Record<string, number>}} = {
  mainnet: mainnet.bonderFeeBps,
  staging: staging.bonderFeeBps,
  kovan: kovan.bonderFeeBps,
  goerli: goerli.bonderFeeBps,
  devnet: devnet.bonderFeeBps
}

const destinationFeeGasPriceMultiplier: {[network: string]: number} = {
  mainnet: mainnet.destinationFeeGasPriceMultiplier,
  staging: staging.destinationFeeGasPriceMultiplier,
  kovan: kovan.destinationFeeGasPriceMultiplier,
  goerli: goerli.destinationFeeGasPriceMultiplier,
  devnet: devnet.destinationFeeGasPriceMultiplier
}

const config = {
  addresses,
  chains,
  bonders,
  bonderFeeBps,
  destinationFeeGasPriceMultiplier
}

export { metadata, config }

export const bondableChains = ['optimism', 'arbitrum', 'zkevm']
