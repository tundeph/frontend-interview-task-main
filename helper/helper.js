import { add, format } from "date-fns"
import PropTypes from "prop-types"

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value)
}

const formatDate = (val, type) => {
  const value = new Date(val).toISOString()
  const formatObject = {
    ddmmyy: "do MMM yyyy",
    mmyy: "MMM yyyy",
  }
  return format(new Date(value), formatObject[type.toLowerCase()]) ?? value
}

const formatNextUpdateDate = (lastUpdate, updateAfterDays, type) => {
  return formatDate(
    add(new Date(lastUpdate), {
      days: updateAfterDays,
    }),
    type
  )
}

const getPurchaseYears = (date) => {
  var years = new Date().getFullYear() - new Date(date).getFullYear()
  return Math.floor(years)
}

//propType checking
formatCurrency.propTypes = {
  value: PropTypes.number,
}

formatDate.propTypes = {
  val: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf(["ddmmyy", "mmyy"]),
}

formatNextUpdateDate.propTypes = {
  lastUpdate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  updateAfterDays: PropTypes.number,
  type: PropTypes.oneOf(["ddmmyy", "mmyy"]),
}

getPurchaseYears.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export { formatCurrency, formatDate, formatNextUpdateDate, getPurchaseYears }
