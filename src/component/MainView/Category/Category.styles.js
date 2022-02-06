import styled from "styled-components";

export const Root = styled.div`
  padding-right: 2px;
  margin-top: 7px;
  background-color: #efefef;
`;
export const Container = styled.div`
  height: 83.9vh;
  overflow: scroll;

  overflow-x: hidden;

  color: #000;
  padding: 1rem 2rem 1rem 2rem;
`;
export const HadingButtonMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;
export const HeadingMianDiv = styled.div``;

export const Heading = styled.div`
  font-family: Dosis, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #111210;
`;
export const SubHeading = styled.div`
  font-family: Dosis, sans-serif;
  font-size: 0.85rem;
  padding-top: 0.4rem;
  color: #57606b;
`;
export const ButtonMainDiv = styled.div``;
export const AddCategoryMainDiv = styled.div`
  margin-top: 1rem;
  padding: 1rem 1rem 1rem 1.5rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .categoryAddBtton {
    color: #eff0f6;
    display: flex;

    background-color: #4b5681;
    text-transform: none;
  }
  .addIcon {
    font-size: 1rem;
    margin-right: 0.2rem;
  }
`;
export const AddCategoryHeading = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

export const CategoryTableMainDiv = styled.div`
  // background-color: red;
  margin-top: 1rem;

  // display: flex;
  // justify-content: space-between;
`;
export const CategoryTableDiv = styled.div`
  background-color: #ffffff;
  // width: 100%;
  padding: 2rem;
`;
export const SubCategoryTableDiv = styled.div`
  background-color: #ffffff;
  // width: 100%;
  padding: 2rem;
  margin-top: 1rem;
`;
