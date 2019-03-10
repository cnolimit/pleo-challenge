import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Image from '../components/Image'
import Jeppe from '../assets/jeppe.png'
import styled from 'styled-components'
import UploadInput from './UploadInput'

interface IExpenseCard {
  id: string
  merchant: string
  time: string
  date: string
  user: string
  hasReceipts: boolean
}

const Wrapper = styled.div`
  display: flex;
  border: 2px solid black;
  flex-direction: column;
`

const ExpenseCard = (props: IExpenseCard) => {
  return (
    <Card>
      <Wrapper>
        <Image src={Jeppe} />
        <div>
          <Title large text={props.merchant} />
          User: <Title large text={props.user} />
          Time: <Title large text={props.time} />
          Date: <Title large text={props.date} />
        </div>
        <UploadInput disabled={props.hasReceipts} />
      </Wrapper>
    </Card>
  )
}

export default ExpenseCard
