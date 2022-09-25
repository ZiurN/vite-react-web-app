import { useRef, useEffect, useState } from "react";

function clickOutsideHandler (initialValue) {
  const [clickOutsiteToggle, setClickOutsideToggle] = useState(initialValue);
  const childRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [childRef]);
  const handleClickOutside = (event) => {
    let clickOutsite = childRef.current && !childRef.current.contains(event.target);
    setClickOutsideToggle(clickOutsite);
  }
  return { childRef, clickOutsiteToggle, setClickOutsideToggle }
}

export { clickOutsideHandler }