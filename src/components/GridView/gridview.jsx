// import React, { useState } from 'react';
// import { CircularProgress } from '@mui/material';
// import './gridview.scss';
// import {  getValuesById } from '../../Utils/Services/services';


// export const GridView = ({data}) => {
// //   const [data, setdata] = useState([]);
//   const [postData, setPostData] = useState({});
//   const [postClick, setPostClick] = useState(false);

// //   useEffect(() => {
// //     getValues()
// //       .then((res) => {
// //         if (res.length !== 0) {
// //           setdata(res.data.data);
// //         }
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }, []);

//   console.log(data, 'Expandables backend data');
//   /**
//  * Function to render the data by ID
//  * @params : API data id to display the data in details component
//  * @returns : returns the data by id
//  * author: Priyanka Sathi
//  */
//   const getDataById = (id) => {
//     setPostClick(true);
//     getValuesById(id)
//       .then((res) => {
//         if (res) {
//           setPostData(res.data.data[0]);
//           console.log(postData);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       {!postClick ? (
//         <>
//           {
//             data.length === 0 ?
//               (
//                 <p className="grid_container-loader">
//                   <CircularProgress disableShrink />
//                 </p>
//               ) : (
//                 <div className="grid_container">
//                   {
//                     data.map((field, index) => (
//                       <div
//                         key={index}
//                         className="grid_container-card"
//                         onClick={() => getDataById(field.id)}
//                       >
//                         <div className="grid_container-card-image">
//                           <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsxGyiyhNtgJgZkEeIlnnZHA96MTEc0CoTg&usqp=CAU"
//                             alt="img"
//                           />
//                         </div>
//                         <div className="grid_container-card-content">
//                           <div className="grid_container-card-content-label">
//                             {field.label}
//                           </div>
//                           <div className="grid_container-card-content-name">
//                             {field.title}
//                           </div>
//                           <div className="grid_container-card-content-overview">
//                             {field.overview}
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   }
//                 </div>
//               )
//           }
//         </>
//       ) : (
//         <>
//           {/* <Details data={postData} />  */}
//         </>
//       )}
//     </>
//   );
// };




import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import './gridview.scss';
import { getValuesById } from '../../Utils/Services/services';
import { Detailedpage } from '../DetailedPage/detailedpage';

export const GridView = ({ data }) => {
  const [postData, setPostData] = useState({});
  const [postClick, setPostClick] = useState(false);
  const [loading, setLoading] = useState(false);

    //   if(data.length===0){
    //     setLoading(true);
    //   }

  const getDataById = (id) => {
    setLoading(true);
    setPostClick(true);
    getValuesById(id)
      .then((res) => {
        if (res) {
          setPostData(res.data.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <CircularProgress disableShrink />
      ) : (
        <>
          {postClick ? (
            <Detailedpage data={postData} />
          ) : (
            
            <div className="grid_container">
              {data && data.map((field, index) => (
                <div
                  key={index}
                  className="grid_container-card"
                  onClick={() => getDataById(field.id)}
                >
                  <div className="grid_container-card-image">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsxGyiyhNtgJgZkEeIlnnZHA96MTEc0CoTg&usqp=CAU"
                      alt="img"
                    />
                  </div>
                  <div className="grid_container-card-content">
                    <div className="grid_container-card-content-label">
                      {field.label}
                    </div>
                    <div className="grid_container-card-content-name">
                      {field.title}
                    </div>
                    <div className="grid_container-card-content-overview">
                      {field.overview}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};
