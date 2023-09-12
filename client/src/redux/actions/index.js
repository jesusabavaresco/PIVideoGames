import axios from "axios";
import { GET_GAMES, FILTER_GENRES, FILTER_CREATED, ORDER_NAME, ORDER_RATING, SEARCH_NAME, GET_GENRES, GET_DETAIL } from "./types";


export function getGames() {
    return async function (dispatch) {
        let data = await axios.get("http://localhost:3001/videogame", {

        });
        return dispatch({
            type: GET_GAMES,
            payload: data.data
        })
    }
}

export function searchName(name) {
    return async function (dispatch) {
        let data = await axios.get(`http://localhost:3001/videogame?name=${name}`)

        return dispatch({
            type: SEARCH_NAME,
            payload: data.data
        })
    }
}

export function filterGenres(payload) {
    return {
        type: FILTER_GENRES,
        payload
    }
}

export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function filterName(payload) {
    return {
        type: ORDER_NAME,
        payload
    }
}

export function filterRating(payload) {
    return {
        type: ORDER_RATING,
        payload
    }
}

export function getGenres() {
    return async function (dispatch) {
        const data = await axios.get("http://localhost:3001/genero")

        return dispatch({
            type: GET_GENRES,
            payload: data.data.data
        })

    }
}

export function postVideogames(payload) {
    return async function () {
        const data = await axios.post('http://localhost:3001/videogame', payload);
        return data
    }
}

export function getDetail(id) {
    return async function (dispacth) {
        let data = await axios.get(`http://localhost:3001/videogame/${id}`)
        return dispacth({
            type: GET_DETAIL,
            payload: data.data
        })
    }
}