import { Tasks } from "../models/Tasks.js";

export class TasksDao {

    constructor(connection) {
        this._connection = connection;
        this._store = 'To-do-xxs';
    }

    adiciona(task) {
        return new Promise((resolve, reject) => {

            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(task);

            request.onsuccess = e => {
                console.log('Deu bom');
                resolve();
            };

            request.onerror = e => {
                console.log(e.target.error);
                console.log('Deu ruim');
                reject(`Não foi possível adicionar uma nova tarefa, 
                por favor tente novamente =D`);
            };

        });
    }

    listaTodos() {

        return new Promise((resolve, reject) => {

            let cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            let negociacoes = [];

            cursor.onsuccess = e => {
                let atual = e.target.result;

                if (atual) {
                    let dado = atual.value;

                    negociacoes.push(new Tasks(dado._objective, dado._status));

                    atual.continue();
                } else {
                    resolve(negociacoes);

                }

                console.log('tudo certo');
            }


            cursor.onerror = e => {
                console.log(e.target.error);

                console.log('nada certo');
                reject('Não foi possível listar as tarefas');
            };

        });

    }

    apagaTodos() {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = e => resolve('Tarefas apagadas com sucesso');

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível deletar as tarefas')

            };

        });
    }
}