// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''
    
            res.on('data', dados => {
                result += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turma =>[].concat(...turma))
.then(alunos =>alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
.catch(e => e.message)

getTurma('D').catch(e => console.log(e.message))
