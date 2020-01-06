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

import java.util.Date;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "viagem")
@EntityListeners(AuditingEntityListener.class)
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Viagem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private long id;

    @JoinColumn(name = "id_veiculo", nullable = false, referencedColumnName = "id")
     @OneToOne
    private Veiculo id_veiculo;
    
    @JoinColumn(name = "id_motorista", nullable = false, referencedColumnName = "id")
     @OneToOne
    private Motorista id_motorista;

    @Column(name = "produto", nullable = false)
    private String produto;

    @Column(name = "valor", nullable = false)
    private double valor;
    
    @Column(name = "data_inicio", nullable = false)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date data_inicio;

    @Column(name = "data_fim", nullable = true)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date data_fim;
}
