/* Bootstrap CSS */
// import React, { useState } from 'react';
// import LandingLayout from './LandingLayout.jsx';



// const Feature = () => {
//   const [active, setActive] = useState('Features');


//   return (
//     <LandingLayout active={active} setActive={setActive}>
//       {({ mystyle }) => (
//         <>
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
//             <h1 className="text-xl font-bold" style={{ ...mystyle }} >🚧 Men at Work 👷‍♂️ </h1>
//           </div>
//         </>
//       )}
//     </LandingLayout>
//   );
// };

// export default Feature;


//Tailwind css
import React, { useState } from 'react';
import LandingLayout from './LandingLayout.jsx';

const Feature = () => {
  const [active, setActive] = useState('Features');

  return (
    <LandingLayout active={active} setActive={setActive}>
      {({ mystyle }) => (
        <>
          <div className="flex justify-center items-center h-[90vh]">
            <h1 className="text-xl font-bold" style={{ ...mystyle }}>
              🚧 Men at Work 👷‍♂️
            </h1>
          </div>
        </>
      )}
    </LandingLayout>
  );
};

export default Feature;
