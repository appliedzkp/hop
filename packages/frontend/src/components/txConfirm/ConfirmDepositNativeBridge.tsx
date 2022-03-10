import React from 'react'
import Button from 'src/components/buttons/Button'
import Alert from 'src/components/alert/Alert'
import { makeStyles } from '@material-ui/core/styles'
import Token from 'src/models/Token'
import Network from 'src/models/Network'
import Typography from '@material-ui/core/Typography'
import { commafy } from 'src/utils'
import Address from 'src/models/Address'
import { useSendingTransaction } from './useSendingTransaction'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    marginBottom: '2rem',
  },
  customRecipient: {
    marginTop: '2rem',
  },
  warning: {
    marginTop: '2rem',
  },
  action: {},
  sendButton: {},
}))

interface TokenEntity {
  token: Token
  network: Network
  amount: string
}

interface Props {
  customRecipient?: string
  source: TokenEntity
  dest: Partial<TokenEntity>
  onConfirm: (confirmed: boolean) => void
  estimatedReceived: string
}

const ConfirmDepositNativeBridge = (props: Props) => {
  const { customRecipient, source, dest, onConfirm, estimatedReceived } = props
  const styles = useStyles()

  const { sending, handleSubmit } = useSendingTransaction({ onConfirm })

  let warning = ''
  if (customRecipient && !dest?.network?.isLayer1) {
    warning =
      'If the recipient is an exchange, then there is possibility of loss funds if the token swap fails.'
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div
          style={{
            marginBottom: '1rem',
          }}
        >
          <Typography variant="h6" color="textSecondary">
            Send{' '}
            <strong>
              {commafy(source.amount, 5)} {source.token.symbol}
            </strong>{' '}
            from {source.network.name} to {dest?.network?.name} via native {dest?.network?.name}{' '}
            bridge
          </Typography>
        </div>
        {!!customRecipient && (
          <>
            <Typography variant="body1" color="textPrimary" className={styles.customRecipient}>
              Recipient: {new Address(customRecipient).truncate()}
            </Typography>
          </>
        )}
        {!!warning && <Alert severity="warning" text={warning} className={styles.warning} />}
      </div>
      <div className={styles.action}>
        <Button
          className={styles.sendButton}
          onClick={handleSubmit}
          loading={sending}
          large
          highlighted
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default ConfirmDepositNativeBridge
