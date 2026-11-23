

### 2. paginas/*.html (uma por área do conhecimento)
Cada área já vem com um **modelo de atividade** pronto dentro de cada
trimestre (procure o comentário `MODELO DE ATIVIDADE`). Para adicionar uma
atividade nova:

1. Copie o bloco inteiro `<article class="atividade"> ... </article>`.
2. Cole logo abaixo do último `</article>` do trimestre correspondente.
3. Edite: título, descrição, justificativa, habilidades (`.chip`), fotos e link.
4. Se a atividade foi **indicada pelo professor**, deixe o selo como está.
   Se foi **escolha sua**, use `class="selo selo--escolha"` e o texto
   "Escolha do estudante".
5. Apague o bloco `placeholder-atividade` (o quadro tracejado) quando não
   precisar mais dele.

### 3. Adicionando fotos
1. Coloque o arquivo de imagem dentro de `assets/fotos/`.
2. No HTML, troque `src="../assets/fotos/placeholder.svg"` pelo caminho
   da sua imagem, por exemplo `src="../assets/fotos/matematica-t1-grafico.jpg"`.

### 4. Adicionando links de atividades
Troque `href="#"` pelo link real (Google Drive, YouTube, documento, etc.)
dentro de `<a class="link-evidencia" href="#" ...>`.

