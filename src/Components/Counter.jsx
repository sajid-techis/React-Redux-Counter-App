import React, { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement, changeCountTo } from "../Redux/actions";

const Counter = (props) => {
  const [changeCount, setChangeCount] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    setChangeCount(parseInt(value, 0));
  };

  const handleSubmit = () => {
    props.changeCountTo(changeCount);
  };

  return (
    <div>
      <p>Current Count: {props.count} </p>
      <button onClick={props.increment} className="btn">
        +
      </button>
      <button onClick={props.decrement} className="btn">
        -
      </button>
      <br></br>
      <input
        type="number"
        value={changeCount}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSubmit} className="inc-btn">
        Increment By
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

export default connect(mapStateToProps, {
  increment,
  decrement,
  changeCountTo,
})(Counter);
