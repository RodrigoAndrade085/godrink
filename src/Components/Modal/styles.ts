import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

export const Container = styled.div`

  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  margin-top: 20px;

  display: absolute;
  justify-content: center;
  align-items: center;
`

export const ContainerModal = styled.div`
  background: var(--gray-900);
  color: var(--gray-900);

  border: solid 1px #000;
  border-radius: 16px;
`

export const Form = styled(Unform)`
  
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  padding: 30px 0;

  h2{
    color: var(--yellow-300)
  }
  

  label {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    margin: 10px 0 5px;
    color: #fff;
  }

  input {

    background: #fff;
    
    border:none1;
    color: #121214e6;
    padding: 10px 5px;
    border-radius: 8px;

    &::placeholder {
      color: var(--gray-300);
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  textarea {
    padding: 10px
  }

  button {
    margin-top: 18px;
    align-self: flex-end;
    
    font-weight: bold;
    border-radius: 8px;
    border: 0;
    background: var(--green-700);
    color: #fff;
    padding: 10px 18px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    
    transition: color 0.2s;
    cursor: pointer ;

    .text {
      padding: 18px 30px;
    }

    &:hover {
      filter: brightness(0.8)
    }
  }
`


