import Head from "next/head"

export interface CustomHeadProps {
  title?: string;
  description?: string;
}

const defaultTitle: string = "Chat API Playground"
const defaultDescription: string = "A playground for chatAPI"

const CustomHead: React.FC<CustomHeadProps> = ({title, description}: CustomHeadProps) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="description" content="{ description}" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default CustomHead
