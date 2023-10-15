import { BaseButton } from "./HomeButton.Styles"

export const HomeButton = ({ children, handleClick }) => {
	
	return <BaseButton onClick={handleClick}>{children}</BaseButton>
}