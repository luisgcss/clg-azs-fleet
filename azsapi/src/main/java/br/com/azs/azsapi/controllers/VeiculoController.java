/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.azs.azsapi.controllers;

import br.com.azs.azsapi.exception.ResourceNotFoundException;
import br.com.azs.azsapi.models.Cavalo;
import br.com.azs.azsapi.models.Motorista;
import br.com.azs.azsapi.models.Reboque;
import br.com.azs.azsapi.models.Veiculo;
import br.com.azs.azsapi.repository.VeiculoRepository;
import br.com.azs.azsapi.repository.CavaloRepository;
import br.com.azs.azsapi.repository.ReboqueRepository;
import java.util.List;
import java.util.Map;
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
public class VeiculoController {
  @Autowired
  private VeiculoRepository _veiculoRepository;
  @Autowired
  private CavaloRepository _cavaloRepository;
  @Autowired
  private ReboqueRepository _reboqueRepository;
  
  @CrossOrigin
  @GetMapping("/veiculos")
  public List<Veiculo> getAllUsers() {
    return _veiculoRepository.findAll();
  }
  @CrossOrigin
  @GetMapping("/veiculo/{idVeiculo}")
  public Veiculo findByVeiculoId (@PathVariable long idVeiculo) { 
    return _veiculoRepository.findById(idVeiculo).orElseThrow(() -> new ResourceNotFoundException("Não foi possível encontrar este veiculo"));
  }
  @CrossOrigin
  @GetMapping("/veiculo/placa={placa}")
  public List<Motorista> findByVeiculoPlate (@PathVariable String placa) { 
    return _veiculoRepository.findByPlate(placa);
  }
  @CrossOrigin
  @PostMapping(value = "/veiculo")
  @ResponseStatus(code = HttpStatus.CREATED)
  public Veiculo save(@RequestBody Map<String, String> json) {
      Veiculo veiculo = new Veiculo();
      veiculo.setAno(json.get("ano"));
      veiculo.setChassi(json.get("chassi"));
      veiculo.setCidade(json.get("cidade"));
      veiculo.setEstado(json.get("estado"));
      veiculo.setFabricante(json.get("fabricante"));
      veiculo.setModelo(json.get("modelo"));
      veiculo.setPlaca(json.get("placa"));
      veiculo.setRenavam(json.get("renavam"));
      veiculo.setTipo(json.get("tipo"));
      
      Veiculo veiculoSalvo = _veiculoRepository.save(veiculo);
      
      if(veiculoSalvo.getTipo().equals("cavalo")) {
          Cavalo cav = new Cavalo();
          cav.setId_veiculo(veiculoSalvo);
          cav.setTipo(json.get("subTipo"));
          _cavaloRepository.save(cav);
      } else if (veiculoSalvo.getTipo().equals("reboque")) {
          Reboque reb = new Reboque();
          reb.setId_veiculo(veiculoSalvo);
          reb.setTipo(json.get("subTipo"));
          _reboqueRepository.save(reb);
      }
      
      return veiculoSalvo;
  }
  @CrossOrigin
  @PutMapping(value = "/veiculo")
  public ResponseEntity<Veiculo> updateCustomer(@RequestBody Veiculo updateVeiculo){
    Veiculo veiculo = _veiculoRepository.findById(updateVeiculo.getId()).orElseThrow(() -> new ResourceNotFoundException("Veiculo não encontrado"));

    
    final Veiculo updatedVeiculo = _veiculoRepository.save(veiculo);
    return ResponseEntity.ok(updatedVeiculo);
  }
  @CrossOrigin
  @DeleteMapping("/delmotorista/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
        _veiculoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
