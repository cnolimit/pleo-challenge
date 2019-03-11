import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Image from '../components/Image'
import Jeppe from '../assets/jeppe.png'
import TimeIcon from '../assets/time.svg'
import CalendarIcon from '../assets/calendar.svg'
import AvatarIcon from '../assets/avatar.svg'
import styled from 'styled-components'
import UploadInput from '../composites/UploadInput'
import TextWithIcon from '../composites/TextWithIcon'
import EditIcon from '../assets/edit.svg'
import AcceptIcon from '../assets/accept.svg'
import ExpenseDetailCard from '../composites/ExpenseDetailCard'
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
  onSaveComment: (comment: string) => void
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const DetailWrapper = styled.div`
  display: grid;
  flex-wrap: flex;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px 20px;
  justify-items: center;
  p {
    font-size: 0.8rem;
  }
`

const DateWrapper = styled.div`
  display: flex;
  font-size: 1rem;
`

const Details = styled.div`
  margin-left: 15px;
`
interface IExpenseCardState {
  editing: string
  comment: string
}

class ExpenseCard extends React.Component<IExpenseCard, IExpenseCardState> {
  state = {
    editing: '',
    comment: ''
  }

  editExpenseComment = (id: string) => this.setState({ editing: id })

  handleCommentOnChange = ({ target }: any) => {
    this.setState({ comment: target.value })
  }
  saveExpenseComment = () => {
    this.setState({ editing: '' })
    this.props.onSaveComment(this.state.comment)
  }

  render() {
    const { props, state } = this
    const currentlyEditing = state.editing === props.id

    return (
      <Card>
        <Wrapper>
          <Image src={Jeppe} />
          <Details>
            <Title text={props.merchant} />
            <TextWithIcon icon={AvatarIcon}>{props.user}</TextWithIcon>
            <DateWrapper>
              <TextWithIcon icon={TimeIcon}>{props.time}</TextWithIcon>
              <TextWithIcon icon={CalendarIcon}>{props.date}</TextWithIcon>
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
          <ExpenseDetailCard
            fullWidth
            title='Add Note'
            icon={currentlyEditing ? AcceptIcon : EditIcon}
            onClick={() =>
              currentlyEditing ? this.saveExpenseComment() : this.editExpenseComment(props.id)
            }
          >
            {currentlyEditing ? (
              <textarea
                onChange={this.handleCommentOnChange}
                name='comment'
                id=''
                defaultValue={props.comment}
              />
            ) : (
              <p>{props.comment}</p>
            )}
          </ExpenseDetailCard>
        </DetailWrapper>
      </Card>
    )
  }
}

export default ExpenseCard
