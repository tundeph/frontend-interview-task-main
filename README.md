# Moneyhub Tech Test - Done!

IMPORTANT INFORMATION
----
- I did not fork this repo from your main branch on purpose
- I used the `component-name` lowercase style to name the components because I saw the format and wanted to stay within "your standards" as against using the easier `ComponentName` naming style    
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## What I did:

- I fetched the data from the API as sugggested.
- I created a custom `useFectch` hook to be able to handle `loading` and `error` from the endpoint
- I split the multiple sections in `modules/proeprty-details/index.js` into components to allow for cleaner code
- I used the `useContext` hook to pass the props across all the components
- I created the **Valuation change** component and added the `badges` as specified
- I created an helper function file (as suggested) to handle some generic formatting and calculations 
- I used `prop-types` for type checking in the `helper` function file

We would like you to:

## Given more time, I would: 
----
- Deployed an optional rendering for the `badge` under the **Valuation change** section so that it can change to a red theme for negative values
- I would add stylish, badge-like labels to some information on the page
- Recommend a card-style design to show the information 
- Use graphs or bar-cahrts with tools like `chart.js` to represent the information in **Valuation change** section 
- Deployed better styling for the side-menu so that it takes the exact height of the screen and it is stays at the side of the page at wider screen sizes 
