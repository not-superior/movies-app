import { Box, Flex, Text, Button } from '@chakra-ui/react'
import Banner from '../styles/modules/Banner.module.css'
import Image from 'next/image'
import Navbar from './components/Navbar'

const BannerComp = () => {
  return (
    <>
      {/* <Flex className={Banner.topContent}>Hello World</Flex> */}
    </>
  )
}

export default function Home() {
  return ( 
    <>
      <Navbar/>
      <BannerComp/>
    </>
  )
}

// export async function getStaticProps() {
  
// }
