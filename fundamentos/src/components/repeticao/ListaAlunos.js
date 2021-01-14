import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const lis = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} - Média: <strong>{aluno.nota}</strong>
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{lis}</ul>
    </div>
  );
};
