import styled from 'styled-components';


export const Container = styled.div`
  width: 80%;
  background: var(--gray-900);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  header {
    display: absolute;
    background: #fff;
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;


    img {
      pointer-events: none;
      user-select: none;
      max-width:200px;
      max-height:150px;
      width: auto;
      height: auto;
      margin: 20px;
    }
  }

  section.body {
    padding: 10px 30px;

    h2 {
      color: var(--yellow-300);
      text-align: center;
    }

    p {
      color: #fff;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      color: #fff;

      b {
        font-weight: 600;
      }
    }
  }
  section.footer {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 20px;
    background: var(--black-300);
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: grid;

      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0 25px;      

      button.edit {
        background: var(--blue-400);
        color: #fff;
        padding:15px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
          filter: brightness(0.8)
        }
      }

      button.delete {
        background: var(--red-200);
        color: #fff;
        padding:15px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
          filter: brightness(0.8)
        }
      }
    }
  }
`