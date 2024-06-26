
function Data({city,country,province,tempC,tempF,weatherCondition,windSpeedKph,windSpeedMph,humidity,image,time,date}) {

    return (
        <div className="col d-flex align-items-start card m-2 p-3 containerStyles ">


            <p className=" fs-3 text-uppercase text-primary m-0">{city}</p>
            <p className='text-muted '>{province}/{country}<br/>{time}/{date}</p>            
            <p className="fs-1 text-center mx-auto d-block m-0">{tempC}&deg;C / {tempF}&deg;F</p>
            <p className=" mx-auto d-block text-success">{weatherCondition}</p>
            <div className="container">
                <div className="row">
                    <div className="className m-0 p-0 col-6">
                        <p><i className="bi bi-wind m-0"></i> {windSpeedKph} km/h</p>
                        <p><i className="bi bi-wind"></i> {windSpeedMph} miles/h</p>
                        <p><i className="bi bi-droplet-fill m-0"></i> {humidity} %</p>
                    </div>
                    <div className="className m-0 p-0 col-6 outer-container ">
                        <img src={image} ></img>
                    </div>
                </div>
            </div>



        </div>


    )
}

export default Data;