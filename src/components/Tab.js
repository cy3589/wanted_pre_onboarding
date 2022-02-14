import { useState } from 'react';

const Tab = () => {
  const [toggle, setToggle] = useState(false);
  const [tabState, setTabState] = useState({ ONE: false, TWO: false, THREE: false });
  const initialState = { ONE: false, TWO: false, THREE: false };
  return (
    <div className="component-wrapper">
      <div className="title">
        <h2>Tab</h2>
      </div>
      <div className="tab main" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="tab-bar">
          {Object.keys(tabState).map((v, i) => (
            <div className="tab-bar-menu" key={v}>
              <input
                className={`tab-check tab-check-${v}`}
                type="checkbox"
                checked={tabState[v]}
                onChange={() => {
                  setTabState({ ...initialState, [v]: !tabState[v] });
                }}
              />
              <h3
                onClick={() => {
                  setTabState({ ...initialState, [v]: !tabState[v] });
                }}
                className={`tab-check-box tab-check-box-${v}`}
              >
                {`Tab${i + 1}`}
              </h3>
            </div>
          ))}
        </div>
        <div
          style={{
            minHeight: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 600,
          }}
        >
          {Object.entries(tabState).find((v) => v[1]) && `Tab menu ${Object.entries(tabState).find((v) => v[1])[0]}`}
        </div>
      </div>
    </div>
  );
};
export default Tab;
