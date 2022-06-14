import axios from "axios";
import { POST_ARTICLE, GET_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "./ActionTypes";

export const getArticles = () => {
    return async (dispatch) => {
        console.log('reducers get article')
        try {
            await axios.get("http://localhost:3000/article")
                .then((response) => {
                    let responsed = response.data
                    console.log("responsed", responsed.dbArticles)
                    dispatch({ type: GET_ARTICLE, payload: responsed.dbArticles })
                })
        } catch (err) { return console.log(err) }
    }
}

export const getArticleID = (id) => {
    return (dispatch) => {
        console.log('reducers get article')
        return axios.get(`http://localhost:3000/article/${id}`)
            .then((res) => {
                console.log('getArticleID', res.data)
                dispatch({ type: GET_ARTICLE, payload: res.data })
            })
            .catch(err => console.log(err));
    }
};

export const createArticle = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/article", data)
            .then((res) => {
                dispatch({ type: POST_ARTICLE, payload: res.data })
            })
            .catch(err => console.log(err));
    }
};

export const deleteArticle = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:3000/article/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_ARTICLE, payload: res.data })
            })
            .catch(err => console.log(err));
    }
};

export const editArticle = (data) => {
    return (dispatch) => {
        return axios.put(`http://localhost:3000/article/${data.id}`, data)
            .then((res) => {
                dispatch({ type: EDIT_ARTICLE, payload: res.data })
            })
            .catch(err => console.log(err));
    }
};