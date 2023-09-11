type Props = {
  onClick: () => void
}

export const Button: React.FC<Props> = ({onClick}) => {
  return <button onClick={onClick}>
    Click me
  </button>
}
