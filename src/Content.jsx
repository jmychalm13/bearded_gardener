export function Content() {
  return (
    <div id="content" className="container">
      <h1 className="my-4 text-center">Welcome to the Bearded Garden</h1>
      <h3 className="text-center mb-5">Quality Plants, Quality Service</h3>
      <div className="container-fluid">
        <div className="images row gy-4">
          <div className="col-sm col-md-6 col-lg-3 text-center">
            <img src="src/assets/chonk.jpeg" alt="" />
          </div>
          <div className="col-sm col-md-6 col-lg-3 text-center">
            <img src="src/assets/plant4.jpeg" alt="" />
          </div>
          <div className="col-sm col-md-6 col-lg-3 text-center">
            <img src="src/assets/plant2.jpeg" alt="" />
          </div>
          <div className="col-sm col-md-6 col-lg-3 text-center">
            <img src="src/assets/plant6.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
