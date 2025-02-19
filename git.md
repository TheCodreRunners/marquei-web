# Comandos Git do Dia a Dia

| Comando | Descrição |
|---------|-----------|
| `git init` | Inicializa um repositório Git em um diretório. |
| `git clone <repo_url>` | Clona um repositório remoto para a máquina local. |
| `git status` | Mostra o status atual do repositório. |
| `git add <arquivo>` | Adiciona um arquivo específico para staging. |
| `git add .` | Adiciona todos os arquivos modificados para staging. |
| `git commit -m "mensagem"` | Cria um commit com as mudanças adicionadas ao staging. |
| `git push` | Envia os commits locais para o repositório remoto. |
| `git pull` | Atualiza o repositório local com mudanças do remoto. |
| `git fetch` | Baixa mudanças do repositório remoto, sem mesclar. |
| `git branch` | Lista as branches existentes no repositório. |
| `git branch <nome>` | Cria uma nova branch. |
| `git checkout <branch>` | Muda para uma branch existente. |
| `git checkout -b <branch>` | Cria e muda para uma nova branch ao mesmo tempo. |
| `git merge <branch>` | Mescla as mudanças de uma branch na branch atual. |
| `git rebase <branch>` | Rebaseia a branch atual sobre outra. |
| `git reset --hard <commit>` | Reseta o repositório para um commit específico, descartando mudanças. |
| `git reset --soft <commit>` | Reseta para um commit específico sem perder mudanças. |
| `git stash` | Salva mudanças não commitadas temporariamente. |
| `git stash pop` | Recupera as mudanças salvas no stash. |
| `git log` | Exibe o histórico de commits. |
| `git diff` | Mostra as diferenças entre commits ou arquivos. |
| `git revert <commit>` | Cria um novo commit que desfaz um commit específico. |
| `git cherry-pick <commit>` | Aplica um commit específico em outra branch. |
| `git tag <tag_name>` | Cria uma nova tag. |
| `git remote -v` | Lista os repositórios remotos configurados. |
| `git remote add <nome> <url>` | Adiciona um novo repositório remoto. |
| `git rm --cached <arquivo>` | Remove um arquivo do controle de versão sem apagá-lo do disco. |
| `git mv <arquivo_antigo> <arquivo_novo>` | Renomeia ou move um arquivo versionado. |
