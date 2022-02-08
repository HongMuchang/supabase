import { ReactNode, VFC } from 'react'
import { Footer } from '@/components/atoms/layout/Footer'
import { Header } from '@/components/atoms/layout/Header'

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = (props) => {
  const { children } = props
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
