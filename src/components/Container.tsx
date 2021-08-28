import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  padding: 32px 16px;

  background-image: url('/images/pixel/bg.png');
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 90%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: contain, 100%, 100%;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pixel/bg.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain, 100%, 100%;
    min-height: 100vh;
  }
`

export default Container
