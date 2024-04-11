// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import "../SubHeader/subheader.scss";

// import triangleIcon from "../../Assets/images/sub-header-triangle-icon.svg";
// import pageIcon from "../../Assets/images/sub-header-page-icon.svg";
// import layoutIcon from "../../Assets/images/sub-header-layout-icon.svg";
// import search from "../../Assets/images/sub-header-search-icon.svg";
// import filter from "../../Assets/images/sub-header-filter-icon.svg";
// import tableViewSelectedIcon from "../../Assets/images/sub-header-table-view-selected.svg";
// import gridViewIcon from "../../Assets/images/sub-header-grid-view.svg";
// import tableViewIcon from "../../Assets/images/sub-header-table-view-icon.svg";
// import gridviewSelectedIcon from "../../Assets/images/sub-header-grid-view-selected-icon.svg";
// import line from "../../Assets/images/sub-header-line-icon.svg";
// // import { Button } from "@mui/material";
// import { useNavigate } from "react-router";
// import { Listview } from "../ListView/listview";
// import { getValues } from "../../Utils/Services/services";
// import { GridView } from "../GridView/gridview";

// export const SubHeader = () => {
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     // Fetch data or set data from props
//     // For now, setting dummy data
//     setData([...Array(10).keys()].map((i) => ({ id: i, label: `Label ${i}` })));
//   }, []);

//   useEffect(() => {
//     // Filter data when searchQuery changes
//     const filtered = data.filter((item) =>
//       item.label.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchQuery, data]);

//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   useEffect(() => {
//     getValues()
//       .then((res) => {
//         console.log("formdata by get call ", data);
//         setData(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const [tableViews, setTableViews] = useState(true);
//   const [gridViews, setGridViews] = useState(false);
//   const navigate = useNavigate();
//   const sub = () => {
//     navigate("/form");
//   };

//   const changeToTableView = () => {
//     setTableViews(true);
//     setGridViews(false);
//   };
//   const changeToGridView = () => {
//     setGridViews(true);
//     setTableViews(false);
//   };
//   return (
//     <>
//       <p className="title">Portal Configuration</p>
//       <div className="subHeader">
//         <div className="subHeader__leftDiv">
//           <div className="subHeader__leftDiv-all-assets">
//             <div className="subHeader__leftDiv-all-assets-image">
//               <img src={triangleIcon} alt="icon" />
//             </div>
//             <h2>{data.length} </h2>
//             <p className="subHeader__leftDiv-all-assets-paragraph">
//               All Assets
//             </p>
//           </div>
//           <div className="subHeader__leftDiv-portal-pages">
//             <div className="subHeader__leftDiv-portal-pages-image">
//               <img src={pageIcon} alt="icon" />
//             </div>
//             <h2>{data.length-12} </h2>
//             <p className="subHeader__leftDiv-portal-pages-paragraph">
//               Portal Pages
//             </p>
//           </div>
//           <div className="subHeader__leftDiv-templates">
//             <div className="subHeader__leftDiv-templates-image">
//               <img src={layoutIcon} alt="icon" />
//             </div>
//             <h2>{data.length-15} </h2>

//             <p className="subHeader__leftDiv-portal-pages-paragraphh">
//               Templates
//             </p>
//           </div>
//         </div>
//         <div className="subHeader__rightDiv">
//           {/* <div className="subHeader__rightDiv-search">
//             <img src={search} alt="" />
//           </div> */}
//           <input
//           type="text"
//           className="subHeader__rightDiv-search"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//           placeholder="Search by label..."
//         />
//           <div className="subHeader__rightDiv-filter">
//             <img src={filter} alt="" />
//           </div>
//           <div className="subHeader__rightDiv-toggleButton">
//             <div
//               className="subHeader__rightDiv-toggleButton-table"
//               onClick={changeToTableView}
//             >
//               {tableViews ? (
//                 <img src={tableViewSelectedIcon} alt="tableicon" />
//               ) : (
//                 <img src={tableViewIcon} alt="icon" />
//               )}
//             </div>
//             <div className="subHeader__rightDiv-toggleButton-line">
//               <img src={line} alt="lineicon" />
//             </div>
//             <div
//               className="subHeader__rightDiv-toggleButton-grid"
//               onClick={changeToGridView}
//             >
//               {gridViews ? (
//                 <img src={gridviewSelectedIcon} alt="gridicon" />
//               ) : (
//                 <img src={gridViewIcon} alt="icon" />
//               )}
//             </div>
//           </div>
//           {/* <Button
//             className="subHeader__rightDiv-createButton"
//             onClick={sub}
//           >
//             create
//           </Button> */}
//           <button  className="subHeader__rightDiv-createButton"
//             onClick={sub}>
//             Create
//           </button>
//         </div>
//       </div>
//       {/* {tableViews ? <Listview /> : <GridView />} */}
//       {tableViews ? (
//         <Listview data={filteredData} />
//       ) : (
//         <GridView data={filteredData} />
//       )}
//     </>
//   );
// }

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../SubHeader/subheader.scss";

import triangleIcon from "../../Assets/images/sub-header-triangle-icon.svg";
import pageIcon from "../../Assets/images/sub-header-page-icon.svg";
import layoutIcon from "../../Assets/images/sub-header-layout-icon.svg";
// import search from "../../Assets/images/sub-header-search-icon.svg";
import filter from "../../Assets/images/sub-header-filter-icon.svg";
import tableViewSelectedIcon from "../../Assets/images/sub-header-table-view-selected.svg";
import gridViewIcon from "../../Assets/images/sub-header-grid-view.svg";
import tableViewIcon from "../../Assets/images/sub-header-table-view-icon.svg";
import gridviewSelectedIcon from "../../Assets/images/sub-header-grid-view-selected-icon.svg";
import line from "../../Assets/images/sub-header-line-icon.svg";
import { useNavigate } from "react-router";
import { Listview } from "../ListView/listview";
import { getValues } from "../../Utils/Services/services";
import { GridView } from "../GridView/gridview";
import searchicon from "../../Assets/images/searchicon.png";

export const SubHeader = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data when searchQuery changes
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("Filtered Data:", filtered);
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    console.log("Search Query:", value);
    setSearchQuery(value);
  };

  useEffect(() => {
    getValues()
      .then((res) => {
        console.log("Data fetched from API:", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  const [tableViews, setTableViews] = useState(true);
  const [gridViews, setGridViews] = useState(false);
  const navigate = useNavigate();
  const sub = () => {
    navigate("/form");
  };

  const changeToTableView = () => {
    setTableViews(true);
    setGridViews(false);
  };
  const changeToGridView = () => {
    setGridViews(true);
    setTableViews(false);
  };
  return (
    <>
      <p className="title">Portal Configuration</p>
      <div className="subHeader">
        <div className="subHeader__leftDiv">
          <div className="subHeader__leftDiv-all-assets">
            <div className="subHeader__leftDiv-all-assets-image">
              <img src={triangleIcon} alt="icon" />
            </div>
            <h2>{data.length} </h2>
            <p className="subHeader__leftDiv-all-assets-paragraph">
              All Assets
            </p>
          </div>
          <div className="subHeader__leftDiv-portal-pages">
            <div className="subHeader__leftDiv-portal-pages-image">
              <img src={pageIcon} alt="icon" />
            </div>
            <h2>{data.length - 12} </h2>
            <p className="subHeader__leftDiv-portal-pages-paragraph">
              Portal Pages
            </p>
          </div>
          <div className="subHeader__leftDiv-templates">
            <div className="subHeader__leftDiv-templates-image">
              <img src={layoutIcon} alt="icon" />
            </div>
            <h2>{data.length - 15} </h2>

            <p className="subHeader__leftDiv-portal-pages-paragraphh">
              Templates
            </p>
          </div>
        </div>
        <div className="subHeader__rightDiv">
          <div className="subHeader__rightDiv-search">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search by label..."
              className="searchInput"
            />
          </div>

          {/* <img src={searchicon} alt="img" /> */}

          {/* <input
          type="text"
          className="subHeader__rightDiv-search"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search by label..."
          
        /> */}
          <div className="subHeader__rightDiv-filter">
            <img src={filter} alt="" />
          </div>
          <div className="subHeader__rightDiv-toggleButton">
            <div
              className="subHeader__rightDiv-toggleButton-table"
              onClick={changeToTableView}
            >
              {tableViews ? (
                <img src={tableViewSelectedIcon} alt="tableicon" />
              ) : (
                <img src={tableViewIcon} alt="icon" />
              )}
            </div>
            <div className="subHeader__rightDiv-toggleButton-line">
              <img src={line} alt="lineicon" />
            </div>
            <div
              className="subHeader__rightDiv-toggleButton-grid"
              onClick={changeToGridView}
            >
              {gridViews ? (
                <img src={gridviewSelectedIcon} alt="gridicon" />
              ) : (
                <img src={gridViewIcon} alt="icon" />
              )}
            </div>
          </div>
          {/* <Button
            className="subHeader__rightDiv-createButton"
            onClick={sub}
          >
            create
          </Button> */}
          <button className="subHeader__rightDiv-createButton" onClick={sub}>
            Create
          </button>
        </div>
      </div>
      {/* {tableViews ? <Listview /> : <GridView />} */}
      {tableViews ? (
        <Listview data={filteredData} />
      ) : (
        <GridView data={filteredData} />
      )}
    </>
  );
};
