# Moneyhub Tech Test - Done!

Important Information  ⚠️
----
- I did not fork this repo from your main branch on purpose. If this is strictly required, I can do that.
- I used the `component-name` lowercase style to name the components because I saw the format and wanted to stay within "your standards" as against using the easier `ComponentName` naming style    


## What I did:  🔨

- I fetched the data from the API as sugggested.
- I created a custom `useFectch` hook to be able to handle `loading` and `error` from the endpoint
- I split the multiple sections in `modules/proeprty-details/index.js` into components to allow for cleaner code
- I used the `useContext` hook to pass the props across all the components
- I created the **Valuation change** component and added the `badges` as specified
- I created an helper function file (as suggested) to handle some generic formatting and calculations 
- I used `prop-types` for type checking in the `helper` function file


## Given more time, I would:  🎨

- Deploy an optional rendering for the `badge` under the **Valuation change** section so that it can change to a red theme for negative values
- Add stylish, badge-like labels to some information on the page
- Recommend & deployed a dashboard-style/card-style user interface to show the information better. With this, some information can be highlited more than others to give better UX.
- Use graphs or bar-charts with tools like `chart.js` to represent the information in **Valuation change** section (of course in a dashboard-style theme)
- Deploy better styling for the side-menu so that it takes the exact height of the screen and it stays at the side of the page at wider screen sizes 
