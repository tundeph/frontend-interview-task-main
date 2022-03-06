import React, { useContext } from "react"
import { PropContext } from "../../context/prop-context"
import RowContainer from "../../components/row-container"
import { Badge } from "../../components/badge"
import {
  formatCurrency,
  formatDate,
  getPurchaseYears,
} from "../../helper/helper"
import {
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
  BiggerText,
} from "./style"

const ValuationChangeSection = () => {
  const { recentValuation, originalPurchasePrice, originalPurchasePriceDate } =
    useContext(PropContext)

  const sincePurchase = recentValuation.amount - originalPurchasePrice
  const sincePurchasePercentage = (sincePurchase / originalPurchasePrice) * 100
  const annualAppreciation =
    sincePurchasePercentage / getPurchaseYears(originalPurchasePriceDate)

  return (
    <AccountSection>
      <AccountLabel> Valuation Change </AccountLabel>
      <RowContainer>
        <AccountList>
          <AccountListItem>
            <InfoText>
              Purchased for
              <BiggerText>
                {" "}
                {formatCurrency(originalPurchasePrice)}
              </BiggerText>{" "}
              in {formatDate(originalPurchasePriceDate, "mmyy")}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>Since purchase</InfoText>
            <Badge>
              {` ${formatCurrency(sincePurchase)}
                      (${sincePurchasePercentage}%)`}
            </Badge>
          </AccountListItem>
          <AccountListItem>
            <InfoText>Annual appreciation</InfoText>
            <Badge>{`${annualAppreciation}%`}</Badge>
          </AccountListItem>
        </AccountList>
      </RowContainer>
    </AccountSection>
  )
}

export default ValuationChangeSection
