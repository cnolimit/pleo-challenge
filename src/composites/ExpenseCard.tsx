import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Image from '../components/Image'
import Jeppe from '../assets/jeppe.png'
import TimeIcon from '../assets/time.svg'
import CalendarIcon from '../assets/calendar.svg'
import AvatarIcon from '../assets/avatar.svg'
import styled from 'styled-components'
import UploadInput from './UploadInput'
import Text from '../components/Text'
import ExpenseDetailCard from '../components/ExpenseDetailCard'
import formatAmount from '../helpers/format-amount'

interface IExpenseCard {
  id: string
  merchant: string
  time: string
  date: string
  user: string
  amount: string
  currency: string
  comment: string
  hasReceipts: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
`

const DetailWrapper = styled.div`
  display: grid;
  flex-wrap: flex;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px 20px;
  justify-items: center;
`

const DateWrapper = styled.div`
  display: flex;
  font-size: 1rem;
`

const Details = styled.div`
  margin-left: 15px;
`

const ExpenseCard = (props: IExpenseCard) => {
  return (
    <Card>
      <Wrapper>
        <Image src={Jeppe} />
        <Details>
          <Title text={props.merchant} />
          <Text icon={AvatarIcon}>{props.user}</Text>
          <DateWrapper>
            <Text icon={TimeIcon}>{props.time}</Text>
            <Text icon={CalendarIcon}>{props.date}</Text>
          </DateWrapper>
        </Details>
      </Wrapper>
      <DetailWrapper>
        <ExpenseDetailCard title='Amount'>
          {formatAmount(props.amount, props.currency)}
        </ExpenseDetailCard>
        <ExpenseDetailCard title='Receipt'>
          <UploadInput disabled={props.hasReceipts} />
        </ExpenseDetailCard>
        <ExpenseDetailCard fullWidth title='Add Note'>
          {props.comment ? (
            <textarea name='comment' id=''>
              {props.comment}
            </textarea>
          ) : (
            <p>{props.comment}</p>
          )}
        </ExpenseDetailCard>
      </DetailWrapper>
    </Card>
  )
}

export default ExpenseCard
