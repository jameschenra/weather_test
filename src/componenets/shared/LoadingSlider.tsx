import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const LoadingContainer = styled.div`
	z-index: 10;
	position: absolute;
    top: 0;
    left: 0;
	width: 100%;
	height: 100%;
    
	background-color: white;
`

const LoadingSpiner = styled(Spin)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	color: #4C4C4C;
	font-size: 20px;
	font-weight: 600;
`

const LoadingSlider = () => {
  	return(
	  <LoadingContainer>
		<LoadingSpiner indicator={antIcon} tip="Loading..." />
	  </LoadingContainer>
	)
}

export default LoadingSlider
