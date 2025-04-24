# 📝 Painel de Tarefas - Desafio Técnico Cyrrus

Este projeto foi desenvolvido como parte do **Desafio Técnico - Estágio** da Cyrrus. A ideia era construir uma aplicação para gerenciamento de tarefas com subtarefas, filtros e ordenação.

---

## Deploy
Acesse [aqui](painel-de-tarefas.vercel.app).

## Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
2. **Instale as dependências**
   ```bash
    npm install
3. **Execute o projeto**
    ```bash
    ng serve

## Tecnologias utilizadas
  <li>Angular 17 (standalone)
  <li>Angular Forms
  <li>Angular CDK (Drag & Drop)
  <li>ngx-toastr (notificações)
  <li>CSS puro (sem Tailwind ou Bootstrap)
  <li>Local em memória (sem backend ou localStorage)

  ## Funcionalidades implementadas
  <li>Cadastro, edição e remoção de tarefas
  <li>Subtarefas com checklist interativo
  <li>Validação de formulário com feedback visual
  <li>Filtro por título e status (pendente/concluída)
  <li>Contador de tarefas por status
  <li>Detecção de tarefas atrasadas
  <li>Reordenar tarefas manualmente (drag & drop)
  <li>Ordenação por data de criação (mais recentes/antigas)
  <li>Design responsivo para dispositivos móveis
  <li>Toasts personalizados com feedback visual

 ## Respostas do desafio
1. Qual foi sua lógica para estruturar o projeto?
Como não tenho tanta experiência com Angular, tentei manter tudo o mais simples e organizado possível. Usei componentes separados para cada parte da aplicação e um serviço para centralizar os dados. Segui a estrutura padrão de projeto standalone porque ela é mais enxuta e moderna. Foquei em montar a lista, o formulário e depois ir adicionando as funcionalidades aos poucos.

2. Que parte você achou mais difícil ou travou?
O começo foi o mais complicado. Tive dificuldade com a estrutura do Angular standalone, entender como funcionam os imports, roteamento e os formulários. Também tive um pouco de dificuldade para fazer as validações funcionarem direitinho e ajustar a lógica da data de entrega pra não marcar tarefas do dia como atrasadas.

3. O que faria diferente se tivesse mais tempo?
Com mais tempo, eu deixaria a aplicação ainda mais organizada, talvez criando uma tela só para visualização da tarefa, implementaria prioridade (Alta, Média, Baixa) com ordenação, e pensaria em algumas melhorias no layout. Também incluiria animações e testes automatizados, que são coisas que ainda quero aprender com calma.

4. O que faria diferente se fosse para um cliente real?
A primeira coisa seria garantir que a experiência no celular esteja 100%, pensando desde o início em responsividade. Também pensaria em uma base de dados real, um login simples, e um sistema de categorias ou etiquetas pra organização.

5. Você usou alguma ferramenta ou inteligência artificial para ajudar? Como?
Sim, usei o ChatGPT em várias partes, principalmente pra entender como funciona determinada coisa no Angular (como validação, rotas, forms standalone, drag & drop, etc). Mas sempre procurando entender o que estava sendo feito.

## Imagens 
![image](https://github.com/user-attachments/assets/5fdf2f26-120c-459b-b2a3-5f9b10360de8)

![image](https://github.com/user-attachments/assets/53488223-ec1d-474e-86ff-97769e0d0010)

