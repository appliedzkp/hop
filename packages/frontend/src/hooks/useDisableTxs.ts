import { ChainSlug } from '@hop-protocol/sdk'
import { useEffect, useState } from 'react'
import { Direction, disableTransaction, DisableType } from 'src/config/disabled'
import Network from 'src/models/Network'
import { isL1ToL2, isL2ToL1, isL2ToL2, isSameNetwork } from 'src/utils'

const { disableType, destination, either, message, source } = disableTransaction

export function useDisableTxs(
  sourceChain?: Network | ChainSlug,
  destinationChain?: Network | ChainSlug
) {
  const [disabledTx, setDisabledTx] = useState(false)

  useEffect(() => {
    switch (disableType) {
      case DisableType.either: {
        const eitherChain =
          isSameNetwork(sourceChain, either) || isSameNetwork(destinationChain, either)
        return setDisabledTx(eitherChain)
      }

      case DisableType.specific: {
        const specificChains =
          isSameNetwork(sourceChain, source) && isSameNetwork(destinationChain, destination)
        return setDisabledTx(specificChains)
      }

      case DisableType.source: {
        return setDisabledTx(isSameNetwork(sourceChain, source))
      }

      case DisableType.destination: {
        return setDisabledTx(isSameNetwork(destinationChain, destination))
      }

      case Direction.l1ToL2: {
        return setDisabledTx(isL1ToL2(sourceChain, destinationChain))
      }

      case Direction.l2ToL2: {
        return setDisabledTx(isL2ToL2(sourceChain, destinationChain))
      }

      case Direction.l2ToL1: {
        return setDisabledTx(isL2ToL1(sourceChain, destinationChain))
      }

      default: {
        setDisabledTx(false)
      }
    }
  }, [sourceChain, destinationChain])

  return {
    disabledTx,
    warningOnly: disableTransaction.warningOnly,
    message,
  }
}
