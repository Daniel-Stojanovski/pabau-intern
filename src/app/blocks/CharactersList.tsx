import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Load_Characters } from '../index.js';
import { Card, Col, Row, Divider, Flex, Pagination, Skeleton } from 'antd';

import * as i from 'react-bootstrap-icons';

const padStyle: React.CSSProperties = {
  padding: '0.4rem',
}

const marginStyle: React.CSSProperties = {
  margin: '0.4rem',
}

export default function CharactersList({
  statusFilter,
  speciesFilter,
  sortOption,
  // sortDirection,
  // switchLanguage
}: {
  statusFilter: string;
  speciesFilter: string;
  sortOption: string;
  // sortDirection: string;
  // switchLanguage: boolean;
}) {

  const [currentPage, setCurrentPage] = useState(1);

  const { error, loading, data } = useQuery(Load_Characters, {variables: {
    status: statusFilter !== 'All' ? statusFilter : undefined,
    species: speciesFilter !== 'All' ? speciesFilter : undefined,
    page: currentPage,
  }});

  // if (loading) return <LoadingLayout></LoadingLayout>;
  if (error) return <div>Error: {error.message}</div>;

  let characters = [...(data?.characters?.results ?? [])];

  //sorting
  if (sortOption !== 'None'){ // && sortDirection) {
    characters.sort((a: any, b: any) => {
      const aValue = sortOption === 'Name' ? a.name : a.origin.name;
      const bValue = sortOption === 'Name' ? b.name : b.origin.name;
      
      // return sortDirection === 'az'
      //   ? aValue.localeCompare(bValue)
      //   : bValue.localeCompare(aValue);

      // if (aValue < bValue) {
      //   return sortDirection === 'az' ? -1 : 1;
      // }
      // if (aValue > bValue) {
      //   return sortDirection === 'za' ? 1 : -1;
      // }
      // return 0;

      return aValue.localeCompare(bValue);

    });
  }

  const charactersPerPage = 20;
  const totalPages = data?.characters?.info?.pages ?? 1;
  // const calculatePages = Math.ceil(data?.characters?.info?.count / totalPages) * charactersPerPage;
  const calculatePages = totalPages * charactersPerPage/2; // QUESTION TO ASK
  
  return (
    <div style={padStyle}>
      <Row gutter={[16, 16]}>
        {characters.map((character: any) => (
          <Col key={character.id} span={6}>
            <Card cover={
              data ?
              <img alt={character.name} src={character.image} />
              :
              <Skeleton.Image/>
              
              }>
              <Card.Meta title={
                data ?
                <Divider orientation="left">{character.name}</Divider>
                :
                <Divider orientation="left"><Skeleton.Input active/></Divider>
              }
                description={
                    data ?
                    <>
                      <Flex justify={'space-between'}><i.HeartPulseFill color='red'/><p>{character.status}</p></Flex>
                      <Flex justify={'space-between'}><i.PersonArmsUp color='green'/><p>{character.species}</p></Flex>
                      <Flex justify={'space-between'}><i.GenderAmbiguous color='black'/><p>{character.gender}</p></Flex>
                      <Flex justify={'space-between'}><i.GlobeAmericas color='brown'/><p>{character.origin.name}</p></Flex>
                    </>
                    :
                    <>
                      {
                        Array.from({length: 4}).map(() => 
                          <Flex justify={'space-between'} style={padStyle}><Skeleton.Avatar size='small' shape='square' active/><Skeleton.Input size='small' active/></Flex>
                        )
                      }
                    </>
                    
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Flex justify="center" style={marginStyle}>
        <Pagination
          current={currentPage}
          total={calculatePages}// * 10} // QUESTION TO ASK
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </Flex>
    </div>
  );
}
