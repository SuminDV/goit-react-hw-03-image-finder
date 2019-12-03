import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={s.loader}>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} // 3 secs
      />
    </div>
  );
};

export default LoaderComponent;
