import React from 'react';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';
import Layout from '../components/layout';
import {
  SubHeader,
  SubpageContainer,
  MainContent,
  SideItem,
} from '../imports/StyledComponents';

const Side = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 5px;
  align-items: space-around;

  margin-bottom: 60px;
`;

const services = [
  {
    id: 'Varhaisen tuen palvelut',
    items: [
      'Liikkuvat palvelut, akuutti ja terveysasematyö',
      'Päihdepoliklinikat ja yleissairaalapsykiatria',
      'Mielenterveys- ja päihdepoliklinikat',
    ],
  },
  {
    id: 'Tehostetut palvelut',
    items: [
      'Akuuttiosastot',
      'Kuntoutus- ja geropsykiatria',
      'Nuorisopsykiatria',
      'Erityisasiantuntijat ja varahenkilöstö',
    ],
  },
];
// const services = [
//   'Liikkuvat palvelut, akuutti ja terveysasematyö',
//   'Päihdepoliklinikat ja yleissairaalapsykiatria',
//   'Mielenterveys- ja päihdepoliklinikat',
//   'Akuuttiosastot',
//   'Kuntoutus- ja geropsykiatria',
//   'Nuorisopsykiatria',
//   'Erityisasiantuntijat ja varahenkilöstö',
// ];
const Mielenterveys = () => (
  <Layout>
    <SubpageContainer>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ tension: 40, friction: 20 }}
      >
        {styles => (
          <SubHeader style={styles}>
            <MainContent>
              <h2> Mielenterveys - ja päihdepalvelut </h2>

              <p>
                Tarjoavat tutkimusta, hoitoa ja kuntoutusta psykiatrista
                erikoissairaanhoitoa ja päihdehuoltoa tarvitseville
                kymenlaaksolaisille.Mielenterveyspalvelut on suunnattu
                erilaisissa psyykkisissä ongelmatilanteissa olevien ihmisten
                tukemiseen.
              </p>

              <p>
                Päihdepalveluiden tavoitteena on ennaltaehkäistä ja hoitaa
                päihteiden ongelmakäytön haittoja.
              </p>
            </MainContent>
          </SubHeader>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: 'translate3d(100%,-30px,0)' }}
        to={{ opacity: 1, transform: 'translate3d(0%,-30px,0)' }}
        config={{ delay: 3000 }}
      >
        {styles => (
          <Side style={styles}>
            {services.map(item => (
              <SideItem>
                <h3>{item.id}</h3>

                {item.items.map(i => (
                  <p>{i}</p>
                ))}
              </SideItem>
            ))}
          </Side>
        )}
      </Spring>
    </SubpageContainer>
  </Layout>
);

export default Mielenterveys;
