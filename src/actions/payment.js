import axios from "axios";
import promiseAction from "../utils/promiseAction";
import handleServerError from "../utils/handleServerError";
import * as MODEL from "../models/payment";

import {
  PAYMENT_CREATE_PAYMENT_START,
  PAYMENT_CREATE_PAYMENT_SUCCESS,
  PAYMENT_CREATE_PAYMENT_ERROR,
  PAYMENT_STORE_PAYMENT,
  PAYMENT_CREATE_PAYMENT_VALIDATION_ERRORS,
  PAYMENT_CHECK_PAYMENT_STATUS_START,
  PAYMENT_CHECK_PAYMENT_STATUS_SUCCESS,
  PAYMENT_CHECK_PAYMENT_STATUS_ERROR,
} from '../consts';

const mockRequest = ({ currency, items, email }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve()
    }, 1500)).then(() => ({
      id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      url: "http://google.com/",
      invId: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      total: 25,
      currency,
      email,
      isClosed: false,
      items
    }))

const createPaymentStart = () => ({
  type: PAYMENT_CREATE_PAYMENT_START
})

const createPaymentSuccess = data => ({
  type: PAYMENT_CREATE_PAYMENT_SUCCESS,
  payload: data,
})

const createPaymentError = error => ({
  type: PAYMENT_CREATE_PAYMENT_ERROR,
  payload: error,
})

const createPaymentValidationErrors = errors => ({
  type: PAYMENT_CREATE_PAYMENT_VALIDATION_ERRORS,
  payload: errors,
})

const shouldCreatePayment = state =>
  !state.payment.isHydrating;

export const createPayment = payment => (dispatch, getState) => {
  if (shouldCreatePayment(getState())) {
    dispatch(createPaymentStart());
    //return axios(MODEL.createPayment(payment))
    return mockRequest(payment)
      .then(data => {
        dispatch(createPaymentSuccess(data));
        return Promise.resolve(data);
      })
      .catch(err => {
        dispatch(handleServerError(err, createPaymentError, createPaymentValidationErrors));
        return Promise.reject(err);
      });
  }
}

export const storePayment = payment => ({
  type: PAYMENT_STORE_PAYMENT,
  payload: payment,
})


const checkPaymentStatusStart = id => ({
  type: PAYMENT_CHECK_PAYMENT_STATUS_START,
  payload: id
})

const checkPaymentStatusSuccess = (id, status) => ({
  type: PAYMENT_CHECK_PAYMENT_STATUS_SUCCESS,
  payload: { id, status }
})

const checkPaymentStatusError = (id, error) => ({
  type: PAYMENT_CHECK_PAYMENT_STATUS_ERROR,
  payload: { id, error }
})

const shouldCheckPaymentStatus = (state, id) => {
  const payment = state.payment.list.filter(item => item.id === id)[0];
  return payment && !payment.isHydrating;
}

export const checkPaymentStatus = id => (dispatch, getState) => {
  if (shouldCheckPaymentStatus(getState(), id)) {
    dispatch(checkPaymentStatusStart(id));
    return axios(MODEL.checkPaymentStatus(id))
      .then(({ data }) => {
        console.log(data);
        dispatch(checkPaymentStatusSuccess(id, data));
        return Promise.resolve(data);
      })
      .catch(err => {
        dispatch(handleServerError(err, err => checkPaymentStatusError(id, err)));
        return Promise.reject(err);
      });
  }
}