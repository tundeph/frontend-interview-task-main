/* eslint-disable max-statements */
import React from "react"
import { PropContextProvider } from "../../context/prop-context"
import { useFetch } from "../../hooks/useFetch"

//components
import { Button } from "../../components/button"
import { Inset } from "./style"
import { Loading, Error } from "../../components/notifications"

//components section
import EstimatedValueSection from "./estimated-value-section"
import PropertyDetailsSection from "./property-details-section"
import ValuationChangeSection from "./valuation-change-section"
import MortgageSection from "./mortgage-section"

const Detail = ({}) => {
  const { data, isPending, error } = useFetch("/api/account")

  return (
    <Inset>
      {isPending && <Loading />}
      {error && <Error> {error} </Error>}
      {data && (
        <>
          <PropContextProvider value={data.account}>
            <EstimatedValueSection />
            <PropertyDetailsSection />
            <ValuationChangeSection />
            <MortgageSection />
            <Button
              // This is a dummy action
              onClick={() =>
                alert("You have navigated to the edit account page")
              }
            >
              Edit account
            </Button>
          </PropContextProvider>
        </>
      )}
    </Inset>
  )
}

export default Detail
