import React, { useEffect, useState } from 'react'
import { Layout, PageBlock, Button, Input } from 'vtex.styleguide'
import { useMutation, useQuery } from 'react-apollo'

import SEND_DATA from './graphql/mutation.sendData.gql'
import READ_DATA from './graphql/query.readData.gql'

const SendData = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [dni, setDni] = useState('')
  const [saveData] = useMutation(SEND_DATA)
  const { data, loading, error } = useQuery(READ_DATA)

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error)
      } else {
        setName(data?.readData?.name ?? '')
        setLastName(data?.readData?.lastName ?? '')
        setPhone(data?.readData?.phone ?? '')
        setDni(data?.readData?.dni ?? '')
      }
    }
  }, [data, loading, error])

  const handleSendData = () => {
    saveData({
      variables: {
        name,
        lastName,
        phone,
        dni,
      },
    })
  }

  return (
    <Layout>
      <PageBlock title="Crear Persona">
        <div className="mt5">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div className="mt5">
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e: any) => setLastName(e.target.value)}
          />
        </div>
        <div className="mt5">
          <Input
            placeholder="Phone"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt5">
          <Input
            placeholder="DNI"
            value={dni}
            onChange={(e: any) => setDni(e.target.value)}
          />
        </div>
        <div className="mt7">
          <Button onClick={handleSendData}>Send</Button>
        </div>
      </PageBlock>
    </Layout>
  )
}

export default SendData
