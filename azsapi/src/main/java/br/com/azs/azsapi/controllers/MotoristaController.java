/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.azs.azsapi.controllers;

import br.com.azs.azsapi.exception.ResourceNotFoundException;
import br.com.azs.azsapi.models.Motorista;
import br.com.azs.azsapi.repository.MotoristaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
public class MotoristaController {
  @Autowired
  private MotoristaRepository _motoristaRepository;
    
  @CrossOrigin
  @GetMapping("/motoristas")
  public List<Motorista> getAllUsers() {
    return _motoristaRepository.findAll();
  }
  
  @CrossOrigin
  @GetMapping("/motorista/{id}")
  // public Motorista findByMotoristaId (@PathVariable long id) throws Throwable {
  //     System.out.println(id);
  //   return _motoristaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Não foi possível encontrar este motorista"));
  // }
  ResponseEntity<?> getMotorista(@PathVariable long id) {
      Optional<Motorista> group = _motoristaRepository.findById(id);
      return group.map(response -> ResponseEntity.ok().body(response))
              .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
  @CrossOrigin
  @GetMapping("/motorista/nome={nome}")
  public List<Motorista> findByMotoristaName (@PathVariable String nome) { 
    return _motoristaRepository.findByName(nome);
  }
  @CrossOrigin
  @GetMapping("/motorista/cpf={cpf}")
  public List<Motorista> findByMotoristaCpf (@PathVariable String cpf) { 
    return _motoristaRepository.findByCpf(cpf);
  }
  @CrossOrigin
  @PostMapping("/cadmotorista")
  @ResponseStatus(code = HttpStatus.CREATED)
  public Motorista save(@RequestBody Motorista motorista) {
      return _motoristaRepository.save(motorista);
  }
  @CrossOrigin
  @PutMapping("/cadmotorista/{id}")
  public ResponseEntity<Motorista> updateCustomer(@RequestBody Motorista updateMotorista, @PathVariable long id) throws Throwable{
    // Motorista motorista = _motoristaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Motorista não encontrado"));
    Motorista motorista = _motoristaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Motorista não encontrado"));
    
    motorista.setNome(updateMotorista.getNome());
    motorista.setCpf(updateMotorista.getCpf());
    motorista.setDataNascimento(updateMotorista.getDataNascimento());
    motorista.setSexo(updateMotorista.getSexo());
    motorista.setCategoria(updateMotorista.getCategoria());
    motorista.setNumerocnh(updateMotorista.getNumerocnh());
    motorista.setData_expedicaocnh(updateMotorista.getData_expedicaocnh());
    motorista.setData_validadecnh(updateMotorista.getData_validadecnh());
    
    final Motorista updatedMotorista = _motoristaRepository.save(motorista);
    return ResponseEntity.ok(updatedMotorista);
  }
  
  @DeleteMapping("/motorista/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
        _motoristaRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
