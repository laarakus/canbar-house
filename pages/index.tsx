import Header from '../components/molecules/Header';

type Props = {
  text: string
};

const Home: Function = ({ text }: Props): JSX.Element => (
  <div>
    <Header name={text} />
    <pre>mexicana</pre>
  </div>
)

export const getStaticProps: Function = (): Object => {
  return {
    props: {
      text: 'canbar house',
    }
  };
}

export default Home;
