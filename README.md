# Password Generator

### Aplicação geradora de senhas. Neste projeto apliquei as configurações para o docker e esteitas de CD/CD com GitHub Actions para testes e para deploy em uma instância EC2 na AWS.

## Pré-requisitos

**Docker Compose V2**

### Para rodar essa aplicação:

1. Clone esse repositório.
3. Configure os arquivos `.env` nos diretórios back-end e front-end conforme `.env.example`
3. Na raiz do projeto execute o comando `docker compose up`


### URL:
    O *endpoint* do serviço estará disponível em http://localhost:80



### Rota Aplicação Web: 

endpoint `/` é um formulário para criação de senha.


### Rotas para acessar a API pela porta 80:

```
POST

    /api/generate-password

    body: { length: number } /* length é o tamanho da senha retornada pela API, deve ser um número: 1 <= length <= 25 */

    res: { password: string }

      
exemplo: http://localhost:80/api/generate-password
```

Links:

Deploy: http://ec2-34-228-57-150.compute-1.amazonaws.com/