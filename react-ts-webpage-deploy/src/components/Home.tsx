import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <>
    <h1>Welcome to rnakai's Works Page!</h1>
    <Link to={{ pathname: "/fee_calc", search: "?query=apple" }}>
      入場料金計算ページ
    </Link>
  </>
);

export default Home
