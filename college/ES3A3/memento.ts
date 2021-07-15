// Exemplo de implementação do Memento em TypeScript para matéria de ES3A3

// Representação do Memento
export interface Memento {
  getName(): string;
  getDate(): Date;
}

export class ConcreteMemento implements Memento {
  constructor(private name: string, private date: Date, private text: string, private fileFormat: string) {

  }

  getName(): string {
    return this.name;
  };

  getDate(): Date {
    return this.date;
  };

  getFileFormat(): string {
    return this.fileFormat;
  }

  getText(): string {
    return this.text;
  }

 }

 // Originator
 export class TextEditor {
  private _text: string = '';
  public filename: string = '';

  constructor(private fileFormat: string, text: string) {
    this.text = text;
  }

  public get text(): string {
    return this._text;
  }

  public set text(value: string) {
      // validation...
     this._text = value;
   }

   save(): Readonly<Memento> {
     const date = new Date();

     return new ConcreteMemento(this.text.slice(0, 5), date, this._text, this.fileFormat);
   }

   restore(memento: Memento): void {
     const concreteMemento = memento as ConcreteMemento;
     this.text = concreteMemento.getText();
     this.filename = concreteMemento.getName();
     this.fileFormat = concreteMemento.getFileFormat();
   }
 }

 // Caretaker
 export class TextEditorBackupManager {
   private mementos: Memento[] = [];
   
   constructor(private readonly textEditor: TextEditor) {}

   backup(): void {
     this.mementos.push(this.textEditor.save());
     console.info('Dados salvos com sucesso...');
   }

   undo(): void {
    const memento = this.mementos.pop();

    if(!memento) {
      console.info('Sem mementos no momento...');
      return;
    }

    this.textEditor.restore(memento);
    console.info('Dado restaurado com suceso!');
   }
 }

 // program

 const textEditor = new TextEditor('.txt', 'Testando aula de ES3A3');
 const textEditorBackupManager = new TextEditorBackupManager(textEditor);
 console.info(textEditor)

 textEditorBackupManager.backup();
 textEditor.text = 'Testando aula de ES3A3 1223456';
 console.info(textEditor);

 textEditorBackupManager.undo();
 console.info(textEditor);