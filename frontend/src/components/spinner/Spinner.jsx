import "./Spinner.css";

// assets
import spinner from "../../assets/images/loading-icon-transparent-background-4.jpg";

const Spinner = () => (
  <div className="spinner">
    <img src={spinner} alt="loading..." />
  </div>
);

export default Spinner;
