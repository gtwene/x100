import { useState, useEffect } from 'react';

export default function ImageCapturing({ id }) {

  useEffect(()  => {

  }, []); 

  const image_url = 'http://192.168.1.242/imaging/capture-' + id;


  return (
    <>
    <iframe width="100%" height="500px" src={image_url} title="Browser"></iframe>    
    </>
  );
}