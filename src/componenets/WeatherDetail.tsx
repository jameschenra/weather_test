import { Col, Image, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
	loadWeather,
	selectIsLoading,
	selectOpenModal,
	selectSelectedLocation,
	selectWeatherDetail,
	setOpenDetail,
} from "../reducers/weather";
import { useAppSelector } from "../store/configureStore";
import { LocationInfo } from "../types/LocationInfo";
import LoadingSlider from "./shared/LoadingSlider";
import '../styles/weather_detail.css';

const ContentContainer = styled.div`
  position: relative;
  min-height: 300px;
  text-align: center;
`

const WeatherDetail = () => {
	const dispatch = useDispatch()
	const isModalVisible: boolean = useAppSelector(selectOpenModal)
	const selectedLocation: LocationInfo | null = useAppSelector(
		selectSelectedLocation
	)
	const weatherDetail = useAppSelector(selectWeatherDetail)
	const isLoading = useAppSelector(selectIsLoading)

	useEffect(() => {
		if (isModalVisible && selectedLocation) {
			dispatch(loadWeather(selectedLocation.woeid))
		}
	}, [isModalVisible, selectedLocation, dispatch])

	const handleClose = () => {
		dispatch(setOpenDetail({ open_status: false, selected_location: null }))
	}

	return (
		<Modal
			title={selectedLocation?.title}
			visible={isModalVisible}
			onCancel={handleClose}
			footer={null}
		>
			<h3 style={{ textAlign: "center", fontSize: '30px', fontWeight: 700}}>Today</h3>
			<hr style={{ borderTop: '1px solid #BFBFBF', width: '80%', marginBottom: '35px'}} />

			<ContentContainer>
				{isLoading ? (
					<LoadingSlider />
				) : weatherDetail ? (
					<div>
						<Row gutter={16} align="middle" justify="center">
							<Col span={8}>
								<h5 className="avg-temp">
									{weatherDetail.the_temp.toFixed(1)} C
								</h5>
							</Col>
							<Col span={8}>
								<Image width={85} src={`assets/icons/${weatherDetail.weather_state_abbr}.png`} />
								<h5 className="weather-state">{weatherDetail.weather_state_name}</h5>
							</Col>
						</Row>
						<br /><br />

						<div className="weather-state">
							<span className="min-max-temp">Min: {weatherDetail.min_temp.toFixed(1)} C</span>|
							<span className="min-max-temp">Max: {weatherDetail.max_temp.toFixed(1)} C</span>
						</div>
						<br />

						<div className="weather-state">{weatherDetail.wind_speed.toFixed(1)} mph</div>
						<br />
					</div>
				) : (
					<div>Empty data</div>
				)}
			</ContentContainer>
		</Modal>
	)
};

export default WeatherDetail
