import { Switch, TogglerInput, Slider } from "./TogglerButton.Styles"


// PLACEHOLDER TEM QUE ARRUMAR
export const TogglerButton = () => {
    return (
        <Switch htmlFor="toggler">
            <TogglerInput type="checkbox" name="" id="toggler" />
            <Slider  />
        </Switch>
    )
}