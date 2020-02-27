import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_LIST } from './actionTypes';
import axios from 'axios';
import {initItem} from './actionCreator';
import store from '.';

function sagaAction() {
    axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
    .then(res => {
        let copy = [];
        res.data.banner.forEach(element => {
            copy.push(element.title)
        });
        const action = initItem(copy);
        store.dispatch(action);
    })
}

function* mySaga() {
    yield takeEvery(GET_LIST,  sagaAction);
  }

export default mySaga;
  