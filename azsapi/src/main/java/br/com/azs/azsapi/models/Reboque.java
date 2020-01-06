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
@Table(name = "reboque")
@EntityListeners(AuditingEntityListener.class)
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Reboque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private long id;

    @JoinColumn(name = "id_veiculo", nullable = false, referencedColumnName = "id")
     @OneToOne(cascade=CascadeType.ALL)
    private Veiculo id_veiculo;

    @Column(name = "tipo", nullable = false)
    private String tipo;
}