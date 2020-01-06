/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.azs.azsapi.repository;

import br.com.azs.azsapi.models.Reboque;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author luisg
 */
public interface ReboqueRepository extends JpaRepository<Reboque, Long>{
    
}
