import React, { useContext } from "react";
import { createCont } from "./App";
import MaterialTable from "material-table";
import {  ThemeProvider, createTheme } from "@mui/material";


export default function EmployeeDatas() {
  const { employeeData, setEmployeeData } = useContext(createCont);

  const defaultMatirialTheme = createTheme();

  const columns = [
    { title: "S.No", field: "id" },
    { title: "Employee Name", field: "userName" },
    { title: "Phone Number", field: "phone" },
    { title: "Email", field: "email" },
    { title: "City", field: "city" },
    { title: "Address", field: "address" },

    // {
    //   title: 'Birth Place',
    //   field: 'birthCity',
    //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },
  ];
  // const columns = [
  //   {
  //     name: "id",
  //     label: "S.No",
  //     options: {
  //       customBodyRender: (value) => {
  //         return <p className="ps-4">{value}</p>;
  //       },
  //     },
  //   },
  //   {
  //     name: "userName",
  //     label: "Employee Name",
  //     options: {
  //       customBodyRender: (value) => {
  //         return <p className="ps-4">{value}</p>;
  //       },
  //     },
  //   },
  //   {
  //     name: "phone",
  //     label: "Phone Number",
  //     options: {
  //       customBodyRender: (value) => {
  //         return <p className="ps-4">{value}</p>;
  //       },
  //     },
  //   },
  //   {
  //     name: "email",
  //     label: "Email",
  //     options: {
  //       customBodyRender: (value) => {
  //         return <p className="ps-4">{value}</p>;
  //       },
  //     },
  //   },
  //   {
  //     name: "city",
  //     label: "City",
  //     options: {
  //       customBodyRender: (value) => {
  //         return <p className="ps-4">{value}</p>;
  //       },
  //     },
  //   },
  //   {
  //     name: "address",
  //     label: "Address",
  //     options: {
  //       customBodyRender: (value) => {
  //         return <p className="ps-4">{value}</p>;
  //       },
  //     },
  //   },
  // {
  //   name: "Action",
  //   label: "action",
  //   options: {
  //     customBodyRender: (value) => {
  //       return <p className="ps-4">{value}</p>;
  //     },
  //   },
  // },
  // ];

  const options = {
    actionsColumnIndex: -1,
    searchFieldAlignment:"left",
    headerStyle:{
      zIndex:"0"
    },
    paging:false,
  };

  const editable = {
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const index = oldData.tableData.id;
                  const dataDelete = [...employeeData];
                  dataDelete.splice(index, 1);
                  setEmployeeData(dataDelete);
                  resolve();
                }, 1000);
              }),
              onRowUpdate:(newData,oldData)=>
                new Promise((resolve,reject)=>{
                  setTimeout(()=>{
                    const dataUpdate = [...employeeData]
                    const index = oldData.tableData.id
                    dataUpdate[index]=newData;
                    setEmployeeData(dataUpdate)
                    resolve()
                  },1000)
                })
          }
 
  return (
    <>
      <ThemeProvider theme={defaultMatirialTheme}>
        <MaterialTable
          title={""}
          data={employeeData}
          columns={columns}
          options={options}
          editable={editable}
          localization={{toolbar :{searchPlaceholder:"Search Employee"},}}
          components={{}}
        />
      </ThemeProvider>
    </>
  );
}
