// CharactersList.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { Load_Characters } from '../index.js';
import { Card, Col, Row } from 'antd';

export default function CharactersList({
  statusFilter,
  speciesFilter,
  sortOption
}: {
  statusFilter: string;
  speciesFilter: string;
  sortOption: string;
}) {
  const { error, loading, data } = useQuery(Load_Characters);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  let characters = data?.characters?.results ?? [];

  // filters
  if (statusFilter !== 'All') {
    characters = characters.filter((c: any) => c.status === statusFilter);
  }
  if (speciesFilter !== 'All') {
    characters = characters.filter((c: any) => c.species === speciesFilter);
  }

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        {characters.map((character: any) => (
          <Col key={character.name} span={6}>
            <Card
              hoverable
              cover={<img alt={character.name} src={character.image} />}
            >
              <Card.Meta
                title={character.name}
                description={
                  <>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
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
