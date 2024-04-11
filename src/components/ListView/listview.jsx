// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import { getValues, getValuesById } from "../../Utils/Services/services";
// import './listview.scss';
// import {
//     CircularProgress,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
// } from "@mui/material";

// export const Listview = () => {
//     const [data, setData] = useState([]);
//     const [postbyid, setPostbyid] = useState([]);
//     const [postclicked, setPostClicked] = useState(false);

//     useEffect(() => {
//         getValues()
//             .then((res) => {
//                 console.log("formdata by get call ", data);
//                 setData(res.data.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);
//     const getDataById = (id) => {
//         setPostClicked(true);
//         console.log("clicked", postclicked);
//         getValuesById(id)
//             .then((res) => {
//                 setPostbyid(res.data.data[0]);
//                 console.log(postbyid);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
//     return (
//         <>
//             {!postclicked ? (
//                 <>
//                     {data.length === 0 ? (
//                         <p className="list_container-loader">
//                             <CircularProgress disableShrink />
//                         </p>
//                     ) : (
//                         <div className="list_container">
//                             <div className="list_container-card">
//                                 <TableContainer>
//                                     <Table>
//                                         <TableHead className="list_container-card-head">
//                                             <TableRow>
//                                                 <TableCell className={`list_container-card-head-cell`} >Title</TableCell>
//                                                 <TableCell className={`list_container-card-head-cell`} >label</TableCell>
//                                                 <TableCell className={`list_container-card-head-cell`} >Release date</TableCell>
//                                                 <TableCell className={`list_container-card-head-cell`} >Director</TableCell>
//                                             </TableRow>
//                                         </TableHead>
//                                         <TableBody>
//                                             {data.map((field) => (
//                                                 <TableRow
//                                                     key={field.id}
//                                                     onClick={() => getDataById(field.id)}
//                                                 >
//                                                     <TableCell>{field.title}</TableCell>
//                                                     <TableCell>{field.label}</TableCell>
//                                                     <TableCell>{field.release_date}</TableCell>
//                                                     <TableCell>{field.director}</TableCell>
//                                                 </TableRow>
//                                             ))}
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                             </div>
//                         </div>
//                     )}
//                 </>
//             ) : (
//                 <></>
//             )}
//         </>
//     );
// };




import React, {  useState } from "react";
import "./listview.scss";
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import { useNavigate } from "react-router";
import { getValuesById } from "../../Utils/Services/services";
import { Detailedpage } from "../DetailedPage/detailedpage";

export const Listview = ({ data }) => {
    const [postbyid, setPostbyid] = useState([]);
    const [postclicked, setPostClicked] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const getDataById = (id) => {
      setLoading(true);
      setPostClicked(true);
      getValuesById(id)
        .then((res) => {
          setPostbyid(res.data.data[0]);
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
        {!postclicked ? (
          <>
            {data.length === 0 ? (
                     <p className="list_container-loader">
                     <CircularProgress disableShrink />
                   </p>
            ) : (
              <div className="list_container">
                <div className="list_container-card">
                  <TableContainer>
                    <Table>
                      <TableHead className="list_container-card-head">
                        <TableRow>
                          <TableCell className={`list_container-card-head-cell`}>
                            Title
                          </TableCell>
                          <TableCell className={`list_container-card-head-cell`}>
                            label
                          </TableCell>
                          <TableCell className={`list_container-card-head-cell`}>
                            Release date
                          </TableCell>
                          <TableCell className={`list_container-card-head-cell`}>
                            Director
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((field) => (
                          <TableRow
                            key={field.id}
                            onClick={() => getDataById(field.id)}
                            className="list_container-card-body-row"
                          >
                            <TableCell>{field.title}</TableCell>
                            <TableCell>{field.label}</TableCell>
                            <TableCell>{field.release_date}</TableCell>
                            <TableCell>{field.director}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            )}
          </>
        ) : (
          <><Detailedpage data={postbyid}/></>
        )}
      </>
    );
  };
  