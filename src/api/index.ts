import axios from 'axios'

export const apiPleo = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export const getExpenses = () => apiPleo.get('/expenses?limit=25&offset=25')

export const postComment = (id: string, data: { comment?: string }) =>
  apiPleo.post(`/expenses/${id}`, data)

export const postReceipt = (id: string, receipt: any) => {
  const formData = new FormData()
  formData.append('receipt', receipt)

  return apiPleo.post(`/expenses/${id}/receipts`, formData, {
    headers: { 'content-type': 'multipart/form-data' }
  })
}
