import { Chain, ChainSlug } from '@hop-protocol/sdk'
import { useEffect } from 'react'
import Network from 'src/models/Network'
import { findNetwork, findNetworkBySlug, isL1ToL2 } from 'src/utils'

export function useDisableTxs(
  sourceChain?: Network | ChainSlug,
  destinationChain?: Network | ChainSlug
) {

  useEffect(() => {
    
  }, [])

  const src = findNetwork(sourceChain)
  const dest = findNetwork(destinationChain)

  const isL1ToArbitrum = isL1ToL2(src, dest) && dest?.slug === ChainSlug.Arbitrum

  return {
    disabled: true,
    isL1ToArbitrum,
  }
}
