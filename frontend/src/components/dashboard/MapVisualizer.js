import React from 'react';
import {Button, Drawer, Icon, Input, Row, Table, InputNumber} from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCompanies} from "../../actions/companies";
import {updateMaxYear, updateMinYear} from "../../actions/yearFilter";
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import {Typography} from 'antd';
import {fromJS} from 'immutable';
import {getInvestments} from "../../actions/investments";
import {getInvestors} from "../../actions/investors";

const {Title} = Typography;
const {Paragraph} = Typography;

const makeGeoJSON = (data) => {
    return {
        type: 'FeatureCollection',
        features: data.map(feature => {
            return {
                "type": "Feature",
                "properties": {
                    "id": feature.name,
                    "us_state": feature.us_state
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [feature.latitude, feature.longitude]
                }
            }
        })
    }
};


const heatmapLayer = {
    maxzoom: 9,
    type: 'heatmap',
    paint: {
// Increase the heatmap weight based on frequency and property magnitude
        "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "mag"],
            0, 0,
            6, 1
        ],
// Increase the heatmap color weight weight by zoom level
// heatmap-intensity is a multiplier on top of heatmap-weight
        "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 1,
            9, 3
        ],
// Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
// Begin color ramp at 0-stop with a 0-transparancy color
// to create a blur-like effect.
        "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0, "rgba(33,102,172,0)",
            0.2, "rgb(103,169,207)",
            0.4, "rgb(209,229,240)",
            0.6, "rgb(253,219,199)",
            0.8, "rgb(239,138,98)",
            1, "rgb(178,24,43)"
        ],
// Adjust the heatmap radius by zoom level
        "heatmap-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 2,
            9, 20
        ],
// Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            7, 1,
            9, 0
        ],
    }
};


export class MapVisualizer extends React.Component {
    static propTypes = {
        companies: PropTypes.array,
        getCompanies: PropTypes.func,
        // min_year: PropTypes.int16,
        // max_year: PropTypes.int16,
        updateMinYear: PropTypes.func,
        updateMaxYear: PropTypes.func
    };

    componentDidMount() {
        this.props.getCompanies();
        // this.props.getInvestors();
        // this.props.getInvestments();
    };

    state = {
        viewport: {
            width: 1200,
            height: 700,
            latitude: 39.8283,
            longitude: -98.5795,
            zoom: 3
        },
    };

    updateMaxYear = year => {
        this.props.updateMaxYear(year);
    };

    updateMinYear = year => {
        this.props.updateMinYear(year);
    };

    render() {
        let filtered = this.props.companies.filter(company => company.founded_at >= this.props.min_year && company.founded_at < this.props.max_year);
        let data = makeGeoJSON(filtered);
        return (
            <div>
                <Row
                    style={{paddingBottom: '1rem'}}
                >
                    <Title level={3}>Startup Map Visualizer</Title>
                    <Paragraph>Filter the map by startup founding date by changing the values below. The map will update
                        automatically.</Paragraph>
                    <Row style={{paddingBottom: '2rem'}}>
                        <InputNumber defaultValue={this.props.min_year} onChange={this.updateMinYear}/>
                        <InputNumber defaultValue={this.props.max_year} onChange={this.updateMaxYear}/>
                    </Row>
                    <ReactMapGL
                        mapboxApiAccessToken={'pk.eyJ1IjoiYm93ZW5zMTM5NyIsImEiOiJjam82Y3AzcnQwZ3AwM3Byc3g3aTJqNThvIn0.Vhp1bRdXC1MrziPuDOFe-A'}
                        {...this.state.viewport}
                        onViewportChange={(viewport) => this.setState({viewport})}
                    >
                        {data && (
                            <Source id="my-data" type="geojson" data={data}>
                                <Layer
                                    id="point"
                                    type="circle"
                                    paint={{
                                        'circle-radius': 5,
                                        'circle-color': '#515E82'
                                    }}/>
                                <Layer {...heatmapLayer} />
                            </Source>
                        )}
                    </ReactMapGL>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    companies: state.companies.companies,
    min_year: state.yearFilter.min_year,
    max_year: state.yearFilter.max_year
});

export default connect(mapStateToProps, {getCompanies, updateMaxYear, updateMinYear})(MapVisualizer);
