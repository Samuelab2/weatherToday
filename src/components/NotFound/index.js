import React from 'react'
import Layout from '../Layout'
import { Text } from '../../utils/generalStyles'

const NotFound = () => {
  return (
    <Layout title='Nothing here'>
      <Text>Ups... la pagina que estabas buscando no existe <span role='img' aria-label='emoji triste'>😣</span></Text>
    </Layout>
  )
}

export default NotFound