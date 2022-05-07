import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MainInfo } from '../components/MainInfo'

const Home: NextPage = () => {
  return (
    <Flex>
      <Head>
      <title>Wondertech 2022 | 13 de maio de 2022</title>
      </Head>
      <MainInfo />
    </Flex>
  )
}

export default Home
