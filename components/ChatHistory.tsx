import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface ChatHistoryProps extends BoxProps {
}

const ChatHistory = ({...rest} : ChatHistoryProps) => {
  return <Box {...rest}> history hehre </Box>
}

export default ChatHistory
