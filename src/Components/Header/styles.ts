import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  background-color: var(--gray-900);

  div {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    button.header {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      bottom: 0;
      right: 0;
      border: none;
      background: var(--gray-100);

      cursor: pointer;

    }

    nav {
    margin-left: 5rem;
    height: 5rem;
  
    button{
      background: transparent;
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--yellow-300);
      border: none;
      font-size: 1rem;

      cursor: pointer;

    

      transition: color 0.2s;

      & + button {
        margin-left: 2rem;
      }

      &:hover {
      filter: brightness(0.8)
    }

      &:active {
        color: var(--background);
        font-weight: bold
      }

      &:active::after {
        content: '';
        height: 3px;border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: var(--yellow-300)
      }

    }
  }
`;





