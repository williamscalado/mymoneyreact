import styled from "styled-components";


export const ConteinerSumary = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;

  


`
export const SumaryContent = styled.div`

margin-top: -6rem;
background-color : var(--shape);
padding: 2rem 1rem;
border-radius: 0.5rem;

&.bggreen{
   
    background-color: var(--green-select);
    color: #fff;
    
    p{
    color: #fff;
    }

}

    p{
    color: var(--text-title);
    }

    strong{
        padding: 0 0.5rem;
        font-size: 2rem;
        display: inline-block;
        font-weight: 500;
    }


`;



export const SumaryHeader = styled.header`

display: flex;
justify-content: space-between;


`;