/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.azs.azsapi.controllers;

import br.com.azs.azsapi.models.Viagem;
import br.com.azs.azsapi.repository.ViagemRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author luisg
 */
@RestController
@RequestMapping("/api")
public class ViagemController {
  @Autowired
  private ViagemRepository _viagemController;
    
  @CrossOrigin
  @GetMapping("/viagens")
  public List<Viagem> getAllUsers() {
    return _viagemController.findAll();
  }
  
  @CrossOrigin
  @GetMapping("/viagem/{id}")
  ResponseEntity<?> getViagem(@PathVariable long id) {
      Optional<Viagem> group = _viagemController.findById(id);
      return group.map(response -> ResponseEntity.ok().body(response))
              .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @CrossOrigin
  @PostMapping("/viagem")
  @ResponseStatus(code = HttpStatus.CREATED)
  public Viagem save(@RequestBody Viagem viagem) {
      
      return _viagemController.save(viagem);
  }
}
