import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    return () => {
      var url = window.location.href;
      
      if(url.includes("conveyors")){
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return null;
}