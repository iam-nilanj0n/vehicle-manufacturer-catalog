import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

// const carNames = ['BMW', 'tesla', 'ford', 'bugatti', 'maserati', 'buel', 'honda']
// const getmanufacturerdetailsURL = 'https://vbugattipic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/bugatti?format=json'
function App() {
  const [BMW, setBMW] = useState([])
  const [tesla, setTesla] = useState([])
  const [ford, setFord] = useState([])
  const [bugatti, setBugatti] = useState([])
  const [maserati, setMaserati] = useState([])
  const [buel, setBuel] = useState([])
  const [honda, setHonda] = useState([])

  useEffect(() => {
    if (BMW.length < 2) {
      Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/BMW?format=json`)
        .then((res) => {
          if (res.data.Count > 0) {
            setBMW([...res.data.Results]);
          }
        })
    }
    if (tesla.length < 2) {
      Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/tesla?format=json`)
        .then((res) => {
          if (res.data.Count > 0) {
            setTesla([...res.data.Results]);
          }
        })
    }
    if (ford.length < 2) {
      Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/ford?format=json`)
        .then((res) => {
          if (res.data.Count > 0) {
            setFord([...res.data.Results]);
          }
        })
    }
    if (bugatti.length < 2) {
      Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/bugatti?format=json`)
        .then((res) => {
          if (res.data.Count > 0) {
            setBugatti([...res.data.Results]);
          }
        })
    }
    if (maserati.length < 2) {
      Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/maserati?format=json`)
        .then((res) => {
          if (res.data.Count > 0) {
            setMaserati([...res.data.Results]);
          }
        })
    }
    if (buel.length < 2) {
      Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/buel?format=json`)
        .then((res) => {
          if (res.data.Count > 0) {
            setBuel([...res.data.Results]);
          }
        })
    }
    if (honda.length < 2) {
      Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/honda?format=json`)
        .then((res) => {
          if (res.data.Count > 0) {
            setHonda([...res.data.Results]);
          }
        })
    }
  }, [BMW, tesla, buel, bugatti, ford, maserati, honda])
  console.log(tesla);
  const alertShow = (a,b,c,d)=>{
    alert(`${a} ${b}`+ '  ' +c + '  '+ d)
  }
  return (
    <div className="App">
      <header>
        <h1>VEHICLE MANUFACTURERS</h1>
        <div className='searchSection'>
          <div>
            <label>Search:</label>
            <input type='text' />
          </div>
          <div className='filterVehicle'>
            <label>Filter by Vehicle Type:</label>
            <input type='text' />
          </div>
        </div>
      </header>
      <main>
        <div className='columnNames'>
          <p>Name</p>
          <p>Country</p>
          <p>Type</p>
        </div>
        <section className='displaySection'>
          {/* BMW is here */}
          {(BMW.length > 0) ? (
            <div className='BMW_Section'>
              {BMW.map((e, i) => {
                return (
                  <div className='BMW_Details' key={i}>
                    {(e.Mfr_CommonName && e.Country && e.VehicleTypes[0])?(
                      <div onClick={(event)=>alertShow(e.PrincipalFirstName, e.PrincipalPosition,e.Mfr_Name, e.StateProvince)}>
                        <p >{e.Mfr_CommonName}</p>
                        <p >{e.Country}</p>
                        <p >{e.VehicleTypes[0].Name}</p>
                      </div>
                    ):(
                      <></>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
          {/* ford is here*/}
          {(ford.length > 0) ? (
            <div className='ford_Section'>
              {ford.map((e, i) => {
                return (
                  <div className='ford_Details' key={i}>
                    {(e.Mfr_CommonName && e.Country && e.VehicleTypes[0] )?(
                      <div onClick={(event)=>alertShow(e.PrincipalFirstName, e.PrincipalPosition,e.Mfr_Name, e.StateProvince)}>
                        <p >{e.Mfr_CommonName}</p>
                        <p >{e.Country}</p>
                        <p >{e.VehicleTypes[0].Name}</p>
                      </div>
                    ):(
                      <></>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
        {/* Tesla is here*/}
        {(tesla.length > 0) ? (
            <div className='tesla_Section'>
              {tesla.map((e, i) => {
                return (
                  <div className='tesla_Details' key={i}>
                    {(e.Mfr_CommonName && e.Country && e.VehicleTypes[0] )?(
                      <div onClick={(event)=>alertShow(e.PrincipalFirstName, e.PrincipalPosition,e.Mfr_Name, e.StateProvince)}>
                        <p >{e.Mfr_CommonName}</p>
                        <p >{e.Country}</p>
                        <p >{e.VehicleTypes[0].Name}</p>
                      </div>
                    ):(
                      <></>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
          {/* honda is here */}
          {(honda.length > 0) ? (
            <div className='honda_Section'>
              {honda.map((e, i) => {
                return (
                  <div className='honda_Details' key={i}>
                    {(e.Mfr_CommonName && e.Country && e.VehicleTypes[0] )?(
                      <div onClick={(event)=>alertShow(e.PrincipalFirstName, e.PrincipalPosition,e.Mfr_Name, e.StateProvince)}>
                        <p >{e.Mfr_CommonName}</p>
                        <p >{e.Country}</p>
                        <p >{e.VehicleTypes[0].Name}</p>
                      </div>
                    ):(
                      <></>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
          {/* bugati is here */}
          {(bugatti.length > 0) ? (
            <div className='bugatti_Section'>
              {bugatti.map((e, i) => {
                return (
                  <div className='bugatti_Details' key={i}>
                    {(e.Mfr_CommonName && e.Country && e.VehicleTypes[0] )?(
                      <div onClick={(event)=>alertShow(e.PrincipalFirstName, e.PrincipalPosition,e.Mfr_Name, e.StateProvince)}>
                        <p >{e.Mfr_CommonName}</p>
                        <p >{e.Country}</p>
                        <p >{e.VehicleTypes[0].Name}</p>
                      </div>
                    ):(
                      <></>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
          {/* maserati is here */}
          {(maserati.length > 0) ? (
            <div className='maserati_Section'>
              {maserati.map((e, i) => {
                return (
                  <div className='maserati_Details' key={i}>
                    {(e.Mfr_CommonName && e.Country && e.VehicleTypes[0] )?(
                      <div onClick={(event)=>alertShow(e.PrincipalFirstName, e.PrincipalPosition,e.Mfr_Name, e.StateProvince)}>
                        <p >{e.Mfr_CommonName}</p>
                        <p >{e.Country}</p>
                        <p >{e.VehicleTypes[0].Name}</p>
                      </div>
                    ):(
                      <></>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
          {/* buel is here */}
          {(buel.length > 0) ? (
            <div className='buel_Section'>
              {buel.map((e, i) => {
                return (
                  <div className='buel_Details' key={i}>
                    {(e.Mfr_CommonName && e.Country && e.VehicleTypes[0] )?(
                      <div onClick={(event)=>alertShow(e.PrincipalFirstName, e.PrincipalPosition,e.Mfr_Name, e.StateProvince)}>
                        <p >{e.Mfr_CommonName}</p>
                        <p >{e.Country}</p>
                        <p >{e.VehicleTypes[0].Name}</p>
                      </div>
                    ):(
                      <></>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
