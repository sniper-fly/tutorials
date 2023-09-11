type Props = {
  number: number
}

export const Button: React.FC<Props> = ({number}) => {
  return <button onClick={() => alert(`clicked! button ${number}`)}>
    button {number}
  </button>
}
