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

const defaultState = {
  error: null,
  isHydrating: false,
  payment: null,
  validationErrors: null,
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PAYMENT_CREATE_PAYMENT_START:
      return {
        ...state,
        isHydrating: true,
        payment: null,
        error: null,
        validationErrors: null,
      }

    case PAYMENT_CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        isHydrating: false,
        payment: action.payload,
        error: null,
        validationErrors: null,
      }

    case PAYMENT_CREATE_PAYMENT_ERROR:
      return {
        ...state,
        isHydrating: false,
        payment: null,
        error: action.payload,
        validationErrors: null,
      }

    case PAYMENT_CREATE_PAYMENT_VALIDATION_ERRORS:
      return {
        ...state,
        validationErrors: action.payload,
        isHydrating: false,
        error: null,
        payment: null,
      }

    case PAYMENT_STORE_PAYMENT:
      return {
        ...state,
        validationErrors: null,
        error: null,
        list: [
          ...state.list,
          {
            ...action.payload,
            isHydrating: false,
            error: null,
            status: -1,
          }
        ],
      }

    case PAYMENT_CHECK_PAYMENT_STATUS_START:
      return {
        ...state,
        list: [
          ...state.list.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                isHydrating: true,
                error: null,
              }
            } else {
              return {
                ...item
              }
            }
          })
        ]
      }

    case PAYMENT_CHECK_PAYMENT_STATUS_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                isHydrating: false,
                error: null,
                status: +action.payload.status,
              }
            } else {
              return {
                ...item
              }
            }
          })
        ]
      }

    case PAYMENT_CHECK_PAYMENT_STATUS_ERROR:
      return {
        ...state,
        list: [
          ...state.list.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                isHydrating: false,
                error: action.payload.error,
              }
            } else {
              return {
                ...item
              }
            }
          })
        ]
      }

    default:
      return state;
  }
};