import styled from 'styled-components'

export const Div = styled.div`
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  background: ${props => props.bg.includes('nubes') ? 'linear-gradient(159deg, rgba(7,148,224,1) 6%, rgba(158,198,223,1) 75%);' 
    : props.bg.includes('cielo') ? 'linear-gradient(159deg, rgba(255,194,137,1) 7%, rgba(255,164,136,1) 37%);'
    : props.bg.includes('lluvia') ? 'linear-gradient(159deg, rgba(108,185,200,1) 0%, rgba(107,108,150,1) 69%);'
    : 'white;'
  };
  color: ${props => props.bg.includes('nubes') ? '#232c61' 
    : props.bg.includes('cielo') ? '#752a12'
    : '#eef6f9'
  };
  min-width: 450px;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  font-weight: bold;
  margin-top: 40px;
`