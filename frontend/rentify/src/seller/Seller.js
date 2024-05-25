import React from 'react'

const Seller = () => {
  return (
    <div>
      
        <main>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="index.html">
                <strong><span>Rentify</span> </strong>
              </a>
              <div className="d-lg-none">
                <a href="sign-in.html" className="bi-person custom-icon me-3"></a>
                <a href="product-detail.html" className="bi-bag custom-icon"></a>
              </div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/buyer">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/post-property">Buy property</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/view-property">View property</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Logout</a>
                  </li>
                  
                </ul>
                
              </div>
            </div>
          </nav>
          <header className="site-header section-padding d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-12">
                  <h1>
                    <span className="d-block text-primary"> Buy spaces</span>
                    <span className="d-block text-dark">That you desire</span>
                  </h1>
                </div>
              </div>
            </div>
          </header>
          <section className="products section-padding">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="mb-5">New Arrivals</h2>
                </div>
                <div className="col-lg-4 col-12 mb-3">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt="" />
                    </a>
                    <div className="product-top d-flex">
                      <span className="product-alert me-auto">Newly posted</span>
                      <a href="#" className="bi-heart-fill product-icon"></a>
                    </div>
                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">Lake view apartment</a>
                        </h5>
                        <p className="product-p">Lake view Apartment</p>
                      </div>
                      <small className="product-price text-muted ms-auto">40Lakhs</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-3">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/download.png" className="img-fluid product-image" alt="" />
                    </a>
                    <div className="product-top d-flex">
                      <span className="product-alert">Discounted Price</span>
                      <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                    </div>
                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">Individual villa</a>
                        </h5>
                        <p className="product-p">Fully furnished</p>
                      </div>
                      <small className="product-price text-muted ms-auto">45Lakhs</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/download1.png" className="img-fluid product-image" alt="" />
                    </a>
                    <div className="product-top d-flex">
                      <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                    </div>
                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">SKM Gardens</a>
                        </h5>
                        <p className="product-p">Nature made another world</p>
                      </div>
                      <small className="product-price text-muted ms-auto">50 Lakhs</small>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <h2 className="mb-5">Popular</h2>
                </div>
                <div className="col-lg-4 col-12 mb-3">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/team-fredi-8HRKoay8VJE-unsplash.jpeg" className="img-fluid product-image" alt="" />
                    </a>
                    <div className="product-top d-flex">
                      <span className="product-alert">Trending</span>
                      <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                    </div>
                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">Package</a>
                        </h5>
                        <p className="product-p">Original package design from house</p>
                      </div>
                      <small className="product-price text-muted ms-auto">$50</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-3">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg" className="img-fluid product-image" alt="" />
                    </a>
                    <div className="product-top d-flex">
                      <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                    </div>
                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">Bottle</a>
                        </h5>
                        <p className="product-p">Package design</p>
                      </div>
                      <small className="product-price text-muted ms-auto">$100</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-3">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/anis-m-WnVrO-DvxcE-unsplash.jpeg" className="img-fluid product-image" alt="" />
                    </a>
                    <div className="product-top d-flex">
                      <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                    </div>
                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">Medicine</a>
                        </h5>
                        <p className="product-p">Original design from house</p>
                      </div>
                      <small className="product-price text-muted ms-auto">$200</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
       
       
    </div>
  )
}

export default Seller