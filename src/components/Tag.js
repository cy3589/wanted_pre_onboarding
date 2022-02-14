import React, { useState } from 'react';
const Tag = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setTags((prev) => [...prev, inputValue]);
    setInputValue('');
  };
  return (
    <div className="component-wrapper">
      <div className="title">
        <h2>Tag</h2>
      </div>
      <div className="main">
        <form onSubmit={onSubmitForm}>
          <div className={`input-wrapper ${isFocus && 'focus'}`}>
            {React.Children.map(tags, (tag, i) => (
              <p className="tag">
                {tag}
                <div
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '50%',
                    width: '0.8rem',
                    height: '0.6rem',
                    margin: '0.3rem 0.2rem 0 0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    paddingBottom: '0.3rem',
                  }}
                  onClick={() => {
                    const newTags = [...tags];
                    newTags.splice(i, 1);
                    setTags(newTags);
                  }}
                >
                  x
                </div>
              </p>
            ))}
            <input
              style={{ padding: '8px', border: 0, overflow: 'hidden' }}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder="Press enter to add tags"
              type="text"
              onFocus={() => {
                setIsFocus(true);
              }}
              onBlur={() => {
                setIsFocus(false);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tag;
