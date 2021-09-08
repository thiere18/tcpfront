export const formatPrice = (price, currency = "XOF") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  })

  return formatter.format(price)
}
