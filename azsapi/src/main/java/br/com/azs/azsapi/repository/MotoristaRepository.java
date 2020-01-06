/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.azs.azsapi.repository;

import br.com.azs.azsapi.models.Motorista;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author luisg
 */
@Repository
public interface MotoristaRepository extends JpaRepository<Motorista, Long>{
    @Query("SELECT m FROM Motorista m WHERE LOWER(m.nome) = LOWER(:nome)")
    public List<Motorista> findByName(@Param("nome") String nome);
    
    @Query("SELECT m FROM Motorista m WHERE LOWER(m.cpf) = LOWER(:cpf)")
    public List<Motorista> findByCpf(@Param("cpf") String cpf);
    
//    @Query("SELECT m FROM Motorista m WHERE LOWER(m.id_motorista) = LOWER(:id_motorista)");
//    public Optional<Motorista> findById(@Param("id_motorista") long id_motorista);
}
