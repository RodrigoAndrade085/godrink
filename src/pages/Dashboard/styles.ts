import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  
  input {
    font-size: 16px;
    flex: 1;
    background: #fff;
    border: 1;
    color: #121214e6;
    padding: 12px 20px;
    border-radius: 8px;

    &::placeholder {
      color: #b7b7cc;
    }
  }
`

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;


  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px 0;
`;
