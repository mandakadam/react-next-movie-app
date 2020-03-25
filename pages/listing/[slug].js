import Layout from '../../components/Layout';
import API_KEY from '../../API_KEY';
import Link from 'next/link'


class Page extends React.Component {

  static async getInitialProps(ctx) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&page=1&s=${ctx.query.slug}`);
    const data = await res.json();
    return {
        movieList: data.Search,
    };
  }
  componentDidMount(){
     // console.log(this.props)
  }
  render() {
    const { movieList } = this.props;

          const listing = (movieList) && movieList.map((item, index)=>(
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
                 <Link href="/detail/[slug]" as={`/detail/${item.imdbID}`}>
                    <a className="card">
                        <div className="card-header p-0">
                            <img  className="card-img-top" src={item.Poster} alt="" /> 
                        </div>
                        <div className="card-body">
                            <div>
                            <h6 className="card-title">{item.Title}  </h6>
                            <span className="badge badge-pill badge-dark text-capitalize">{item.Type}</span>
                            </div>
                        </div>
                        <div className="card-footer">
                        <span className="btn btn-danger btn-sm rounded-pill">View Details </span>
                        </div>
                    </a>
                </Link>
            </div>
        ));

        return (
            <Layout>
                <div className="container">
                    <div className="row listing">
                          {listing ? listing: (<div className="col-12"><div className="alert alert-danger">No Movies found. Please search different movie</div> </div>)}
                      </div>
                </div>
            </Layout>
        );
    }
}

export default Page
