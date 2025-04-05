import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Load_Characters } from '../index.js';
import { Card, Col, Row, Divider, Flex } from 'antd';

import * as i from 'react-bootstrap-icons';

export default function CharactersList({
  statusFilter,
  speciesFilter,
  sortOption
}: {
  statusFilter: string;
  speciesFilter: string;
  sortOption: string;
}) {
  const { error, loading, data } = useQuery(Load_Characters, {variables: {
    status: statusFilter !== 'All' ? statusFilter : undefined,
    species: speciesFilter !== 'All' ? speciesFilter : undefined,
  }});

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  let characters = data?.characters?.results ?? [];

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        {characters.map((character: any) => (
          <Col key={character.id} span={6}>
            <Card cover={<img alt={character.name} src={character.image} />}>
              <Card.Meta title={<><Divider orientation="left">{character.name}</Divider></>}
                description={
                  <>
                    <Flex justify={'space-between'}><i.HeartPulseFill color='red'/><p>{character.status}</p></Flex>
                    <Flex justify={'space-between'}><i.PersonArmsUp color='green'/><p>{character.species}</p></Flex>
                    <Flex justify={'space-between'}><i.GenderAmbiguous color='black'/><p>{character.gender}</p></Flex>
                    <Flex justify={'space-between'}><i.GlobeAmericas color='brown'/><p>{character.origin.name}</p></Flex>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
