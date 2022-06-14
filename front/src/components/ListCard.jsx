import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../store/actions/ArticlesActions'

const ListCard = (props) => {
    const result = useSelector((state) => state.articles)
    const dispatch = useDispatch()
    const get = () => {
        dispatch(getArticles())
        console.log("RESULTAT:", result.dbArticles)
    }

    return (
        <div>
            <button onClick={get}>GET ARTICLES</button>
            {/* {result ? result : ""} */}
            {/* <p>{result}</p> */}
        </div>
    )

}

export default ListCard

