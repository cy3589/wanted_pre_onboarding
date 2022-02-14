import { useState } from 'react';
const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="component-wrapper">
      <div className="title">
        <h2>Toggle</h2>
      </div>
      <div className="toggle main">
        <input
          id="toggle"
          className="toggle-check"
          type="checkbox"
          checked={toggle}
          onChange={() => {
            setToggle((p) => !p);
          }}
        />
        <label className="toggle-labal" htmlFor="toggle">
          <div className="toggle-ball" />
        </label>
      </div>
    </div>
  );
};
export default Toggle;
