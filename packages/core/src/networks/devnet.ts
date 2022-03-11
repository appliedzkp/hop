import { Networks } from './types'
import { chains } from '../metadata'

export const networks: Networks = {
  ethereum: {
    name: chains.ethereum.name,
    networkId: 98,
    publicRpcUrl: `${window.location.origin}/rpc/l1`,
    explorerUrls: ['http://localhost/'],
    waitConfirmations: 1
  },
  zkevm: {
    name: chains.zkevm.name,
    networkId: 99,
    publicRpcUrl: `${window.location.origin}/rpc/l2`,
    explorerUrls: ['http://localhost/'],
    nativeBridgeUrl: 'http://localhost/',
    waitConfirmations: 1
  }
}
