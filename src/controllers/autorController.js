import { autor } from "../models/Autor.js";

class AutorController{

    static async listaAutor(req,res){
       try{
        const listaAutores = await autor.find({});
        res.status(200).json(listaAutores);
       }catch(erro){
        res.status(500).json({message:`${erro.message} - Falha na requisição`});
       }
    }

    static async listaAutorPorId(req,res){
        try{
         const id = req.params.id;
         const autorEncontrado = await autor.findById(id);
         res.status(200).json(autorEncontrado);
        }catch(erro){
         res.status(500).json({message:`${erro.message} - Falha na requisição do Autor`});
        }
     }

    static async cadastraAutor(req,res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Criado com sucesso",autor: novoAutor});
        }catch(erro){
            res.status(500).json({message:`${erro.message} - Falha ao cadastrar autor!`})
        }
    }

    static async atualizaAutor(req,res){
        try{
         const id = req.params.id;
         await autor.findByIdAndUpdate(id,req.body);
         res.status(200).json({message:"Autor atualizado com sucesso!"});
        }catch(erro){
         res.status(500).json({message:`${erro.message} - Falha na atualização do Autor`});
        }
     }

     static async deletaAutor(req,res){
        try{
         const id = req.params.id;
         await autor.findByIdAndDelete(id);
         res.status(200).json({message:"Autor removido com sucesso!"});
        }catch(erro){
         res.status(500).json({message:`${erro.message} - Falha na remoção do Autor`});
        }
     }

};
export default AutorController;
