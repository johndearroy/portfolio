import React from 'react';

const Preloader = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  })

  return (
    <>
      {loading ? <div id="preloader"/> : null}
    </>
  )
}

export default Preloader;
