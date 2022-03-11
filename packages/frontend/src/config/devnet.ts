import { devnet as devnetAddresses } from '@hop-protocol/core/addresses'
import { devnet as devnetNetworks } from '@hop-protocol/core/networks'
import { HopAddresses, Networks } from './interfaces'

export const addresses: HopAddresses = {
  governance: {
    l1Hop: '',
    stakingRewardsFactory: '',
    stakingRewards: '',
    governorAlpha: '',
  },
  tokens: devnetAddresses.bridges,
  bonders: devnetAddresses.bonders,
}

const _networks = devnetNetworks as any

export const networks: Networks = {
  ethereum: {
    networkId: _networks.ethereum.networkId.toString(),
    rpcUrl: _networks.ethereum.publicRpcUrl,
    explorerUrl: _networks.ethereum.explorerUrls[0],
    nativeBridgeUrl: _networks.ethereum.nativeBridgeUrl,
    waitConfirmations: _networks.ethereum.waitConfirmations,
  },
  zkevm: {
    networkId: _networks.zkevm.networkId.toString(),
    rpcUrl: _networks.zkevm.publicRpcUrl,
    explorerUrl: _networks.zkevm.explorerUrls[0],
    nativeBridgeUrl: _networks.zkevm.nativeBridgeUrl,
    waitConfirmations: _networks.zkevm.waitConfirmations,
  },
}
