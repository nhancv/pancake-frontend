import { ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { ChainId } from '@pancakeswap/sdk'
import { Box, Container, LinkExternal } from '@pancakeswap/uikit'

import { useActiveChainId } from 'hooks/useActiveChainId'

import IfoLayout, { IfoLayoutWrapper } from './IfoLayout'
import IfoPoolVaultCard from './IfoPoolVaultCard'
import IfoQuestions from './IfoQuestions'

const IfoStepBackground = styled(Box)`
  background: ${({ theme }) => theme.colors.gradientBubblegum};
`

interface TypeProps {
  ifoSection: ReactElement
  ifoSteps: ReactElement
}

const IfoContainer: React.FC<React.PropsWithChildren<TypeProps>> = ({ ifoSection, ifoSteps }) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()

  return (
    <IfoLayout id="current-ifo" py={['24px', '24px', '40px']}>
      <Container>
        <IfoLayoutWrapper>
          {chainId === ChainId.BSC && <IfoPoolVaultCard />}
          {ifoSection}
        </IfoLayoutWrapper>
      </Container>
      <IfoStepBackground>
        <Container>{ifoSteps}</Container>
      </IfoStepBackground>
      <Container>
        <IfoQuestions />
        <LinkExternal
          href="https://docs.pancakeswap.finance/contact-us/business-partnerships#ifos-token-sales"
          mx="auto"
          mt="16px"
        >
          {t('Apply to run an IFO!')}
        </LinkExternal>
      </Container>
    </IfoLayout>
  )
}

export default IfoContainer
