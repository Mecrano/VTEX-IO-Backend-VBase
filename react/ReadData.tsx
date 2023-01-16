import React from 'react'
import { Layout, PageBlock, Spinner } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import READ_DATA from './graphql/query.readData.gql'

const ReadData = () => {
  const { data, loading, error } = useQuery(READ_DATA)

  if (loading) {
    return (
      <Layout>
        <PageBlock>
          <Spinner />
        </PageBlock>
      </Layout>
    )
  }

  if (error) {
    console.error(error)

    return (
      <Layout>
        <PageBlock>
          <h1>Tenemos un error</h1>
        </PageBlock>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageBlock title="Person">
        <p>Name: {data?.readData?.name}</p>
        <p>Last Name: {data?.readData?.lastName}</p>
        <p>Phone: {data?.readData?.phone}</p>
        <p>DNI: {data?.readData?.dni}</p>
      </PageBlock>
    </Layout>
  )
}

export default ReadData
