import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AboutMTSTSection } from '../components/AboutMTSTSection'
import { EventGoalSection } from '../components/EventGoalSection'
import { Footer } from '../components/Footer'
import { MainInfo } from '../components/MainInfo'
import { SponsorsSection } from '../components/SponsorsSection';
import { NavBar } from '../components/NavBar';
import { CommunitiesSection } from '../components/CommunitiesSection'
import { SpeakersSection } from '../components/SpeakersSection'
import { SupportEventSection } from '../components/SupportEventSection'
import { SupportMTST } from '../components/SupportMTST'
import { WhatToExpectSection } from '../components/WhatToExpectSection'
const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Head>
        <title>Wondertech 2022 | 13 de maio de 2022</title>
      </Head>
      <MainInfo />
      <SponsorsSection />
      <EventGoalSection />
      <CommunitiesSection />  
      <WhatToExpectSection/>
      <SpeakersSection />
      <SupportEventSection />
      <AboutMTSTSection/>
      <SupportMTST />
      <Footer />  
    </Flex>
  )
}

export default Home
