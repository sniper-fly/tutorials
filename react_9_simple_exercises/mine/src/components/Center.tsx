import styled from 'styled-components';
const Block = styled.div`
  margin: auto;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 50%;
  background-color: yellow;
  border: 3px solid green;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Center: React.FC = () => {
  return <Block>Hello, World!</Block>
}

export default Center;
