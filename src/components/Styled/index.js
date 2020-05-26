import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --cyan: hsl(179, 62%, 43%);
        --yellow: hsl(71, 73%, 54%);
        --gray: hsl(204, 43%, 93%);
        --blue: hsl(218, 22%, 67%);
        --lightblue: hsl(179, 47%, 52%);
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: 'Karla', sans-serif;
        font-size: 16px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(206, 47%, 93%);
    }
`;

export const App = styled.main`
    border-radius: 10px;
    overflow: hidden;
    margin: 5em auto;
    width: min(90%, 635px);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1), -1px -1px 10px rgba(0, 0, 0, 0.1);
    @media (min-width: 600px) {
        margin: 10.1em auto;
    }
`;

export const PaddedContainer = styled.section`
    padding: 2.45em;
    background: white;
`;

export const Row = styled.div`
    @media (min-width: 600px) {
        display: flex;
    }
`;

export const Title = styled.h1`
    color: var(--cyan);
    line-height: 1.4;
    font-size: 1.5rem;
`;

export const SubTitle = styled.h2`
    color: var(--yellow);
    font-size: 1.1rem;
    margin: 1.4em 0 0.5em;
`;

export const Desc = styled.p`
    color: var(--blue);
    line-height: 1.5;
`;

export const Monthly = styled(PaddedContainer)`
    background: var(--cyan);
    @media (min-width: 600px) {
        flex: 50% 1 1;
    }
`;

export const FormattedP = styled.p`
    margin: 1em 0;
    strong {
        font-size: 2rem;
        padding-right: .2em;
        vertical-align: middle;
    }
`;

export const SingUp = styled.button`
    --blurRadius: 5px;
    background: var(--yellow);
    width: 100%;
    display: block;
    color: white;
    border: 0;
    padding: 1em 0;
    border-radius: 5px;
    margin-top: 1.6em;
    font-size: 1rem;
    transition: 0.5s;
    cursor: pointer;
    outline: none;
    box-shadow: 5px 5px var(--blurRadius) rgba(0, 0, 0, 0.5),           -5px 5px var(--blurRadius) rgba(0, 0, 0, 0.5);

    &:hover {
        --blurRadius: 10px;
        transform: translateY(-5px);
        box-shadow: 5px 5px var(--blurRadius) rgba(0, 0, 0, 0.3),           -5px 5px var(--blurRadius) rgba(0, 0, 0, 0.3);
    }
`;

export const WhyUs = styled(PaddedContainer)`
    background: var(--lightblue);
    @media (min-width: 600px) {
        flex: 50% 1 1;
    }
`;

export const SectionTitle = styled.h2`
    margin-bottom: 1em;
    font-size: 1.1rem;
`;
export const List = styled.ul`
    list-style: none;
    line-height: 1.5;
    font-size: 0.8rem;
`;
