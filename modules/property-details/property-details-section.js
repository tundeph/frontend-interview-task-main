import React, { useContext } from "react"
import { PropContext } from "../../context/prop-context"

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

const PropertyDetailsSection = () => {
  const { name, bankName, postcode } = useContext(PropContext)

  return (
    <AccountSection>
      <AccountLabel>Property details</AccountLabel>
      <RowContainer>
        <AccountList>
          {[name, bankName, postcode].map((value, i) => (
            <React.Fragment key={i}>
              <AccountListItem>
                <InfoText>{value}</InfoText>
              </AccountListItem>
            </React.Fragment>
          ))}
        </AccountList>
      </RowContainer>
    </AccountSection>
  )
}

export default PropertyDetailsSection
