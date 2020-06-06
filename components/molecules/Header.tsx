type Props = {
  name: string
};

const Header: Function = ({ name }: Props): JSX.Element => (
  <header>My header {name}</header>
);

export default Header;
