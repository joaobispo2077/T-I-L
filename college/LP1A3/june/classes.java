class Contato { 
    private String nome;
    private String telefone;
    private String email;

    public Contato() {
        this.nome = "";
        this.telefone = "";
        this.email = "";
    }

    public Contato(String nome, String telefone, String email) {
        
 
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
    
    public void setNome(String nome) {
        this.nome = nome; 
    }

    public String getNome() {
        return this.nome; 
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone; 
    }

    public String getTelefone() {
        return this.telefone; 
    }

    public void setEmail(String email) {
        this.email = email; 
    }

    public String getEmail() {
        return this.email; 
    }    

}


class Funcionario { 
    private int idFuncionario;
    private String cpf;
    private String rg;
    private Contato contato;

    public Funcionario(int idFuncionario, String cpf, String rg, Contato contato) {      
      this.idFuncionario = idFuncionario;
      this.cpf = cpf;
      this.rg = rg;
      this.contato = contato;
    }

    public void setIdFuncionario(int idFuncionario) {
      this.idFuncionario = idFuncionario;      
    }

    public String getIdFuncionario() {
        return this.idFuncionario; 
    }
    
    public void setCpf(String cpf) {
        this.cpf = cpf; 
    }

    public String getCpf() {
        return this.cpf; 
    }

    public void setRg(String rg) {
        this.rg = rg; 
    }

    public String getRg() {
        return this.rg; 
    }

    public void setRg(String rg) {
        this.rg = rg; 
    }

    public String getRg() {
        return this.rg; 
    }

    public void setContato(Contato contato) {
        this.contato = contato; 
    }

    public String getContato() {
        return this.contato; 
    }

}

class Fornecedor { 
    private int idFornecedor;
    private String cnpj;
    private String razaoSocial;
    private Contato contato;

    public Fornecedor(int idFornecedor, String cnpj, String razaoSocial, Contato contato) {      
      this.idFuncionario = idFuncionario;
      this.cnpj = cnpj;
      this.razaoSocial = razaoSocial;
      this.contato = contato;
    }

    public void setIdFuncionario(int idFuncionario) {
      this.idFuncionario = idFuncionario;      
    }

    public String getIdFuncionario() {
        return this.idFuncionario; 
    }
    
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj; 
    }

    public String getCnpj() {
        return this.cnpj; 
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial; 
    }

    public String getRazaoSocial() {
        return this.razaoSocial; 
    }

    public void setContato(Contato contato) {
        this.contato = contato; 
    }

    public String getContato() {
        return this.contato; 
    }

}

class Cliente { 
    private int idCliente;
    private String cpf;
    private String endereco;
    private Contato contato;

    public Cliente(int idCliente, String cpf, String endereco, Contato contato) {      
      this.idCliente = idCliente;
      this.cpf = cpf;
      this.endereco = endereco;
      this.contato = contato;
    }

    public void setIdCliente(int idCliente) {
      this.idCliente = idCliente;      
    }

    public String getIdCliente() {
        return this.idCliente; 
    }
    
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getEndereco() {
        return this.endereco; 
    }

    public void setContato(Contato contato) {
        this.contato = contato; 
    }

    public String getContato() {
        return this.contato; 
    }

}