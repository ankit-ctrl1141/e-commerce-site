import {css} from "styled-components"  // "css" as named import from styled components.

// instead of writing media query each time in a particular component, we can use the below function, in which i have written all the function of media queries, and we will pass some props and that props will get passed in the below function.

export const mobile = (props)=>{
    return css`   // importing "css" from styled components
        @media only screen and (max-width:380px){
            ${props}

        }
    `
} 