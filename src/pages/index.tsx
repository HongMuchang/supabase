import { Layout } from '@/components/template/Layout'
import { NextPage } from 'next'
import Link from 'next/link'

// http://localhost:3000/

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-3xl text-center">Next 練習</h1>
        <p className="m-3">がんばろ</p>
      </div>
    </Layout>
  )
}

export default Home
