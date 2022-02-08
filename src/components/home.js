import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const Home = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="15" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="25" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value="05" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="24" />
        </Col>
      </Row>
    </>
  );
};

export default Home;
