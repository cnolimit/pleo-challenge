import currency_list from '../lib/currency_list.json'

interface ICurrency {
  symbol: string
  name: string
  symbol_native: string
  decimal_digits: number
  rounding: number
  code: string
  name_plural: string
  align: string
}

interface ICurrencyList {
  [key: string]: ICurrency
}

const formatAmount = (amount: string, currency_code: string) => {
  // @ts-ignore
  const currency: ICurrency = currency_list[currency_code]

  return currency.align === 'left' ? `${currency.symbol}${amount}` : `${amount}${currency.symbol}`
}

export default formatAmount
