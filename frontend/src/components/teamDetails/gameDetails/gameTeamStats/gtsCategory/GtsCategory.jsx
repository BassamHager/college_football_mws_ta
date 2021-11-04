import "./GtsCategory.css";

const GtsCategory = ({ stat }) => {
  return (
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
};

export default GtsCategory;
