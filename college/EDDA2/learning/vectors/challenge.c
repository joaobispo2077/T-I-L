// Crie um programa que pede que o usuario digite 4 notas decimais de 0 a 10
// de 4 alunos e os valores deverao ser armazenados em uma matriz bidiomensional.
// Faça a media das notas de cada aluno e armazene as 4 medias em um vetor. Por
// ultimo coloque na tela do usuario a mensagem informando a media de cada aluno
#include <stdio.h>
#define TOTAL_STUDENTS 2
#define TOTAL_NOTES 2

int main(void)
{
  float studentsXnotes[TOTAL_STUDENTS][TOTAL_NOTES];
  float medias[TOTAL_STUDENTS];

  float media = 0;

  //carrega notas do aluno e calcula media
  for (int student = 0; student < TOTAL_STUDENTS; student++)
  {

    for (int note = 0; note < TOTAL_NOTES; note++)
    {

      printf("\n\nDigite a nota %i do estudante %i: ", note + 1, student + 1);
      scanf("%f", &studentsXnotes[student][note]);
      media += studentsXnotes[student][note];
    }
    medias[student] = media / TOTAL_NOTES;
    media = 0;
  }

  // exibe notas dos alunos e media
  for (int student = 0; student < TOTAL_STUDENTS; student++)
  {

    for (int note = 0; note < TOTAL_NOTES; note++)
    {

      printf("\n\no estudante _%i_ na avaliacao _%i_ tirou a nota _%.2f_: ", student + 1, note + 1, studentsXnotes[student][note]);
    }
    printf("\n\n E TEVE A MEDIA: _%.2f_: ", medias[student]);
  }
  return 0;
}