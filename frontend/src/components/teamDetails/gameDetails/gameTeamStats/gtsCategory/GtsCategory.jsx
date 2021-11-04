import "./GtsCategory.css";

const GtsCategory = ({ stat }) => (
  <div>
    <h4>
      <span>category</span>
      {stat?.category}
    </h4>
    <h4>
      <span>stat</span>
      {stat?.stat}
    </h4>
  </div>
);

export default GtsCategory;
