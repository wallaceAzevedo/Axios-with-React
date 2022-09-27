//LINK https://www.freecodecamp.org/portuguese/news/como-usar-o-axios-com-o-react-o-guia-definitivo-2021/#o-que-o-axios

Como fazer uma solicitação GET
Para pegar ou obter dados, faça uma solicitação GET.

    Primeiro, faça uma solicitação de publicações individuais.Se olhar para o endpoint, obterá a primeira publicação do endpoint / posts:

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
        <h1>{ post.title } < /h1>
        < p > { post.body } < /p>
        < /div>
    );
}
Para realizar essa solicitação quando o componente é montado, use o hook useEffect.Ele envolve importar o Axios, usar o método.get() para fazer uma solicitação GET para seu endpoint e usar uma callback.then() para obter de volta todos os dados da resposta.

A resposta é retornada como um objeto.Os dados(que, neste caso, são uma publicação com as propriedades id, title e body) são colocados em um state  chamado post, que é exibido no componente.

Observe que você pode sempre encontrar os dados solicitados a partir da propriedade.data da resposta.

Como fazer uma solicitação POST
Para criar dados, faça uma solicitação POST.

De acordo com a API, isso precisa ser feito no endpoint / posts.Se examinar o código abaixo, verá que há um botão para criar uma publicação:

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function createPost() {
        axios
            .post(baseURL, {
                title: "Hello World!",
                body: "This is a new post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    if (!post) return "No post!"

    return (
        <div>
        <h1>{ post.title } < /h1>
        < p > { post.body } < /p>
        < button onClick = { createPost } > Create Post < /button>
            < /div>
  );
}
Ao clicar no botão, ele chama a função createPost.

Para fazer a solicitação POST com o Axios, use o método.post().Como segundo argumento, inclua uma propriedade de objeto que especifica como você quer que seja sua nova publicação.

Mais uma vez, use uma callback.then() para obter os dados da resposta e substituir a primeira publicação que você obteve pela nova publicação que você solicitou.

Isso é bastante semelhante ao método.get(), mas o novo recurso que você quer criar é fornecido como o segundo argumento após o endpoint da API.

Como fazer uma solicitação PUT
Para atualizar determinado recurso, faça uma solicitação PUT.

Neste caso, você atualizará a primeira publicação.

Para fazer isso, Você cria outro botão.Desta vez, o botão chamará uma função para atualizar uma publicação:

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function updatePost() {
        axios
            .put(`${baseURL}/1`, {
                title: "Hello World!",
                body: "This is an updated post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    if (!post) return "No post!"

    return (
        <div>
        <h1>{ post.title } < /h1>
        < p > { post.body } < /p>
        < button onClick = { updatePost } > Update Post < /button>
            < /div>
  );
}
No código acima, use o método PUT do Axios.Como ocorre com o método POST, inclua as propriedades que deseja que estejam no recurso atualizado.

    Novamente, usando a callback.then(), atualize JSX com os dados retornados.

Como fazer uma solicitação DELETE
Por fim, para excluir um recurso, use o método DELETE.

Como exemplo, excluiremos a primeira publicação.

Observe que você não precisa de qualquer segundo argumento para realizar essa tarefa:

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function deletePost() {
        axios
            .delete(`${baseURL}/1`)
            .then(() => {
                alert("Post deleted!");
                setPost(null)
            });
    }

    if (!post) return "No post!"

    return (
        <div>
        <h1>{ post.title } < /h1>
        < p > { post.body } < /p>
        < button onClick = { deletePost } > Delete Post < /button>
            < /div>
  );
}
Na maioria dos casos, você não precisa dos dados que são retornados do método.delete().

No código acima, contudo, a callback.then() ainda é usada para garantir que sua solicitação foi resolvida com sucesso.

No código acima, depois que uma publicação foi excluída, o usuário é alertado que ela foi excluída com sucesso.Em seguida, a publicação é removida do state configurando seu valor inicial como null.

Além disso, assim que uma publicação é excluída, o texto "No post" é mostrado imediatamente após a mensagem de alerta.

Como tratar erros com o Axios
E quanto ao tratamento de erros com o Axios ?

    E se houver um erro durante a realização de uma solicitação ? Por exemplo, você pode passar os dados errados, fazer uma solicitação ao endpoint errado ou ter um erro de rede.

Para simular um erro, envie uma solicitação para um endpoint da API que não exista: /posts/asdf.

Essa solicitação retornará um código de status 404:

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        // invalid url will trigger an 404 error
        axios.get(`${baseURL}/asdf`).then((response) => {
            setPost(response.data);
        }).catch(error => {
            setError(error);
        });
    }, []);

    if (error) return `Error: ${error.message}`;
    if (!post) return "No post!"

    return (
        <div>
        <h1>{ post.title } < /h1>
        < p > { post.body } < /p>
        < /div>
    );
}
Neste caso, em vez de executar a callback.then(), o Axios lançará um erro e executará a função de callback.catch().

Nesta função, pegamos os dados do erro e os colocamos no state para alertar nosso usuário sobre o erro.Assim, se tivermos um erro, exibiremos uma mensagem de erro.

Ao rodar esse código, você verá o texto, "Error: Request failed with status code 404".

Como criar uma instância do Axios
Se olhar para os exemplos anteriores, verá que há um baseURL que você usa como parte do endpoint para o Axios realizar essas solicitações.

No entanto, é um pouco entediante escrever aquele baseURL para toda solicitação.Não seria possível simplesmente fazer com que o Axios se lembrasse de qual baseURL você está usando, já que sempre envolve um endpoint semelhante ?

    De fato, sim.Se você criar uma instância com o método.create(), o Axios se lembrará do baseURL, assim como de outros valores que você quiser especificar para cada solicitação, incluindo cabeçalhos:

import axios from "axios";
import React from "react";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        client.get("/1").then((response) => {
            setPost(response.data);
        });
    }, []);

    function deletePost() {
        client
            .delete("/1")
            .then(() => {
                alert("Post deleted!");
                setPost(null)
            });
    }

    if (!post) return "No post!"

    return (
        <div>
        <h1>{ post.title } < /h1>
        < p > { post.body } < /p>
        < button onClick = { deletePost } > Delete Post < /button>
            < /div>
  );
}
A única propriedade no objeto de configuração acima é o baseURL, para o qual você passa o endpoint.

A função.create() retorna a instância recém - criada, que, neste caso, é chamada de client.

    Então, no futuro, você pode usar todos os mesmos métodos que usou anteriormente, mas não precisa mais incluir o baseURL como o primeiro argumento.Você só precisa referenciar a rota específica que você deseja, por exemplo, /, /1 e assim por diante.

Como usar a sintaxe de async - await com o Axios
Um grande benefício de se usar promises em JavaScript(incluindo em aplicações React) é a sintaxe de async - await.

    Async - await permitem que você escreva código muito mais limpo sem funções de callback then e catch. Além disso, o código com async - await parece muito com código síncrono, sendo mais fácil de entender.

Mas como usar a sintaxe de async - await com o Axios ?

    No exemplo abaixo, as publicações são obtidas e ainda há um botão para excluir aquela publicação:

import axios from "axios";
import React from "react";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        async function getPost() {
            const response = await client.get("/1");
            setPost(response.data);
        }
        getPost();
    }, []);

    async function deletePost() {
        await client.delete("/1");
        alert("Post deleted!");
        setPost(null);
    }

    if (!post) return "No post!"

    return (
        <div>
        <h1>{ post.title } < /h1>
        < p > { post.body } < /p>
        < button onClick = { deletePost } > Delete Post < /button>
            < /div>
  );
}
Porém, no useEffect, há uma função async chamada getPost.

    Torná - la async permite que você use a palavra - chave await para resolver a solicitação GET e definir aqueles dados no state na próxima linha sem a callback.then().

Observe que a função getPost é chamada imediatamente após ser criada.

Como adendo, a função deletePost agora é async, o que é uma obrigação para se poder usar a palavra - chave await, que resolve a promise que ela retorna(todo método do Axios retorna uma promessa a ser resolvida).

Após usar a palavra - chave await com a solicitação DELETE, o usuário é alertado de que a publicação foi excluída e a publicação é definida como null.

Como você pode ver, async - await limpa e muito o código.Você pode usar essa sintaxe com o Axios facilmente.

Como criar um hook useAxios personalizado
A sintaxe async - await é uma maneira ótima de simplificar seu código, mas você pode melhorá - lo ainda mais.

Em vez de usar o useEffect para obter os dados quando o componente é montado, você pode criar seu próprio hook personalizado com o Axios para realizar a mesma operação como uma função reutilizável.

Embora você possa fazer seu hook personalizado por conta própria, há uma biblioteca muito boa e que fornece um hook personalizado useAxios chamada use - axios - client.

    Primeiro, instale o pacote:

npm install use - axios - client
Para usar o hook, importe useAxios de use - axios - client na parte superior do componente.

Como você já não precisa do useEffect, pode removê - lo da importação do React:

    import { useAxios } from "use-axios-client";

export default function App() {
    const { data, error, loading } = useAxios({
        url: "https://jsonplaceholder.typicode.com/posts/1"
    });

    if (loading || !data) return "Loading...";
    if (error) return "Error!";

    return (
        <div>
        <h1>{ data.title } < /h1>
        < p > { data.body } < /p>
        < /div>
    )
}