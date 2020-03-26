import Layout from '../../components/Layout';
import API_KEY from '../../API_KEY';
import fetch from 'isomorphic-unfetch'

class Detail extends React.Component {

  static async getInitialProps(ctx) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${ctx.query.slug}`);
    const data = await res.json();
    return {
        detail: data,
    };
  }

  render() {
      const {detail} = this.props
        return (
            <Layout>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className=" border border-light rounded">
                                <img  className="card-img-top" src={detail.Poster} alt="" /> 
                            </div>
                        </div>
                        
                        <div className="col-lg-8">
                                <h3 className="card-title border-bottom border-light pb-3">{detail.Title}</h3>
                                <div><b>Year</b>: {detail.Year}, Released: {detail.Released}</div>
                                <div><b>Genre</b>: {detail.Genre}</div>
                                <div><b>Director</b>: {detail.Director}</div>
                                <div><b>Writer</b>: {detail.Writer}</div>
                                <div><b>Actors</b>: {detail.Actors}</div>
                                <div><b>Language</b>: {detail.Language}</div>
                                <div><b>Production</b>: {detail.Production}</div>

                                <div className="mt-3">
                                    <b>Awards: {detail.Awards}</b>
                                </div>
                                <h5 className="mt-3">Rating</h5>
                                <div>
                                    {
                                        detail.Ratings.map((item,index)=>(<div key={`rating_${index}`}>
                                                <b>{item.Source}</b> : {item.Value}
                                        </div>))
                                    }
                                </div>
                                <h5 className="mt-3">BoxOffice</h5>
                                <div>{detail.BoxOffice}</div>


                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Detail
