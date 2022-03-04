import React, { useEffect, useState } from 'react';
const initialData = ['refurbished', 'antique', 'vintage', '중고A급', 'rustic'];
const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  useEffect(() => {
    if (inputValue) {
      const completeRetuls = initialData.filter((v) => v.indexOf(inputValue) !== -1);
      setAutoCompleteResult(completeRetuls);
    } else setAutoCompleteResult([]);
  }, [inputValue]);
  return (
    <div className="component-wrapper">
      <div className="title">
        <h2>AutoComplete</h2>
      </div>
      <div className="main">
        <div
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '10px',
            boxShadow: 'rgb(225 225 225) 0px 8px 6px 0px',
            border: '1px solid #e0e0e0',
          }}
        >
          <div style={{ display: 'flex' }}>
            <input
              style={{
                width: '100%',
                border: 0,
                fontSize: '1rem',
                marginBottom: '0.2rem',
              }}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div
              style={{
                marginLeft: 'auto',
                float: 'right',
                cursor: 'pointer',
                width: '2rem',
                paddingBottom: '0.3rem',
                marginBottom: autoCompleteResult.length > 0 ? '0.4rem' : '0',
              }}
              onClick={() => {
                setInputValue('');
              }}
            >
              x
            </div>
          </div>
          {autoCompleteResult.length > 0 && (
            <>
              <div
                style={{
                  borderBottom: '1px solid #b4b4b4',
                  width: 'calc(100% + 1rem + 1px)',
                  marginLeft: 'calc(-0.5rem - 1px)',
                  marginBottom: '0.4rem',
                }}
              />
              {React.Children.map(autoCompleteResult, (content) => (
                <div
                  style={{
                    fontSize: '0.8rem',
                    textAlign: 'left',
                    paddingLeft: '10px',
                  }}
                >
                  {content}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default AutoComplete;
