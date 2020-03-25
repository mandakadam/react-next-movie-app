import  "bootstrap/dist/css/bootstrap.min.css"
import  "../styles/style.scss"
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react';
import Navbar from '../components/Navbar'

const Layout = (props) => {
    const [search, setSearch] = useState('');
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }
    return(
    <div>
        <Head>
            <title>React + Next.js</title>
        </Head>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-12 py-4">
                    <h5>Search your favourite movie</h5>
                    <div className="card shadow-sm border-light">
                        <div className="card-body p-lg-4">
                            <div className="input-group ">
                                <input className="form-control" placeholder="Enter text to Search" value={search} onChange={(e)=>handleChange(e)} type="text"  />
                            
                                <div className="input-group-append">
                                    <Link href="/listing/[slug]" as={`/listing/${search}`}>
                                        <a className="btn btn-danger">Search</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            props.children
        }
    </div>
    )
}

export default Layout