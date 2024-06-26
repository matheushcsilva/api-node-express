import {
    autor
} from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listaLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na requisição`
            });
        }
    }

    static async listaLivroPorID(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na requisição do livro`
            });
        }
    }

    static async cadastraLivros(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {
                ...novoLivro,
                autor: {
                    ...autorEncontrado._doc
                }
            };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "Criado com sucesso",
                livro: livroCriado
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar livro!`
            })
        }
    }

    static async atualizaLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "Livro atualizado com sucesso!"
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na atualização do livro`
            });
        }
    }

    static async deletaLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: "Livro removido com sucesso!"
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na remoção do livro`
            });
        }
    }

    static async listaLivroPorEditora(req,res){
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - Falha na busca dos livros`
            });
        }
    }

};
export default LivroController;