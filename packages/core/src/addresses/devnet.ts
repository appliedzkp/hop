import { Addresses } from './types'

export const addresses: Addresses = {
  bonders: {
    ETH: {
      ethereum: {
        zkevm: '0x710bDa329b2a6224E4B44833DE30F38E7f81d564'
      },
      zkevm: {
        ethereum: '0x710bDa329b2a6224E4B44833DE30F38E7f81d564'
      }
    }
  },
  bridges: {
    ETH: {
      ethereum: {
        l1CanonicalToken: '0x0000000000000000000000000000000000000000',
        l1Bridge: '0xb8901acB165ed027E32754E0FFe830802919727f',
        bridgeDeployedBlockNumber: 1
      },
      zkevm: {
        l1CanonicalBridge: '0x0000000000000000000000000000000000000000',
        l1MessengerWrapper: '0x64e5A143a3775a500BF19E609E1a74A5Cbc3bb2A',
        l2CanonicalBridge: '0x4200000000000000000000000000000000000010',
        l2CanonicalToken: '0x4200000000000000000000000000000000000006',
        l2Bridge: '0x83f6244Bd87662118d96D9a6D44f09dffF14b30E',
        l2HopBridgeToken: '0xE38faf9040c7F09958c638bBDB977083722c5156',
        l2AmmWrapper: '0x86cA30bEF97fB651b8d866D45503684b90cb3312',
        l2SaddleSwap: '0xaa30D6bba6285d0585722e2440Ff89E23EF68864',
        l2SaddleLpToken: '0x5C2048094bAaDe483D0b1DA85c3Da6200A88a849',
        bridgeDeployedBlockNumber: 1
      }
    }
  }
}
