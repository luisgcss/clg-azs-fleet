/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.azs.azsapi.models;

/**
 *
 * @author luisg
 */
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "motorista")
@EntityListeners(AuditingEntityListener.class)
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Motorista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private long id;

    @Column(name = "nome", nullable = false)
    private String nome;
    
    @Column(name = "cpf", nullable = false)
    private String cpf;
    
    @Column(name = "data_nascimento", nullable = false)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date dataNascimento;
    
    @Column(name = "sexo", nullable = false)
    private int sexo;
    
    @Column(name = "categoria", nullable = false)
    private String categoria;
    
    @Column(name = "numerocnh", nullable = false)
    private String numerocnh;
    
    @Column(name = "data_expedicaocnh", nullable = false)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date data_expedicaocnh;
    
    @Column(name = "data_validadecnh", nullable = false)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date data_validadecnh;
}
