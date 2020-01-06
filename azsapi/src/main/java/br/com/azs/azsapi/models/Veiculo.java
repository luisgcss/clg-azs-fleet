package br.com.azs.azsapi.models;
/**
 *
 * @author luisg
 */
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "veiculo")
@EntityListeners(AuditingEntityListener.class)
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Veiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private long id;

    @Column(name = "placa", nullable = false)
    private String placa;
    
    @Column(name = "modelo", nullable = false)
    private String modelo;

    @Column(name = "cidade", nullable = false)
    private String cidade;

    @Column(name = "estado", nullable = false)
    private String estado;

    @Column(name = "renavam", nullable = false)
    private String renavam;

    @Column(name = "chassi", nullable = false)
    private String chassi;

    @Column(name = "fabricante", nullable = false)
    private String fabricante;

    @Column(name = "ano", nullable = false)
    private String ano;

    @Column(name = "tipo", nullable = false)
    private String tipo;
}

