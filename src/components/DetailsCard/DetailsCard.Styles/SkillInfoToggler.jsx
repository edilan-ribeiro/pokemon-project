import styled from "styled-components"

export const SkillInfoToggler = styled.span`
    
    color: ${(props) => (props.$isSkillOpen ? "#eb3458" : "#000000")};
    transform: ${(props) => (props.$isSkillOpen ? '' : 'rotate(-90deg)')};
    transition: all 0.3s ease-in-out;
    
`