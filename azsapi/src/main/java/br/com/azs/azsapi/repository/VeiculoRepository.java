package br.com.azs.azsapi.repository;

import br.com.azs.azsapi.models.Motorista;
import br.com.azs.azsapi.models.Veiculo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author luisg
 */
public interface VeiculoRepository extends JpaRepository<Veiculo, Long>{
    @Query("SELECT m FROM Veiculo m WHERE LOWER(m.placa) = LOWER(:placa)")
    public List<Motorista> findByPlate(@Param("placa") String placa);
}
