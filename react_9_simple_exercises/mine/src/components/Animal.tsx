type Props = {
  animal: string
}

export const Animal: React.FC<Props> = ({animal}) => {
  return (
    <li>{animal}</li>
  );
};
