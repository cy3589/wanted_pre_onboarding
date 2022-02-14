import { useState } from 'react';
const ClickToEdit = () => {
  const [name, setName] = useState({ value: '김코딩', editMode: false });
  const [age, setAge] = useState({ value: 20, editMode: false });
  const [data, setData] = useState({ name: name.value, age: age.value });
  return (
    <div className="component-wrapper">
      <div className="title">
        <h2>ClickToEdit</h2>
      </div>
      <div className="main" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>이름</label>
          {name.editMode ? (
            <input
              style={{ marginLeft: '1rem', padding: '0.4rem', textAlign: 'center' }}
              onBlur={() => {
                setName((prev) => ({ ...prev, editMode: false }));
                setData((prev) => ({ ...prev, name: name.value }));
              }}
              onChange={(e) => {
                setName((prev) => ({ ...prev, value: e.target.value }));
              }}
              value={name.value}
              onKeyPress={(e) => {
                if (e.key === 'Enter') setName((prev) => ({ ...prev, editMode: false }));
              }}
            />
          ) : (
            <span
              style={{
                marginLeft: '1rem',
                padding: '0.4rem',
                border: '1px solid #b0b0b0',
                width: '10rem',
                display: 'inline-block',
              }}
              onClick={() => {
                setName((prev) => ({ ...prev, editMode: true }));
              }}
            >
              {name.value}
            </span>
          )}
        </div>
        <div>
          <label>나이</label>
          {age.editMode ? (
            <input
              type="number"
              style={{ marginLeft: '1rem', padding: '0.4rem', textAlign: 'center' }}
              onBlur={() => {
                setAge((prev) => ({ ...prev, editMode: false }));
                setData((prev) => ({ ...prev, age: age.value }));
              }}
              onChange={(e) => {
                setAge((prev) => ({ ...prev, value: parseInt(e.target.value, 10) }));
              }}
              value={age.value}
              onKeyPress={(e) => {
                if (e.key === 'Enter') setAge((prev) => ({ ...prev, editMode: false }));
              }}
            />
          ) : (
            <span
              style={{
                marginLeft: '1rem',
                padding: '0.4rem',
                border: '1px solid #b0b0b0',
                width: '10rem',
                display: 'inline-block',
              }}
              onClick={() => {
                setAge((prev) => ({ ...prev, editMode: true }));
              }}
            >
              {age.value}
            </span>
          )}
        </div>
        {`이름 ${data.name} 나이 ${data.age}`}
      </div>
    </div>
  );
};
export default ClickToEdit;
