import React from 'react';

import FAQQuestion from '../FAQQuestion';
import Section from '../Section';

const FAQ: React.FC = () => {
  return (
    <Section title="FAQ" subtitle="Perguntas frequentes">
      <FAQQuestion
        question="Como funciona o método Pomodoro?"
        answer="A técnica Pomodoro propõe uma divisão da jornada em intervalos de 25 minutos. Durante esses bloquinhos de tempo, uma determinada tarefa deve ser realizada ininterruptamente. Ao fim de cada período, é feita uma pausa de 5 minutos e, ao final de cada 4 blocos de 25 minutos, uma pausa de 30."
      />

      <FAQQuestion
        question="Quanto tempo é um pomodoro?"
        answer="O tempo dedicado para tarefas, chamado de pomodoro, geralmente dura 25 minutos e é seguido de um pequeno intervalo de 5 minutos. A cada 4 pomodori (plural de pomodoro), o intervalo é um pouco maior, de 15 a 30 minutos."
      />

      <FAQQuestion
        question="O que é ciclo Pomodoro?"
        answer="Um Pomodoro é um ciclo de trabalho focado que dura 25 minutos. Durante esse tempo, não se pode fazer nada além daquela tarefa planejada (por exemplo estudar um capítulo de uma matéria). A cada final de Pomodoro, ficam uns 5 minutos liberados para descansar a mente, espairecer, fazer um alongamento."
      />

      <FAQQuestion
        question="Quem foi o criador da técnica Pomodoro?"
        answer="Quem inventou: O italiano Francesco Cirillo, fundador de uma consultoria de produtividade e eficiência em Berlim, na Alemanha, e autor do livro The Pomodoro Technique. Quando foi inventado: Cirillo inventou a Técnica no fim dos anos 1980, quando estava na faculdade."
      />
    </Section>
  );
};

export default FAQ;
