import { BaseButton } from "./GeneralButton.Styles"

export const GeneralButton = ({ children, handleClick }) => {
	
	return <BaseButton onClick={handleClick}>{children}</BaseButton>
}