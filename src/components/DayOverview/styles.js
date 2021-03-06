import styled from 'styled-components'

export const Div = styled.div`
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  min-width: 340px;
  max-width: 500px;
  box-sizing: border-box;
  background: ${props => props.bg.includes('nubes') ? 'linear-gradient(159deg, rgba(7,148,224,1) 6%, rgba(158,198,223,1) 75%);' 
    : props.bg.includes('cielo') ? 'linear-gradient(159deg, rgba(255,194,137,1) 7%, rgba(255,164,136,1) 37%);'
    : props.bg.includes('lluvia') ? 'linear-gradient(159deg, rgba(108,185,200,1) 0%, rgba(107,108,150,1) 69%);'
    : 'white;'
  };
  color: ${props => props.bg.includes('nubes') ? '#232c61' 
    : props.bg.includes('cielo') ? '#752a12'
    : '#eef6f9'
  };
  box-shadow: 1px 1px 8px 1px #0000004f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
`

export const SubTitle = styled.span`
  text-transform: capitalize;
  line-height: 30px;
`

export const Title = styled.p`
  font-size: 20px;
  text-decoration: underline;
`