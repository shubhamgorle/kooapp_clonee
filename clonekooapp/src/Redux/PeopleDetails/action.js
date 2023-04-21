import axios from "axios"
import { GET_PEOPLE_DATA } from "./actionType"
import { GET_FEED_DATA,GET_CHANGE_DATA } from "./actionType"

let getData = (i) => {
    return (dispatch) => {
      i === 0
        ? axios.get(`${process.env.REACT_APP_API_KEY}/peopleData`).then((res) => {
            return dispatch(redData(res.data));
          })
        : axios.get(`${process.env.REACT_APP_API_KEY}/feedData`).then((res) => {
            return dispatch(blueData(res.data));
          });
    };
  };
  


let redData = (data)=>{
    return{
        type:GET_PEOPLE_DATA,
        payload:data
    }
}

let blueData = (data)=>{
    return{
        type:GET_FEED_DATA,
        payload:data
    }
}

// let putData = (data) => {
//   return (dispatch) => {
//        axios.put('${process.env.REACT_APP_API_KEY}/peopleData',data)
//         .then((res) => {
//           console.log(res.data,"put data called")
//           return dispatch(redData(res.data));
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//   };
// };

// const putData = (updatedData) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.put('${process.env.REACT_APP_API_KEY}/peopleData', {updatedData});
//       console.log(res.data,'Data updated successfully on server.');
//       return dispatch(redData(res.data));
//     } catch (error) {
//       console.error('Error updating data on server:', error);
//     }
//   };
// };

// const putData = (updatedData) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('${process.env.REACT_APP_API_KEY}/peopleData', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           // 'If-Match': 'etag'
//         },
//         body: JSON.stringify(updatedData)
//       });
      
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
      
//       const data = await response.json();
//       console.log(data,'Data updated successfully on server.');
//       return dispatch(redData(data));
      
//     } catch (error) {
//       console.error('Error updating data on server:', error);
//     }
//   };
// };

// const putData = (updatedData) => {
//   return (dispatch) => {
//     fetch('${process.env.REACT_APP_API_KEY}/peopleData', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         // 'If-Match': 'etag'
//       },
//       body: JSON.stringify(updatedData)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data, 'Data updated successfully on server.');
//       return dispatch(redData(data));
//     })
//     .catch(error => {
//       console.error('Error updating data on server:', error);
//     });
//   };
// };
// const putData = (updatedData) => {
//   return (dispatch) => {
//     fetch('${process.env.REACT_APP_API_KEY}/peopleData', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedData)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data, 'Data updated successfully on server.');
//       return dispatch(redData(data));
//     })
//     .catch(error => {
//       console.error('Error updating data on server:', error);
//     });
//   };
// };

const putData = (send,id1) => {
  console.log(send,id1,"in actionnn")
    return (dispatch) => {
      fetch(`${process.env.REACT_APP_API_KEY}/peopleData/${id1}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(send)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data, 'Data updated successfully on server.');
        return dispatch(getData(0));
      })
      .catch(error => {
        console.error('Error updating data on server:', error);
      });
    };
  };





export {getData , redData ,blueData,putData}