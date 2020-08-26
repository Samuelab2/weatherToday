import styled from 'styled-components'

const cloudColor = {
  background: 'linear-gradient(159deg, rgba(7,148,224,1) 6%, rgba(158,198,223,1) 75%);',
  font:'#232c61'
}
const skyColor = {
  background: 'linear-gradient(159deg, rgba(255,194,137,1) 7%, rgba(255,164,136,1) 37%);',
  font:'#752a12'
}
const rainColor = {
  background: 'linear-gradient(159deg, rgba(108,185,200,1) 0%, rgba(107,108,150,1) 69%);',
  font: '#eef6f9'
}

export const Div = styled.div`
  min-height: calc(100vh - 175px);
  display: flex;
  flex-direction: column;
  background: ${props => props.bg.includes('nubes') ? cloudColor.background 
    : props.bg.includes('cielo') ? skyColor.background
    : props.bg.includes('lluvia') ? rainColor.background
    : 'white;'
  };
  color: ${props => props.bg.includes('nubes') ? cloudColor.font 
    : props.bg.includes('cielo') ? skyColor.font
    : rainColor.font
  };
  min-width: 340px;
  max-width: 500px;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  font-weight: bold;
  margin-top: 40px;
`

export const Title = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-size: 40px;
`

export const SubTitle = styled.p`
  text-transform: capitalize;
  font-size: 20px;
`

export const FocusElement = styled.span`
  font-size: 40px;
  border-bottom: 5px dotted #232c61;
`

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  text-align: center;
`