import SocialLinks from "../SocialLinks";
import useHome from "./useHome";
import "./Home.css";

const Home = () => {
  const { tabs, loading, activeTab, setActiveTab, filterCountries } = useHome();

  return (
    <div>
      <div className="wrapper">
        <div className="top-header">
          <h3>Countries</h3>
          <div>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab && "active"}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="container">
              <div className="row">
                {filterCountries()?.map((country) => (
                  <div key={country.name} className="country col-md-6 mb-3">
                    <div className="card-item">
                      <img
                        src={country.flag}
                        className="card-img-top"
                        alt={`${country.name} flag`}
                        style={{ width: "50px", height: "30px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{country.name}</h5>
                        <span>Asia</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="footer">
          <SocialLinks />
          <div className="text">
            <p>Example@email.com</p>
            <p>Copyright &copy; 2020 Name. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
