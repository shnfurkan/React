import { PostInput } from "./InputCrud";

export const postInputActions = (mainInputs) => async () => {
    const response = await PostInput(mainInputs);

}
