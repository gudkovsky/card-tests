import styled from "styled-components";

import { H1 as TitleTag } from "/src/tags";

const H1 = styled(TitleTag)`
  ${(props) => (props.big ? "32px" : "24px")}
`;

export default H1;
