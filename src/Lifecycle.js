import React, {useEffect, useState} from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log('Mount!');
    // UnMount 시점에 실행함
    return () => {
      console.log('UnMount!');
    };
  }, [])
  return <div>Unmount Testing Component</div>
}
const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{padding: 20}}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest/>}
    </div>
  );
};

export default Lifecycle;