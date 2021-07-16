// Exemplo de implementação do Memento em TypeScript para matéria de ES3A3

// Representação do Memento
export interface Memento {
  getName(): string;
  getDate(): Date;
}
export class ConcreteMemento implements Memento {
  constructor(
    private readonly name: string,
    private readonly date: Date,
    private readonly text: string,
    private readonly fileFormat: string
  ) {}

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
  private _filename: string = '';
  private _fileFormat: string = '';

  constructor(
    filename: string,
    fileFormat: string,
    text: string,
  ) {
    this.text = text;
    this.filename = filename;
    this.fileFormat = fileFormat;

  }

  public get text(): string {
    //
    return this._text;
  }

  public set text(value: string) {
      // validation...
     this._text = value;
   }

  public get filename(): string {
    return this._filename;
  }

  public set filename(value: string) {
     this._filename = value;
   }

  public get fileFormat(): string {
    return this._fileFormat;
  }

  public set fileFormat(value: string) {
     this._fileFormat = value;
   }

  save(): Readonly<Memento> {
    const date = new Date();
    console.log(`Saving data at ${date.toLocaleString()}...`);
    return new ConcreteMemento(this.filename, date, this.text, this.fileFormat);
  }

  restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;

    this.text = concreteMemento.getText();
    this.filename = concreteMemento.getName();
    this.fileFormat = concreteMemento.getFileFormat();
  }

 }

 // Caretaker - Command
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
    console.info('Dados restaurados com suceso!');
   }
 }

 // program

 const textEditor = new TextEditor('Example_design_pattern','.txt', 'aula de ES3A3');
 const textEditorBackupManager = new TextEditorBackupManager(textEditor);
 console.info("\n\n# first text editor",textEditor)

 textEditorBackupManager.backup();
 textEditor.text = 'Testando aula de ES3A3 1223456';
 console.info("\n\n@ second text editor",textEditor);

 textEditorBackupManager.undo();
 console.info("\n\n$ third text editor", textEditor);