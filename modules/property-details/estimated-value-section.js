import React, { useContext } from "react"
import { PropContext } from "../../context/prop-context"

//helper
import {
  formatCurrency,
  formatDate,
  formatNextUpdateDate,
} from "../../helper/helper"

//styles
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
} from "./style"

const EstimatedValueSection = () => {
  const { recentValuation, lastUpdate, updateAfterDays } =
    useContext(PropContext)

  return (
    <>
      {recentValuation && (
        <AccountSection>
          <AccountLabel>Estimated Value</AccountLabel>
          <AccountHeadline>
            {formatCurrency(recentValuation.amount)}
          </AccountHeadline>
          <AccountList>
            <AccountListItem>
              <InfoText>
                {`Last updated ${formatDate(lastUpdate, "ddmmyy")}`}
              </InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>
                {`Next update ${formatNextUpdateDate(
                  lastUpdate,
                  updateAfterDays,
                  "ddmmyy"
                )}`}
              </InfoText>
            </AccountListItem>
          </AccountList>
        </AccountSection>
      )}
    </>
  )
}

export default EstimatedValueSection
