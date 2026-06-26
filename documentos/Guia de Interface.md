# Guia de Interface
  
### Tela de Boas-vindas

<img width="1867" height="852" alt="Captura de tela 2026-06-25 160809" src="https://github.com/user-attachments/assets/9a9ecb8a-658c-4347-ba79-bd2d258bd4d6" />




#### Objetivo

A tela de boas-vindas é a primeira interface apresentada ao usuário. Seu objetivo é permitir que ele escolha entre acessar uma conta já existente ou criar um novo cadastro.


Componentes

- Botão Fazer Login.
- Botão Criar Conta.

### Tela de Login

<img width="1848" height="848" alt="Captura de tela 2026-06-25 160826" src="https://github.com/user-attachments/assets/fd4a48a5-5938-4da8-ad2c-049dce0e50ef" />

#### Objetivo 
Permitir que o usuário acesse uma conta previamente cadastrada no navegador por meio do armazenamento local (Local Storage).

Componentes

- Campo para nome de usuário.
- Campo para senha.
- Botão Entrar.
- Botão Voltar, que retorna à tela de boas-vindas.

### Tela de Cadastro


<img width="1847" height="846" alt="Captura de tela 2026-06-25 160851" src="https://github.com/user-attachments/assets/770e6093-3efd-4396-90f0-de90efb117f9" />
<img width="1857" height="846" alt="Captura de tela 2026-06-25 160858" src="https://github.com/user-attachments/assets/3e5b6cd3-7832-484e-9351-e131296b6ad3" />


#### Objetivo

Permitir o cadastro de um novo usuário no navegador.

#### Componentes

Campo para nome de usuário.
Campo para senha.
Campo para confirmação de senha.
Botão Criar Conta.
Botão Voltar.

#### Validação

O cadastro somente é realizado quando os campos de senha e confirmação de senha possuem o mesmo conteúdo, e somente se não há outro usuário cadastrado no sistema com o mesmo nome. 


### Tela Home

<img width="1883" height="856" alt="Captura de tela 2026-06-25 160919" src="https://github.com/user-attachments/assets/ac305d79-0c8c-44f2-9780-660fec45102d" />

#### Objetivo

Apresentar ao usuário todas as notas cadastradas, permitindo pesquisá-las, visualizá-las e criar novas anotações.

#### Cabeçalho

Nome da aplicação (DayPage).
Saudação personalizada com o nome do usuário.
Cumprimento de acordo com o horário do dia.
Botão Sair, que encerra a sessão e retorna à tela de boas-vindas.

#### Área Principal

Campo de pesquisa para localizar notas pelo título ou pelo conteúdo.
Botão Nova Página, responsável por direcionar o usuário para a tela de criação de uma nova nota.
Área de exibição das notas cadastradas.

#### Rodapé

Rodapé padrão da aplicação.

### Tela Nova Página


<img width="1863" height="851" alt="Captura de tela 2026-06-25 161505" src="https://github.com/user-attachments/assets/b3161f99-ae9f-46b9-b1cd-69c18f7b3b4c" />


<img width="1867" height="855" alt="Captura de tela 2026-06-25 161515" src="https://github.com/user-attachments/assets/f60ec132-2a6b-43be-a97b-ed55a2a08330" />


#### Objetivo

Permitir a criação de uma nova nota.

#### Cabeçalho

Nome da aplicação.
Saudação ao usuário.
Botão Voltar para Home.
Botão Sair.

#### Área Principal

Campo para título da nota.
Campo para conteúdo da nota.
Botão Salvar.

#### Validação

A nota somente é salva quando os campos de título e conteúdo estiverem preenchidos.





### Tela Home – Notas Cadastradas

Nesta tela são exibidas as notas já criadas pelo usuário.

Também é apresentada a funcionalidade de pesquisa, permitindo localizar notas por meio de palavras ou trechos presentes no título ou no conteúdo.

<img width="1882" height="857" alt="Captura de tela 2026-06-25 161559" src="https://github.com/user-attachments/assets/0210d632-ab83-4fc8-992b-fa2d2a9b0be1" />

<img width="1883" height="851" alt="Captura de tela 2026-06-25 161637" src="https://github.com/user-attachments/assets/27652596-5c40-4ffa-8313-c143b7d4ed19" />


### Visualização de Nota

<img width="1888" height="860" alt="Captura de tela 2026-06-25 161610" src="https://github.com/user-attachments/assets/9eb0a67e-3ee5-4423-89f9-47d7c47a13e8" />


Ao selecionar uma nota na tela inicial, seu conteúdo é exibido em uma visualização completa.

Opções disponíveis

- Editar a nota.
- Salvar as alterações.
- Excluir a nota.
- Cancelar a edição e fechar a visualização sem realizar alterações.





