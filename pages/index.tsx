import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CustomHead from '@/components/common/CustomHead'
import AskForm from '@/components/AskForm'
import ChatHistory from '@/components/ChatHistory'
import { Container, Box, Flex, Spacer } from '@chakra-ui/react'
import SidebarWithHeader from '@/components/common/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CustomHead />

      <Container maxW='full' bg='red.50' maxH='min-content'> 
        <SidebarWithHeader> 
          <Flex direction="column" minH="calc(100vh - 120px)" justifyContent="space-between">
            <ChatHistory flexGrow={1}/>
            <AskForm />
          </Flex>
        </SidebarWithHeader>
      </Container>
    </>
  )
}
