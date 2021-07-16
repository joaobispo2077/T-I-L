git ci -> git commit

# branches

git co -> git checkout -> change branch
git cm -> git checkout master -> return to branch master
git cb -> git checkout -b -> change to a new branch

# status & log

git st -> git status -sb -> show commit status prettify
git sf -> git show --name-only commitHashing -> show commit info prettify
git lg -> git log --pretty=format:'%Cred%h%Creset %C(bold)%cr%Creset %Cgreen<%an>%Creset %s' --max-count=30 -> -> show commit info prettify

# pull

git incoming  -> git !(git fetch --quiet && git log --pretty=format:'%C(yellow)%h %C(white)- %C(red)%an %C(white)- %C(cyan)%d%Creset %s %C(white)- %ar%Creset' ..@{u})
 -> retorna todos os commits que estão no upstream e não existem localmente.

git outgoing -> !(git fetch --quiet && git log --pretty=format:'%C(yellow)%h %C(white)- %C(red)%an %C(white)- %C(cyan)%d%Creset %s %C(white)- %ar%Creset' @{u}..)
-> Retorna todos os commits que existem localmente e não existem no upstream.

git unstage -> git reset HEAD -- fileName -> remove arquivo da staging area
git undo -> git checkout -- filename -> desfaz alterações em um arquivo
git rollback -> git reset --soft HEAD~1 -> desfaz o último commit e deixa as alterações na staging area
