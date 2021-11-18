import { useEffect } from "react";

export default function HideNav(props) {
  useEffect(() => {
    return () => {
        props.setDropMenu("hideNav");
    }
    // eslint-disable-next-line
  }, []);

  return null;
}