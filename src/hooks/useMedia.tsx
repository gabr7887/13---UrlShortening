import React from 'react'

const useMedia = (media : string) => {
  const [match, setMacth] = React.useState<null | boolean>(null);

  React.useEffect(() => {
    function changeMatch() {
      const {matches} = window.matchMedia(media);
      setMacth(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    }
  }, [media])
  return match;
}

export default useMedia