import React from "react";
import GoogleMapReact from 'google-map-react';


export default function SimpleMap({countryLatLong}){

  console.log('countryLatLong', countryLatLong)
  const defaultProps = {
    center: {lat: 2.5, lng:  112.5},
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent 
            lat={parseFloat(countryLatLong[1])} 
            lng={parseFloat(countryLatLong[2])} 
            text={countryLatLong[0]} 
          />
        </GoogleMapReact>
    </div>
  );
}


const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );
  
//   class SimpleMap extends React.Component {
//     static defaultProps = {
//       center: {lat: 59.95, lng: 30.33},
//       zoom: 11
//     };
  
//     render() {
//       return (
//          <GoogleMapReact
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent 
//             lat={59.955413} 
//             lng={30.337844} 
//             text={'Kreyser Avrora'} 
//           />
//         </GoogleMapReact>
//       );
//     }
//   }
  
  
//   ReactDOM.render(
//     <div style={{width: '100%', height: '400px'}}>
//       <SimpleMap/>
//     </div>,
//     document.getElementById('main')
//   );
  