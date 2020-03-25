import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch';
import API_KEY from '../API_KEY';



class Index extends React.Component{
   
    static async getInitialProps(something) {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=`);
        const data = await res.json();

        return{
            movieList: data,
            search: "abc"
        }
    }
    componentDidMount() {
        console.log(this.props)
    }

   
    handleChange = (e) =>{
        const val = e.target.value
        this.setState({
            isLoading:true
        })
        this.setState(state=>{
            if(this.state.search.length >=3)
            this.getMovieList()
            return {
                search: val
            }
        })
       
    }
    render(){
        const { userAgent } = this.props

        const { movieList } = this.props;
        const { search } = this.props;
        const { isLoading } = this.props;

        const listing = (movieList.length) && movieList.map((item, index)=>(
            <div className="col-3" key={index}>
                <div className="card">
                        <img  className="card-img-top" src={item.Poster} alt="" /> 
                    <div className="card-body">
                        <h6 className="card-title">{item.Title}</h6>
                        <span className="badge badge-danger">{item.Type}</span>
                        <a href="/" className="btn btn-primary">View Details</a>

                    </div>
                </div>
            </div>
        ));

        return(
            <Layout>
            
            <div className="container">
                <input type="text" minLength="3" value={search} onChange={(e) => this.handleChange(e) } />
                {
                    isLoading ? (<div>Loading</div>) :
                    (
                    <div className="row">
                        {listing}
                    </div>
                    )
                }
            </div>
            </Layout>
        )
    }
}

/*
const Index = (props) => (
    <Layout>
        <div className="container">
            <div className="row">
            {
                (props.movieList.length) && props.movieList.map(item=>(
                    <div className="col-4" key={item.imdbID}>
                        <div className="card">
                                <img  className="card-img-top" src={item.Poster} alt="" /> 
                            <div className="card-body">
                                <h3>{item.Title}</h3>
                                <span className="badge bandge-danger">{item.Type}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <input className="form-control" type="search" />
        </div>
    </Layout>
)

Index.getInitialProps = async function(){
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=abc`);
    const data = await res.json();
    console.log(data)
    return {
        movieList: data.Search
    };
}*/
export default Index