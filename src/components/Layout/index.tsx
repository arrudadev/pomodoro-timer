import React from 'react';

import { Flex, Box } from '@chakra-ui/react';

import FAQ from '../FAQ';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import MenuBar from '../MenuBar';
import Section from '../Section';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex height="100%" width="100%">
      <MenuBar />
      <Main>
        <Header />

        <Box minHeight="max(calc(100vh - 90px), 450px)">{children}</Box>

        <Section
          title="Técnica Pomodoro Timer"
          subtitle="O que é a Técnica do Pomodoro"
        >
          A Técnica Pomodoro é um método de gerenciamento de tempo e
          produtividade desenvolvido por Francesco Cirillo no final dos anos
          1980. O método é cíclico e consiste em separar as tarefas em pequenos
          intervalos de tempo, de 25 minutos, que podem ser chamados de
          “Pomodoros”.
          <br />
          <br />
          Pausas também são previstas entre os intervalos de tempo. Ou seja,
          depois de cada 25 minutos separados, é preciso tirar um momento para
          relaxar e respirar um pouco, antes de retomar as atividades.
          <br />
          <br />O método pode ser aplicado tanto no trabalho quanto no estudo
          para aumentar a concentração. A técnica também maximiza o tempo e a
          eficiência, e ajuda até mesmo a evitar atrasos e a obedecer prazos.
        </Section>

        <Section title="Pomodoro Timer" subtitle="Como usar o Pomodoro Timer">
          1. Decida a tarefa a ser realizada.
          <br />
          2. Defina o temporizador Pomodoro (tradicionalmente para 25 minutos).
          <br />
          3. Inicie o temporizador e foque somente na atividade selecionada
          durante esse período.
          <br />
          4. Ao concluir o tempo, tire uma pausa curta, de pelo menos 5 minutos.
          <br />
          5. Repita o processo quatro vezes.
          <br />
          6. Ao completar o ciclo, tire uma pausa mais longa, de 15 a 30
          minutos.
          <br />
          <br />
          Agora, você deve repetir esse processo inteiro até concluir suas
          atividades. Afinal, a técnica é cíclica.
          <br />
          <br />
          Vale lembrar que as pausas devem sempre ser desassociadas do seu
          trabalho. Ou seja, aproveite o momento para tomar café, andar um
          pouco, esticar o corpo… ou, simplesmente, fazer nada e descansar.
        </Section>

        <FAQ />

        <Footer />
      </Main>
    </Flex>
  );
};

export default Layout;
