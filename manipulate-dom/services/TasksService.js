import { ConnectionFactory } from "./ConnectionFactory.js";
import { TasksDao } from "../dao/TasksDao.js";

export class TasksService {

    cadastra(task) {

        return ConnectionFactory
            .getConnection()
            .then(connection => new TasksDao(connection))
            .then(dao => dao.adiciona(task))
            .then(() => 'Tarefa adicionada com sucesso')
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível adicionar a tarefa')
            });




    }

    lista() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new TasksDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as tarefas');

            });
    }

    apaga() {

        return ConnectionFactory
            .getConnection()
            .then(connection => new TasksDao(connection))
            .then(dao => dao.apagaTodos())
            .then(() => 'Tarefas Apagadas com sucesso')
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível apagar as tarefas');

            });
    }
}