type Bps = {
  ethereum?: number
  polygon?: number
  gnosis?: number
  optimism?: number
  arbitrum?: number
  zkevm?: number
}

export type Fees = {
  USDC?: Bps
  USDT?: Bps
  DAI?: Bps
  MATIC?: Bps
  ETH?: Bps
  WBTC?: Bps
}

export type Config = {
  bonderFeeBps: Fees
  destinationFeeGasPriceMultiplier: number
}
