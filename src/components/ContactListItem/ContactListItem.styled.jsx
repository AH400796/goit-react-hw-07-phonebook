import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 20px;
  font-weight: 500;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  max-width: 500px;
  padding: 2px 5px 2px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #8ed9fc;
  box-shadow: 2px 2px 5px #3d3d3d;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
export const ListItemButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
`;
