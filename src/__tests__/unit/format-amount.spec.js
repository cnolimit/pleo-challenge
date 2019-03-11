import formatAmount from '../../helpers/format-amount'

describe('Testing - Format Amount Function', () => {
  it('Should return GBP with symbol aligned to the left', () => {
    expect(formatAmount('546.90', 'GBP')).toEqual('£546.90')
  })
  it('Should return AED with symbol aligned to the right', () => {
    expect(formatAmount('546.90', 'AED')).toEqual('546.90AED')
  })
})
