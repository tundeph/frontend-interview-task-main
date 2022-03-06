import styled from "styled-components"

// The badge component
export const Badge = styled.div`
  color: ${(props) => props.theme.colors.green[500]};
  background-color: ${(props) => props.theme.colors.green[100]};
  font-size: ${(props) => props.theme.typography.s.fontSize};
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.l};
  border-radius: ${(props) => props.theme.space.m};
`
