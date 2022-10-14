import React from 'react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({lat, lng, text } : {lat: number, lng: number, text:string}) => <div>{text}</div>;


function Location() {
    const defaultProps = {
        center: {
            lat: 32.56538011726714,
            lng: -94.80477391795927
        },
        zoom: 20
    };
    return (
        <div className='grid lg:grid-rows-1 md:grid-rows-2 lg:grid-cols-2 md:grid-cols-1 mt-[3rem] h-[30rem] w-full bg-[#1e283e] text-[#ffffff]'>
            <div className="col-span-1 row-span-1 font-bold text-lg relative  flex flex-row justify-start items-center">
                <div className="z-10  p-[3rem] flex flex-col">
                    <div className="text-5xl mb-[1rem]">Daily Donuts</div>
                    <div className=" mb-[2rem]">4405 Gilmer Road Unit 101, Longview, TX 75604</div>
                    <div>Mon - Sat: 05:00 - 20:00</div>
                    <div>Sun: 06:00 - 18:00</div>
                </div>
                {/* <div className="absolute h-full w-full rounded-lg top-2 left-2 bg-[#F5F5F5] z-[-100]"></div> */}
            </div> 
            <div className='col-span-1  row-span-1' >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={32.56538011726714}
                        lng={-94.80477391795927}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Location