import React from 'react';
import background from './back.jpg';

const TextDiv = () => {
  return (
    <>
  
    <div className='container background-container' style={{ backgroundImage: `url(${background})` }}>
   <div>
   <h1 className='text-center' >Connesso, Intelligente, Resistente</h1>
 
      <div className='col-md-12'>
              <h3>Heading 1</h3>
              <p>Paragraph 1</p> 

              <h3>Heading 2</h3>
              <p>Paragraph 2</p>

              <h3>Heading 3</h3>
              <p>Paragraph 3</p>

        </div>
        <div className='col-md-12'>
   
              <h3>Heading 4</h3>
              <p>Paragraph 4</p>
  
              <h3>Heading 5</h3>
              <p>Paragraph 5</p>
   
              <h3>Heading 6</h3>
              <p>Paragraph 6</p>

    </div>
   </div>
   
      </div>
    </>

  );
};

export default TextDiv;
