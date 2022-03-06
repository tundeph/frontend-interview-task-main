import styled from "styled-components"

// The notification component
const Pending = styled.span`
  color: ${(props) => props.theme.colors.neutral[500]};
  font-size: ${(props) => props.theme.typography["2xl"].fontSize};
  margin: auto auto;
`

export const Loading = () => <Pending> Loading... </Pending>

export const Error = ({ children }) => <Pending> {children} </Pending>
