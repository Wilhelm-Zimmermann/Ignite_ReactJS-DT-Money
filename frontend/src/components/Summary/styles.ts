import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    @media(max-width: 600px){
        grid-template-columns: 1fr;
    }
    
    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: normal;
            line-height: 3rem;
        }
        &.highlightBc{
            background: var(--green);
            color: #ffffff;
        }
    }
    
`