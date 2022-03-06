import React, { useContext } from "react"
import { PropContext } from "../../context/prop-context"

//helper
import { formatCurrency } from "../../helper/helper"

//components
import RowContainer from "../../components/row-container"

//styles
import {
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
} from "./style"

const MortgageSection = () => {
  const { associatedMortgages } = useContext(PropContext)

  let mortgage
  if (associatedMortgages.length) {
    mortgage = associatedMortgages[0]
  }
  return (
    <>
      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <AccountListItem>
                <InfoText>
                  {formatCurrency(Math.abs(mortgage.currentBalance))}
                </InfoText>
              </AccountListItem>
              <AccountListItem>
                <InfoText>{mortgage.name}</InfoText>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
    </>
  )
}

export default MortgageSection
