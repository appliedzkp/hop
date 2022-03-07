import React from 'react'
import { Token } from '@hop-protocol/sdk'
import { BigNumber } from 'ethers'
import { Div, Flex } from 'src/components/ui'
import { toTokenDisplay } from 'src/utils'
import Network from 'src/models/Network'
import CanonicalBridge from 'src/models/CanonicalBridge'
import { RadioButtonChecked, RadioButtonUnchecked } from '@material-ui/icons'

interface Props {
  amount?: BigNumber
  destNetwork?: Network
  destToken?: Token
  estimatedReceivedDisplay?: string
  l1CanonicalBridge?: CanonicalBridge
  sendL1CanonicalBridge?: () => void
  setUsingNativeBridge: (u: boolean) => void
  usingNativeBridge?: boolean
}

function L1CanonicalBridgeOption(props: Props) {
  const {
    amount,
    destNetwork,
    destToken,
    estimatedReceivedDisplay,
    l1CanonicalBridge,
    setUsingNativeBridge,
    usingNativeBridge,
  } = props

 console.log(`usingNativeBridge:`, usingNativeBridge) 

  return (
    <Flex width={'50rem'} mt={3} pointer color="text.secondary">
      {l1CanonicalBridge && (
        <Div fullWidth>
          <Flex fullWidth justifyBetween px={4} onClick={() => setUsingNativeBridge(false)}>
            <Flex alignCenter>
              <Flex mr={2}>
                {usingNativeBridge ? <RadioButtonUnchecked /> : <RadioButtonChecked />}
              </Flex>
              <Flex>Hop Bridge</Flex>
            </Flex>
            <Flex>{estimatedReceivedDisplay}</Flex>
          </Flex>
          <Flex fullWidth justifyBetween px={4} onClick={() => setUsingNativeBridge(true)}>
            <Flex alignCenter>
              <Flex mr={2}>
                {usingNativeBridge ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
              </Flex>
              <Flex>Native {destNetwork?.name} Bridge</Flex>
            </Flex>
            <Flex>{toTokenDisplay(amount, destToken?.decimals, destToken?.symbol)}</Flex>
          </Flex>
        </Div>
      )}
    </Flex>
  )
}

export default L1CanonicalBridgeOption
