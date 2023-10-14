import { BaseButton } from "./HomeLoadButton.Styles"

export const HomeLoadButton = ({ children, handleClick }) => {
	
	return <BaseButton onClick={handleClick}>{children}</BaseButton>
}