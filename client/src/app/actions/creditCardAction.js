import * as axios from "axios";
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const POST_DATA = 'POST_DATA';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

const fetchData = () => {
  return {
    type: FETCH_DATA
  }
};
const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
};
const fetchDataFailure = (error) => {
  return {
    type: FETCHING_DATA_FAILURE,
    payload: error
  }
};

export function fetchCreditCards(dispatch) {
  // const corsProxy = `https://cors-anywhere.herokuapp.com/`,
  const url = `http://localhost:2000/credit-cards`;
  dispatch(fetchData());
  
  // const mockData = false;
  // if (mockData) {
  //   return;
  // }
  axios.get(url)
      .then(res => dispatch(fetchDataSuccess(res.data)))
      .catch(error => dispatch(fetchDataFailure(error)));
}



const postData = () => {
  return {
    type: POST_DATA
  }
};

const postDataSuccess = (data) => {
  return {
    type: POST_DATA_SUCCESS,
    payload: data
  }
};

const postDataFailure = (data) => {
  return {
    type: POST_DATA_FAILURE,
    payload: data
  }
};

export function addCreditCard(answerList) {
  return (dispatch) => {
    dispatch(postData);

    axios.post('http://localhost:2000/credit-cards', answerList)
        .then(res => {
          alert('Success');
          return dispatch(postDataSuccess(res))
        })
        .catch(error => {
          console.log('Failure');
          return dispatch(postDataFailure(error));
        });
    return;
  }
}
